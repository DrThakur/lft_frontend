// import React, { useState } from "react";
// import DropdownForm from "../../DropdownForm/DropdownForm";
// import { useNavigate } from "react-router-dom";

// const FormWithMultipleFields = () => {
//   const fieldNames = [
//     "Asset Type",
//     "Procured Under",
//     "Financed By",
//     "Location",
//     "System",
//     "Asset Code",
//     "Service Tag No.",
//     "Make",
//     "Model",
//     "CPU",
//     "CPU Generation",
//     "CPU Version",
//     "CPU Speed",
//     "RAM Type",
//     "RAM Size",
//     "Hard Disk Type",
//     "Hard Disk Size",
//     "Issued To",
//     "Employee / Project Name",
//     "Employee Code / Project Owner",
//   ]; // Number of input fields

//   const fieldsWithFixedOptions = {
//     "Asset Type": ["Old Asset", "New Asset"],
//     "Procured Under": ["Option A", "Option B", "Option C"],
//     "Financed By": ["Option D", "Option E", "Option F"],
//     // Define more fields and their fixed options here
//     "Issued To": {
//       options: [
//         "Employee",
//         "Intern",
//         "Consultant",
//         "Project",
//         "Isolated",
//         "Stock",
//       ],
//       fieldMappings: {
//         Employee: ["Employee Code", "Employee Name"],
//         Intern: ["Intern Code", "Intern Name"],
//         Consultant: ["Consultant Code", "Consultant Name"],
//         Project: ["Project Name", "Project Owner"],
//         Isolated: ["Isolated To", "Isolated Owner"],
//         Stock: [],
//       },
//     },
//   };
//   const navigate = useNavigate();

//   const [formValues, setFormValues] = useState({});
//   const [errors, setErrors] = useState([]);

//   // useEffect(() => {
//   //   // Load options from local storage if available
//   //   const storedOptions = JSON.parse(localStorage.getItem("dropdownOptions"));

//   //   if (storedOptions) {
//   //     setDropdownOptions(storedOptions);
//   //   }
//   // }, []);

//   // const handleChange = (fieldName, value) => {
//   //   setFormValues((prevValues) => ({
//   //     ...prevValues,
//   //     [fieldName]: value,
//   //   }));
//   //   setErrors((prevErrors) =>
//   //     prevErrors.filter((error) => error !== fieldName)
//   //   );
//   // };

//   const handleChange = (fieldName, value) => {
//     // Check if the field is the "Issued To" field
//     if (fieldName === "Issued To") {
//       const mappedFields =
//         fieldsWithFixedOptions[fieldName].fieldMappings[value];
//       const newFormValues = { ...formValues };

//       // Remove any existing values for the mapped fields
//       mappedFields.forEach((field) => {
//         newFormValues[field] = "";
//       });

//       setFormValues(newFormValues);
//     }

//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [fieldName]: value,
//     }));
//     setErrors((prevErrors) =>
//       prevErrors.filter((error) => error !== fieldName)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const missingFields = fieldNames.filter(
//       (fieldName) => !formValues[fieldName]
//     );

//     if (missingFields.length > 0) {
//       setErrors(missingFields);
//     } else {
//       // Handle form submission logic here
//       // You can access the values of all the input fields from the `formValues` state
//       console.log("Form submitted:", formValues);
//     }
//   };

//   const handleCancel = () => {
//     // Handle cancel logic here
//     navigate("/");
//   };

//   const renderFields = () => {
//     const renderedFields = [];

//     fieldNames.forEach((fieldName, index) => {
//       const fixedOptions = fieldsWithFixedOptions[fieldName]
//         ? fieldsWithFixedOptions[fieldName].options
//         : null;
//       const mappedFields =
//         fieldName === "Issued To"
//           ? fieldsWithFixedOptions[fieldName].fieldMappings[
//               formValues[fieldName]
//             ]
//           : null;

//       renderedFields.push(
//         <div key={index} className="mb-4 ml-8">
//           <DropdownForm
//             id={`field-${index}`}
//             name={fieldName}
//             value={formValues[fieldName] || ""}
//             onChange={(value) => handleChange(fieldName, value)}
//             fixedOptions={fixedOptions}
//             mappedFields={mappedFields}
//           />
//           {errors.includes(fieldName) && (
//             <p className="text-red-500">Please fill this field.</p>
//           )}
//         </div>
//       );
//     });

