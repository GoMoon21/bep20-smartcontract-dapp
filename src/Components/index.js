import { alertTitleClasses, cardClasses } from "@mui/material";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Web3 from "web3";
import contractABI from "../ABI/test.json";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const web3 = new Web3(Web3.givenProvider);

const contractAddr = "0xC1742A30b7469f49f37239B1c2905876821700e8";
const SimpleContract = new web3.eth.Contract(contractABI, contractAddr);

export default function Index() {
  const [functionData, setFunctionData] = useState({});
  const [func, setFunc] = useState();
  const [sendType, setSendType] = useState();
  const [returnVal, setReturnVal] = useState("");
  var formData = {};

  const handleClick = (name) => async () => {
    setFunc(name);
  };

  useEffect(() => {
    const tmp = {};
    for (const [key, value] of Object.entries(contractABI)) {
      if (value.type === "function") {
        Object.assign(tmp, { [key]: value });
      }
    }
    console.log(tmp);
    setFunctionData(tmp);
  }, []);

  const handleAction = async () => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const { gas_price, gas_max, ...rest } = formData;

    var data = [];

    for (const [key, value] of Object.entries(rest)) {
      data.push(value);
    }
    let result;
    const functionKey = Object.keys(functionData).find(item => functionData[item].name === func);
    const funcItem = functionData[functionKey];

    try {

      if (funcItem.stateMutability === "view") {
        result = await SimpleContract.methods[func](...data).call();
      } else {
        result = await SimpleContract.methods[func](...data).send({
          from: account,
          gasPrice: gas_price,
          gas: gas_max,
        });
      }
    } catch (error) {

      alert("Please input the data correctly.");
    }
    setReturnVal(result);
  };

  const handleEstimateGas = async () => {
    const accounts = await window.ethereum.enable();

    const account = accounts[0];
    const { gas_price, gas_max, ...rest } = formData;

    var data = [];

    for (const [key, value] of Object.entries(rest)) {
      data.push(value);
    }

    try {
      var result = await SimpleContract.methods[func](...data).estimateGas({
        from: account,
        gasPrice: undefined,
        gas: undefined,
      });
      alert(`Estimated gas is ${result}`);
    } catch (error) {
      alert("Please enter the data correctly.");
    }
  };
  const handleChange = (name, index) => (e) => {
    formData = Object.assign(formData, { [name]: e.target.value });
    formData = Object.keys(formData)
      .sort()
      .reduce(function (result, key) {
        result[key] = formData[key];
        return result;
      }, {});
  };

  const getValue = (value) => {
    console.log("get Value : ", value);
  };

  return (
    <React.Fragment>
      <div className="d-flex flex-row">
        <div
          className="1"
          style={{
            width: "280px",
            height: "100vh",
            background: "rgb(37,47,62)",
            overflowY: 'scroll',
          }}
        >
          <div className="search p-2">
            <Search getValue={getValue} />
          </div>
          <div className="">
            {functionData &&
              Object.keys(functionData).map(
                (item, index) =>
                  functionData[item].type == "event" ||
                  (functionData[item].type == "function" && (
                    <div key={index}>
                      <div
                        className="px-3 text-white text-opacity-75"
                        style={{ cursor: "pointer" }}
                        onClick={handleClick(functionData[item].name)}
                      >
                        {functionData[item].name}
                      </div>
                    </div>
                  ))
              )}
          </div>
        </div>
        <div className="d-flex flex-column w-100">
          <div
            className="w-100 p-2 rounded-2"
            style={{ boxShadow: "0px 8px 10px -5px rgb(0 0 0 / 20%)" }}
          >
            Fucntion NAME : {func}
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center p-5">
            <div>
              {functionData &&
                Object.keys(functionData).map((item) =>
                  functionData[item].name == func ? (
                    <Paper elevation={16} className="p-5">
                      {" "}
                      Input Parameter
                      {functionData[item].inputs &&
                        functionData[item].inputs.map((name, index) => {
                          return (
                            <div key={name.name}>
                              <TextField
                                id={name.name}
                                label={name.name}
                                variant="standard"
                                onChange={handleChange(name.name, index)}
                                key={index}
                              />
                            </div>
                          );
                        })}
                      <div className="d-flex justify-content-center mt-3">
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={handleAction}
                        >
                          Action
                        </Button>
                        <Button
                          variant="outlined"
                          className="mx-2"
                          size="small"
                          onClick={handleEstimateGas}
                        >
                          Estimate Gas
                        </Button>
                      </div>
                      <div>
                        <TextField
                          id="gas_price"
                          label="Gas Price"
                          variant="standard"
                          onChange={handleChange("gas_price")}
                        />
                      </div>
                      <div>
                        <TextField
                          id="gas_max"
                          label="Max Gas"
                          variant="standard"
                          onChange={handleChange("gas_max")}
                        />
                      </div>
                    </Paper>
                  ) : (
                    ""
                  )
                )}
            </div>
            <div>
              <Paper
                elevation={16}
                style={{ minWidth: "290px", minHeight: "260px" }}
                className="p-3 mx-5"
              >
                <div className="p-2" >Result : </div>
                <div style = {{overflow: "auto"}}>{returnVal}</div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
