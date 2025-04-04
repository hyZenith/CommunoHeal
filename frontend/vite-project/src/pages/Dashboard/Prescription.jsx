import React from "react";
import { Card, CardContent } from "@mui/material";

const Prescription = () => {
  const patientInfo1 = {
    patientName: "John Doe",
    age: 55,
    diagnosis: "Type 2 Diabetes Mellitus",
    medications: [
      "Metformin 500 mg – Take one tablet twice daily with meals.",
      "Glimepiride 2 mg – Take one tablet daily before breakfast.",
      "Atorvastatin 10 mg – Take one tablet at bedtime (if needed for cholesterol control).",
      "Aspirin 75 mg – Take one tablet daily (if indicated for cardiovascular risk).",
    ],
    lifestyle: [
      "Follow a low-carb, high-fiber diet.",
      "Exercise at least 30 minutes daily (walking, jogging, yoga, etc.).",
      "Monitor blood sugar levels daily and keep a log.",
      "Stay hydrated and avoid excessive sugar intake.",
      "Schedule monthly check-ups with Dr. Abc.",
    ],
    doctor: "Dr. Abc",
  };

  const patientInfo2 = {
    patientName: "John Doe",
    age: 55,
    diagnosis: "Upper Respiratory Tract Infection",
    medications: [
      "Paracetamol 500 mg – Take one tablet every 6 hours for fever and body ache.",
      "Cetirizine 10 mg – Take one tablet at night for runny nose and allergies.",
      "Saline Nasal Spray – Use 2 sprays in each nostril every 8 hours for nasal congestion.",
      "Vitamin C (500 mg) + Zinc Tablet – Take once daily to boost immunity.",
    ],
    lifestyle: [
      "Drink plenty of warm fluids (ginger tea, warm water, soups).",
      "Gargle with warm salt water twice a day.",
      "Take adequate rest and avoid cold exposure.",
    ],
    doctor: "Dr. XYZ",
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1512px] relative min-h-[982px]">
        {/* Decorative background elements */}
        <div className="h-[413px] absolute right-0 top-[-194px] w-[608px]">
          <div className="relative h-[413px]">
            <div className="h-[407px] top-0 left-0 absolute w-[608px]">
              <div className="absolute w-[68px] h-[55px] top-[77px] left-[321px] bg-[#41888a] rounded-[23.86px]" />
              <div className="absolute w-[98px] h-[59px] top-[217px] left-[434px] bg-[#41888a] rounded-[25.63px]" />
              <div className="absolute w-[177px] h-[55px] top-[78px] left-[138px] bg-[#00c4ab] rounded-[23.86px]" />
              <div className="absolute w-[177px] h-[55px] top-[148px] left-0 bg-[#00c4ab] rounded-[23.86px]" />
              <div className="absolute w-[278px] h-[55px] top-[352px] left-[161px] bg-[#00c4ab] rounded-[23.86px]" />
              <div className="absolute w-[419px] h-[55px] top-[148px] left-[189px] bg-[#c1fff7] rounded-[23.86px]" />
              <div className="absolute w-[419px] h-[55px] top-[217px] left-0 bg-[#009e8a] rounded-[23.86px]" />
              <div className="absolute w-[210px] h-[55px] top-[287px] left-[362px] bg-[#50cfd1] rounded-[23.86px]" />
            </div>
            <div className="top-[284px] left-[281px] bg-[#1f6f65] absolute w-[69px] h-[61px] rounded-[34.29px/30.44px]" />
            <div className="top-[352px] left-[450px] bg-[#c1fff7] absolute w-[69px] h-[61px] rounded-[34.29px/30.44px]" />
          </div>
        </div>
        {/* Logo */}
        <div className="absolute w-[262px] h-[219px] top-0 left-0">
          <div className="relative h-[196px] bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%]">
            <div className="absolute w-[163px] h-[25px] top-36 left-[50px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
              COMMUNOHEAL
            </div>
          </div>
        </div>
        {/* Page Title */}
        <h1 className="absolute w-[951px] h-[45px] top-[246px] left-1/2 -translate-x-1/2 font-['Poppins',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap">
          Your past uploaded prescriptions &amp; test results
        </h1>
        {/* Prescription Cards */}
        <div className="flex flex-wrap justify-center gap-4 absolute top-[319px] left-1/2 -translate-x-1/2 w-full max-w-[1410px]">
          {/* First Prescription Card */}
          <div className="w-[654px] h-[620px] bg-[#50cfd1] rounded-[40px] shadow-[0px_4px_4px_#00000040] opacity-50">
            <div className="p-7">
              <div className="font-['Inter',Helvetica] font-normal text-black text-xl">
                <p>Patient Name: {patientInfo1.patientName}</p>
                <p>Age: {patientInfo1.age}</p>
                <p>Diagnosis: {patientInfo1.diagnosis}</p>
                <br />
                <p>Medications:</p>
                {patientInfo1.medications.map((med, index) => (
                  <p key={index}>{med}</p>
                ))}
                <br />
                <p>Lifestyle Recommendations:</p>
                {patientInfo1.lifestyle.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <br />
                <p>Signed, {patientInfo1.doctor}</p>
              </div>
            </div>
          </div>

          {/* Second Prescription Card */}
          <div className="w-[654px] h-[620px] bg-[#50cfd1] rounded-[40px] shadow-[0px_4px_4px_#00000040] opacity-50 relative">
            <div className="p-8">
              <div className="font-['Inter',Helvetica] font-normal text-black text-xl">
                <p>Patient Name: {patientInfo2.patientName}</p>
                <p>Age: {patientInfo2.age}</p>
                <p>Diagnosis: {patientInfo2.diagnosis}</p>
                <br />
                <p>Medications:</p>
                {patientInfo2.medications.map((med, index) => (
                  <p key={index}>{med}</p>
                ))}
                <br />
                <p>Lifestyle Recommendations:</p>
                {patientInfo2.lifestyle.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <br />
                <p>Signed, {patientInfo2.doctor}</p>
              </div>
            </div>
            <img
              className="absolute w-[449px] h-[351px] bottom-0 right-0 object-cover"
              alt="Medical supplies"
              src="/src/assets/images/image 9.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
