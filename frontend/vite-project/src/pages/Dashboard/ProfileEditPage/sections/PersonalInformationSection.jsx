import React from "react";

const PersonalInformationSection = () => {
  // Data for form fields
  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Enter your name",
      helperText: "Please enter your full name",
      type: "input",
    },
    {
      id: "bloodType",
      label: "Blood Type",
      placeholder: "Enter your blood type",
      helperText: "For medical purposes",
      type: "input",
    },
    {
      id: "diseases",
      label: "Diseases",
      placeholder: "Enter any relevant diseases",
      helperText: "e.g. diabetes, hypertension",
      type: "input",
    },
    {
      id: "height",
      label: "Height",
      placeholder: "Enter your height (in cm)",
      helperText: "Height in centimeters",
      type: "input",
    },
    {
      id: "weight",
      label: "Weight",
      placeholder: "Enter your weight (in kg)",
      helperText: "Weight in kilograms",
      type: "input",
    },
  ];

  // Data for toggle groups
  const toggleGroups = [
    {
      id: "gender",
      label: "Gender",
      helperText: "Select your gender",
      options: ["Male", "Female", "Other"],
    },
    {
      id: "language",
      label: "Language",
      helperText: "Select your preferred language",
      options: ["English", "Hindi", "Assamese", "Bengali"],
    },
  ];

  return (
    <div className="w-full max-w-[736px] py-10 px-12">
      <div className="flex flex-col gap-10 p-0">
        {/* Input fields */}
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col w-full gap-1">
            <label
              htmlFor={field.id}
              className="font-medium text-sm text-black"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              placeholder={field.placeholder}
              className="border border-gray-300 bg-white text-[#00000080] text-sm p-2 rounded-md"
            />
            <p className="text-xs text-[#00000080]">{field.helperText}</p>
          </div>
        ))}

        {/* Toggle groups */}
        {toggleGroups.map((group) => (
          <div key={group.id} className="flex flex-col w-full gap-1">
            <label className="font-medium text-sm text-black">
              {group.label}
            </label>
            <div className="flex gap-2">
              {group.options.map((option) => (
                <button
                  key={option}
                  className="w-16 p-2 rounded-md font-light text-sm border border-gray-300 bg-white hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#00000080]">{group.helperText}</p>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default PersonalInformationSection;