import React from "react";

const Form = ({ fields }) => {
  return (
    <div className="overflow-scroll-y">
      <form className="grid grid-cols-3 gap-4 max-w-2xl">
        {fields.map((field, index) => (
          <div key={index}>
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor={field.id}
            >
              {field.label}
            </label>
            <input
              className="bg-blue-50 appearance-none border-2 border-blue-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={field.id}
              type={field.type}
            />
          </div>
        ))}
        <div className="col-span-2">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