//     return renderedFields;
//   };

//   return (
//     <div className="bg-white p-4 m-16 w-full rounded-lg shadow-lg">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* {fieldNames.map((fieldName, index) => (
//           <div key={index} className="mb-4 ml-8">
//             <DropdownForm
//               id={`field-${index}`}
//               name={fieldName}
//               value={formValues[fieldName] || ""}
//               onChange={(value) => handleChange(fieldName, value)}
//               fixedOptions={fieldsWithFixedOptions[fieldName]}
//             />
//             {errors.includes(fieldName) && (
//               <p className="text-red-500">Please fill this field.</p>
//             )}
//           </div>
//         ))} */}

//         {/* {errors.length > 0 && (
//           <div className="bg-red-200 text-red-800 p-2 rounded-md">
//             Please fill the following fields:{" "}
//             {errors.map((fieldName, index) => (
//               <span key={index} className="font-semibold">
//                 {fieldName}
//                 {index !== errors.length - 1 && ", "}
//               </span>
//             ))}
//           </div>
//         )} */}

//         {renderFields()}

//         <div className="flex justify-center mt-10">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-4 py-2 mr-4 text-white bg-gray-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
//           >
//             Cancel
//           </button>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 text-xs"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormWithMultipleFields;

// import React, { useState } from "react";
// import DropdownForm from "../../DropdownForm/DropdownForm";
// import { useNavigate } from "react-router-dom";

// const FormWithMultipleFields = () => {
//   const fieldNames = [
//     "Asset Type",
//     "Procured Under",
//     "Financed By",
//     "Location",
//     "System",
//     "Asset Code",
//     "Service Tag No.",
//     "Make",
//     "Model",
//     "CPU",
//     "CPU Generation",
//     "CPU Version",
//     "CPU Speed",
//     "RAM Type",
//     "RAM Size",
//     "Hard Disk Type",
//     "Hard Disk Size",
//     "Issued To",
//     "Employee / Project Name",
//     "Employee Code / Project Owner",
//   ]; // Number of input fields

//   const fieldsWithFixedOptions = {
//     "Asset Type": ["Old Asset", "New Asset"],
//     "Procured Under": ["Option A", "Option B", "Option C"],
//     "Financed By": ["Option D", "Option E", "Option F"],
//     "Issued To": [
//       "Employee",
//       "Intern",
//       "Consultant",
//       "Project",
//       "Isolated",
//       "Stock",
//     ],
//     // Define more fields and their fixed options here
//   };

//   const fieldMappings = {
//     Employee: ["Employee Code", "Employee Name"],
//     Intern: ["Intern Code", "Intern Name"],
//     Consultant: ["Consultant Code", "Consultant Name"],
//     Project: ["Project Name", "Project Owner"],
//     Isolated: ["Isolated To", "Isolated Owner"],
//     Stock: [],
//   };

//   const navigate = useNavigate();

//   const [formValues, setFormValues] = useState({});
//   const [errors, setErrors] = useState([]);

