import React, { useState } from "react";

export default function Marks() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [mark, setMarks] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [average, setAverage] = useState(0);
  const addNewSub = () => {
    setSubjects([
      ...subjects,
      {
        subject: '',
        mark: 0,
      },
    ]);
  };

  const calculate = () => {
    subjects.map(({ mark }) => {
      setMarks((mark) => {
parseInt(mark) += parseInt(mark)
      });
    });
  };
  return (
    <section className="w-9/12 mx-auto border p-4 shadow-xl border-gray-400 bg-gray-200 rounded-lg mt-10">
      <h3 className="text-xl text-center text-gray-700 font-semibold md:text-2xl">
        Students Marks Calculate
      </h3>

      <section className="flex items-center justify-between ">
        <h3 className="text-gray-500 ">Add New Students</h3>
        <button
          className="bg-slate-700 text-gray-200 md:px-10 md:py-3 py-1 px-6  rounded-lg md:text-xl text-lg hover:bg-gray-500"
          onClick={addNewSub}
        >
          Add
        </button>
      </section>

      <div className="flex  flex-col gap-3 my-4">
        {subjects.map((sub) => {
          return (
            <div className="flex items-center md:flex-row flex-col gap-2 justify-between w-10/12 mx-auto">
              <div className="w-full">
                <input
                  value={subjectName}
                  onChange={(e) => {
                    setSubjectName(e.target.value);
                  }}
                  type="text"
                  className="w-full border rounded-md py-1 px-3 outline-none  shadow-md"
                  placeholder="Subject"
                />
              </div>
              <div className="w-full">
                <input
                  value={mark}
                  onChange={(e) => {
                    setMarks(e.target.value);
                  }}
                  type="text"
                  placeholder="Marks:"
                  className="w-full  border rounded-md py-1 px-3 outline-none  shadow-md"
                />
              </div>

              <hr />
            </div>
          );
        })}

        {subjects.length === 0 ? null : (
          <>
            <div className="flex items-center justify-between w-full">
              <button
                className="bg-orange-500 focus:bg-green-500 duration-700 hover:bg-pink-500 text-white px-4 py-1 rounded-md md:text-lg text-sm"
                onClick={calculate}
              >
                Calculate
              </button>
              <button className="bg-pink-500 focus:bg-blue-600 duration-700 hover:bg-emerald-600 text-white px-4 py-1 rounded-md md:text-lg text-sm">
                Print
              </button>
            </div>
            <div className="w-full h-1 bg-slate-400 rounded-full " />
            <div className="flex items-start  flex-col">
              <p>Average Marks: {average}</p>
              <p>Total Marks: {total}</p>
              <p>Percentage: {percentage} </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
