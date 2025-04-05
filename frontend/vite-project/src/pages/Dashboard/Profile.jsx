import React from "react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon } from "lucide-react";

const Profile = () => {
  // Profile data
  const profileData = {
    name: "John Doe",
    role: "User",
    gender: "Male",
    email: "johnd5@.gmail.com",
    image: "/src/assets/images/profile.png",
  };

  // Personal information data
  const personalInfo = [
    { label: "Name :", value: "John Doe" },
    { label: "Gender :", value: "Male" },
    { label: "Blood Type :", value: "O+" },
    { label: "Diseases :", value: "Diabetes, Blood Disorder, Arthritis" },
    { label: "Height :", value: "170.5 cm" },
    { label: "Weight :", value: "65 kg" },
    { label: "Language :", value: "English" },
  ];

  // Address data
  const addressInfo = [
    { label: "Country:", value: "India" },
    { label: "State:", value: "Assam" },
    { label: "City/Town:", value: "Kamrup Metro" },
    { label: "Street Address:", value: "BG Colony, Maligaon, Ghy-11" },
    { label: "Landmark:", value: "Near St. Vivekananda English Academy" },
    { label: "Pin code:", value: "781011" },
  ];

  // Calendar data
  const date = new Date(2025, 2, 7); // March 7, 2025

  // Calendar days data
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Calendar dates for display
  const calendarDates = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 0, 17, 18], // Note: 0 instead of 16 as per original code
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 1, 2],
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className=" bg-white  w-full max-w-[1800px] min-h-[982px] relative">
        {/* Header Section */}
        <header className=" w-full h-[129px] mt-4 bg-[url(/src/assets/images/section.svg)]  bg-cover bg-[50%_50%] rounded-full relative">
          <div className="pt-3 pl-[76px] font-medium text-black text-xl">
            Hi Gargee
          </div>
          <h1 className="w-[370px] mt-[20px] ml-[49px] font-['Poppins',Helvetica] font-bold text-black text-[40px] text-center">
            Welcome Back!
          </h1>
          <button
            className="absolute top-6 right-7 w-16 h-16 border-2 border-black rounded-full flex items-center justify-center shadow-md hover:bg-gray-200"
            onClick={() => window.location.href = '/home'}
          >
            <ArrowLeftIcon className="w-16 h-16 text-black" />
          </button>
        </header>

        {/* Profile Section */}
        <div className="w-[551px] h-[291px] absolute top-40  bg-[#b9eeee] rounded-[50px] shadow-[0px_4px_4px_#00000040] border-none">
          <div className="p-0 h-full relative">
            <img
              className="absolute w-[190px] h-[190px] top-[51px] left-[22px] object-cover rounded-full"
              alt="Profile"
              src={profileData.image}
            />

            <h2 className="absolute top-[57px] left-[252px] font-['Poppins',Helvetica] font-bold text-black text-2xl text-center">
              {profileData.name}
            </h2>

            <div className="absolute top-[109px] left-[254px] font-['Poppins',Helvetica] font-medium text-black text-xl text-center">
              Role -
            </div>

            <div className="absolute top-28 left-[323px] font-['Syne',Helvetica] font-normal text-black text-xl text-center whitespace-nowrap">
              {profileData.role}
            </div>

            <div className="absolute top-[145px] left-[252px] font-['Poppins',Helvetica] text-black text-xl text-center">
              <span className="font-medium">Gender</span>
              <span> - </span>
            </div>

            <div className="absolute top-[148px] left-[354px] font-['Syne',Helvetica] font-normal text-black text-xl text-center whitespace-nowrap">
              {profileData.gender}
            </div>

            <div className="absolute top-[181px] left-[252px] font-['Poppins',Helvetica] text-black text-xl text-center">
              <span className="font-medium">E-mail -</span>
              <span>&nbsp;</span>
            </div>

            <div className="absolute top-[184px] left-[343px] font-['Syne',Helvetica] font-normal text-black text-xl text-center whitespace-nowrap">
              {profileData.email}
            </div>

            <button className="absolute top-[227px] left-[417px] w-[98px] h-[42px] bg-[#4eb7b7] rounded-[7.49px] hover:bg-[#3a9999] text-white">
              Edit
            </button>
          </div>
        </div>

        {/* Personal Information Card */}

        <div className="w-[551px] h-[488px] absolute top-[472px]  bg-[#b9eeee] rounded-[50px] shadow-[0px_4px_4px_#00000040] border-none">
          <div className="p-0 h-full relative">
            <h2 className="absolute top-[23px] left-[65px] font-['Poppins',Helvetica] font-extrabold text-black text-2xl text-center">
              Personal Information
            </h2>

            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="font-['Poppins',Helvetica] text-black text-xl"
                style={{
                  position: "absolute",
                  top: `${81 + index * 59}px`,
                  left: "65px",
                }}
              >
                <span
                  className="font-medium"
                  style={{ display: "inline-block", width: "150px" }}
                >
                  {info.label}
                </span>
                <span>{info.value}</span>
              </div>
            ))}

            <button className="absolute top-[417px] left-[417px] w-[98px] h-[42px] bg-[#4eb7b7] rounded-[7.49px] hover:bg-[#3a9999] text-white">
              Edit
            </button>
          </div>
        </div>

        {/* Calendar Card */}
        <div className="inline-flex flex-col items-start gap-2.5 p-6 absolute top-40 left-[697px] bg-[#b9eeee] rounded-[35px] border-none shadow-[0px_4px_4px_#000e3340]">
          <div className="p-0">
            <div className="inline-flex flex-col items-start gap-3 relative">
              {/* Calendar Header */}
              <header className="relative w-[378px] h-11 bg-transparent flex justify-between items-center">
                <button
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 bg-white rounded-[80px] shadow-basic"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <div className="inline-flex items-start gap-0.5">
                  <div className="inline-flex flex-col items-start gap-2.5 px-3 py-2.5 bg-white rounded-md shadow-basic">
                    <div className="flex items-center gap-0.5">
                      <div className="font-h3-24 text-light-modetypographyheader whitespace-nowrap">
                        March
                      </div>
                      <img
                        className="w-2 h-6"
                        alt="Arrows drop down"
                        src="/src/assets/images/arrows-drop-down-down.svg"
                      />
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2.5 px-3 py-2.5 bg-white rounded-md shadow-basic">
                    <div className="flex items-center gap-0.5">
                      <div className="font-h3-24 text-light-modetypographyheader whitespace-nowrap">
                        2025
                      </div>
                      <img
                        className="w-2 h-6"
                        alt="Arrows drop down"
                        src="/src/assets/images/arrows-drop-down-down.svg"
                      />
                    </div>
                  </div>
                </div>

                <button
                  variant="outline"
                  size="icon"
                  className="w-11 h-11 bg-white rounded-[80px] shadow-basic"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </header>

              {/* Weekday Headers */}
              <div className="inline-flex items-start">
                {weekDays.map((day, index) => (
                  <div key={index} className="relative w-[54px] h-11 rounded">
                    <div className="w-[49px] h-11 flex items-center justify-center px-5 py-[13px] left-0.5 rounded">
                      <div className="font-body-18 text-regular text-center whitespace-nowrap">
                        {day}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="inline-flex flex-col items-start gap-1">
                {calendarDates.map((week, weekIndex) => (
                  <div key={weekIndex} className="inline-flex items-start">
                    {week.map((day, dayIndex) => {
                      const isCurrentMonth = day > 0 && day <= 31;
                      const isSelected = day === 7 && weekIndex === 1;

                      return (
                        <div
                          key={dayIndex}
                          className="relative w-[54px] h-11 rounded"
                        >
                          <div
                            className={`h-11 flex w-[50px] items-center justify-center gap-2.5 px-5 py-[13px] relative left-0.5 rounded-md
                            ${
                              isCurrentMonth ? "bg-basicwhite shadow-basic" : ""
                            }
                            ${isSelected ? "bg-light-modeprimaryblue" : ""}`}
                          >
                            <div
                              className={`relative w-fit mt-[-0.50px] font-['Lexend',Helvetica] font-medium text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap
                              ${
                                isCurrentMonth
                                  ? "text-regular"
                                  : "text-[#00175326]"
                              }
                              ${isSelected ? "text-basicwhite" : ""}`}
                            >
                              {day === 0 ? "0" : day}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div className="w-[775px] h-[350px] absolute top-[610px] left-[750px] bg-[#b9eeee] rounded-[50px] shadow-[0px_4px_4px_#00000040] border-none">
          <div className="p-0 h-full relative">
            <h2 className="absolute top-[19px] left-[78px] font-['Poppins',Helvetica] font-extrabold text-black text-2xl text-center">
              Address
            </h2>

            <div className="grid grid-cols-2 gap-x-16 gap-y-4 absolute top-[83px] left-[84px]">
              {addressInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="font-['Poppins',Helvetica] font-bold text-black text-base text-center">
                    {item.label}
                  </div>
                  <div className="font-['Poppins',Helvetica] font-normal text-black text-base text-center">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute top-[289px] left-[640px] w-[98px] h-[42px] bg-[#4eb7b7] rounded-[7.49px] hover:bg-[#3a9999] text-white">
              Edit
            </button>
          </div>
        </div>

        {/* New Div */}
        <div className="w-[501px] h-[420px] absolute top-40 left-[1200px]  rounded-[50px]  border-none">
         <img src="/src/assets/images/scenery.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