//   const handleChange = (fieldName, value) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [fieldName]: value,
//     }));
//     setErrors((prevErrors) =>
//       prevErrors.filter((error) => error !== fieldName)
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const missingFields = fieldNames.filter(
//       (fieldName) => !formValues[fieldName]
//     );

//     if (missingFields.length > 0) {
//       setErrors(missingFields);
//     } else {
//       // Handle form submission logic here
//       // You can access the values of all the input fields from the `formValues` state
//       console.log("Form submitted:", formValues);
//     }
//   };

//   const handleCancel = () => {
//     // Handle cancel logic here
//     navigate("/");
//   };

//   const mappedFields =
//     formValues["Issued To"] && fieldMappings[formValues["Issued To"]]
//       ? fieldMappings[formValues["Issued To"]]
//       : [];

//   const renderFields = mappedFields.map((fieldName, index) => (
//     <div key={index} className="mb-4 ml-8">
//       <input
//         type="text"
//         id={`field-${fieldName}`}
//         name={fieldName}
//         value={formValues[fieldName] || ""}
//         onChange={(e) => handleChange(fieldName, e.target.value)}
//         className="p-1 pl-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//         placeholder={fieldName}
//       />
//       {errors.includes(fieldName) && (
//         <p className="text-red-500">Please fill this field.</p>
//       )}
//     </div>
//   ));

//   return (
//     <div className="bg-white p-4 m-16 w-full rounded-lg shadow-lg">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {fieldNames.map((fieldName, index) => (
//           <div key={index} className="mb-4 ml-8">
//             <DropdownForm
//               id={`field-${index}`}
//               name={fieldName}
//               value={formValues[fieldName] || ""}
//               onChange={(value) => handleChange(fieldName, value)}
//               fixedOptions={fieldsWithFixedOptions[fieldName]}
//             />
//             {errors.includes(fieldName) && (
//               <p className="text-red-500">Please fill this field.</p>
//             )}
//           </div>
//         ))}

//         {renderFields}

//         <div className="flex justify-center mt-10">
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="px-4 py-2 mr-4 text-white bg-gray-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
//           >
//             Cancel
//           </button>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 text-xs"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormWithMultipleFields;

//2nd last

import React, { useState } from "react";
import DropdownForm from "../../DropdownForm/DropdownForm";
import { useNavigate } from "react-router-dom";

const FormWithMultipleFields = () => {
  const fieldNames = [
    "Asset Type",
    "Procured Under",
    "Financed By",
    "Location",
    "System",
    "Asset Code",
    "Service Tag No.",
    "Make",
    "Model",
    "CPU",
    "CPU Generation",
    "CPU Version",
    "CPU Speed",
    "RAM Type",
    "RAM Size",
    "Hard Disk Type",
    "Hard Disk Size",
    "Issued To",
    // "Employee / Project Name",
    // "Employee Code / Project Owner",
  ]; // Number of input fields

  const fieldsWithFixedOptions = {
    "Asset Type": ["Old Asset", "New Asset"],
    "Procured Under": ["Option A", "Option B", "Option C"],
    "Financed By": ["Option D", "Option E", "Option F"],
    "Issued To": [
      "Employee",
      "Intern",
      "Consultant",
      "Project",
      "Isolated",
      "Stock",
    ],
    // Define more fields and their fixed options here
  };

  const fieldMappings = {
    Employee: ["Employee Code", "Employee Name"],
    Intern: ["Intern Code", "Intern Name"],
    Consultant: ["Consultant Code", "Consultant Name"],
    Project: ["Project Name", "Project Owner"],
    Isolated: ["Isolated To", "Isolated Owner"],
    Stock: [],
  };

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState([]);
  const [selectedIssuedTo, setSelectedIssuedTo] = useState("");

  const handleChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
    setErrors((prevErrors) =>
      prevErrors.filter((error) => error !== fieldName)
    );
    if (fieldName === "Issued To") {
      setSelectedIssuedTo(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const missingFields = fieldNames.filter(
      (fieldName) => !formValues[fieldName]
    );

    if (missingFields.length > 0) {
      setErrors(missingFields);
    } else {
      // Handle form submission logic here
      // You can access the values of all the input fields from the `formValues` state
      console.log("Form submitted:", formValues);
    }
  };

  const handleCancel = () => {
    // Handle cancel logic here
    navigate("/");
  };

  const renderFields =
    selectedIssuedTo &&
    fieldMappings[selectedIssuedTo] &&
    fieldMappings[selectedIssuedTo].map((fieldName, index) => (
      <div key={index} className="mb-4 ml-8">
        <input
          type="text"
          id={`field-${fieldName}`}
          name={fieldName}
          value={formValues[fieldName] || ""}
          onChange={(e) => handleChange(fieldName, e.target.value)}
          className="p-1 pl-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder={fieldName}
        />
        {errors.includes(fieldName) && (
          <p className="text-red-500">Please fill this field.</p>
        )}
      </div>
    ));

  return (
    <div className="bg-white p-4 m-16 w-full rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fieldNames.map((fieldName, index) => (
          <div key={index} className="mb-4 ml-8">
            <DropdownForm
              id={`field-${index}`}
              name={fieldName}
              value={formValues[fieldName] || ""}
              onChange={(value) => handleChange(fieldName, value)}
              fixedOptions={fieldsWithFixedOptions[fieldName]}
              fieldMappings={fieldMappings}
              selectedIssuedTo={selectedIssuedTo}
            />
            {errors.includes(fieldName) && (
              <p className="text-red-500">Please fill this field.</p>
            )}
          </div>
        ))}

        {renderFields}

        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 mr-4 text-white bg-gray-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 text-xs"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormWithMultipleFields;
