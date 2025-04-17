import React from "react";

const AddressInformationSection = () => {
  // Form field data for mapping
  const addressFields = [
    {
      id: "address-line-1",
      label: "Address Line 1",
      placeholder: "Enter your address",
      helperText: "Street address, P.O. box, company name, c/o",
    },
    {
      id: "landmark",
      label: "Landmark",
      placeholder: "Enter the nearby location",
      helperText: "Landmark details",
    },
    {
      id: "city",
      label: "City",
      placeholder: "Enter your city",
      helperText: "City or locality",
    },
    {
      id: "state-province",
      label: "State/Province",
      placeholder: "Enter your state or province",
      helperText: "State or province name",
    },
    {
      id: "pin-code",
      label: "Pin Code",
      placeholder: "Enter your postal code",
      helperText: "Postal code or ZIP code",
    },
    {
      id: "country",
      label: "Country",
      placeholder: "Enter your country",
      helperText: "Country name",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[592px] gap-10 py-6">
      {addressFields.map((field) => (
        <div key={field.id} className="flex flex-col w-full gap-1">
          <label
            htmlFor={field.id}
            className="font-medium text-sm text-black font-['Poppins',Helvetica]"
          >
            {field.label}
          </label>

          <input
            id={field.id}
            placeholder={field.placeholder}
            className="px-3 py-2 bg-white rounded-md border border-solid border-transparent text-sm font-['Poppins',Helvetica]"
          />

          <p className="text-xs font-light text-[#00000080] font-['Poppins',Helvetica]">
            {field.helperText}
          </p>
        </div>
      ))}
      {/* Update button */}
      <div className="flex flex-col items-end gap-3">
        <button className="w-60 p-3 bg-black text-white rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
};

export default AddressInformationSection;
