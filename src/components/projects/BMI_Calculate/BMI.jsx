import React, { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [text, setText] = useState("");

  const [disabled, setDisabled] = useState(true);

  const calculateBMI = () => {
    const high = parseInt(height) / 100;
    const cal = (parseInt(weight) / (high * high)).toFixed(2);
    setBMI(cal);
    if (cal < 18.5) {
      setText("Your Are in underweight");
    } else if (cal < 24.9) {
      setText("Your Are in Normal Weight");
    } else if (cal < 29.9) {
      setText("Your Are in  Over weight");
    } else {
      setText("Your Health is not fit ");
    }
  };
  return (
    <section className="w-full h-[50vh] flex items-center justify-center bg-gray-200">
      <div className="lg:w-4/12 md:w-6/12 w-10/12 bg-white  mx-auto p-8 rounded-lg shadow-xl ">
        <h1 className="text-gray-500 font-semibold text-xl  text-center ">
          BMI Calculator
        </h1>

        <div className="w-full  flex  items-center gap-6">
          {/* Weight  */}
          <div className="flex gap-3 w-full items-start flex-col">
            <label
              htmlFor="Weight"
              className="text-lg font-semibold text-gray-600"
            >
              {" "}
              Weight
            </label>
            <input
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                setDisabled(false);
              }}
              type="text"
              placeholder="Weight"
              className="border outline-sky-500 w-full bg-gray-100 py-1 px-3 rounded-md shadow-md "
            />
          </div>

          {/* Height */}
          <div className="flex items-start gap-3 w-full flex-col">
            <label
              htmlFor="Weight"
              className="text-lg font-semibold text-gray-600"
            >
              {" "}
              Height
            </label>
            <input
              type="text"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              placeholder="Weight"
              className="border outline-sky-500 w-full bg-gray-50 py-1 px-3 rounded-md shadow-md "
            />
          </div>
        </div>

        <div className="flex justify-between ">
          <button
            onClick={calculateBMI}
            className="bg-gray-600 my-4 hover:bg-gray-500  text-white px-4 py-1 rounded-lg "
            disabled={disabled}
          >
            Calculate{" "}
          </button>
          <button
            onClick={() => {
              setBMI("");
              setDisabled(true);
              setHeight("");
              setWeight("");
              setText("");
            }}
            className="bg-rose-600 my-4 hover:bg-rose-500  text-white px-4 py-1 rounded-lg "
          >
            {" "}
            Rest
          </button>
        </div>
        <div className="w-full bg-green-100 py-1 px-4 rounded-md font-semibold text-green-500">
          <p>
            <span className="text-orange-500">Your BMI:</span>{" "}
            <span className="text-gray-700"> {BMI}</span> {text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BMI;
