import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [resultData, setResultData] = useState("");
  let BmiResult = (e) => {
    e.preventDefault();
    let result = weight / (((height / 100) * height) / 100);
    setBmi(result);
    console.log(bmi);

    if (bmi < 18.5) {
      setResultData("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setResultData("Normal Weight ");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setResultData("OverWeight");
    } else {
      setResultData("Obese");
    }
  

  };

  let  ResetBmi =()=>{
    setHeight(0);
    setWeight(0);
    setBmi(0);
    setResultData("");
  }
  

  return (
    <div className="flex flex-col  items-center justify-center m-4 bg-slate-300 w-11/12">
      <h1 className="text-2xl font-extrabold mb-10">BMI CALCULATOR</h1>
      <form>
        <div className="">
          <label className="mb-5 font-semibold" htmlFor="">
            Enter Your Height(cm)
          </label>
          <br />

          <input
            className="w-[60vw] p-1"
            type="number"
            name=""
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className=" mt-10">
          <label className="mb-5 font-semibold" htmlFor="">
            Enter Your Weight(kg)
          </label>
          <br />

          <input
            className="w-[60vw] p-1"
            type="number"
            name=""
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={BmiResult}
            className="mt-10 bg-blue-500 text-white p-2 rounded-md  mr-5"
          >
            Calculate
          </button>
        </div>
      </form>
      <button onClick={ResetBmi} className="mt-10 bg-red-500 text-white p-2 rounded-md mr-5">
        Reset
      </button>

      <div className="flex flex-col bg-blue-200 mt-36 w-[80vw]">
        <h2 className="text-2xl font-bold m-2">Your BMI: {bmi}</h2>
        <h2 className="text-2xl font-bold m-3">Result:{resultData}</h2>
      </div>

      <h2 className="mt-10 font-mono font-semibold">&copy; 2024 || Developed by Probin</h2>
    </div>
  );
}

export default App;
