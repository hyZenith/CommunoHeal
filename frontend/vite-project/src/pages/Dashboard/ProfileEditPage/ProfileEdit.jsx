import React from "react";
import PersonalInformationSection from "./sections/PersonalInformationSection";
import AddressInformationSection from "./sections/AddressInformationSection";

const EditPage = () => {
  return (
    <main className="bg-[#96f6f6c4] flex flex-row justify-center w-full">
      <div className="  w-full max-w-[1512px]">
        <div className="relative w-full">
          {/* Background image */}
          <div className="w-full  min-h-screen pb-10">
            {/* header */}
            <header className="w-full h-[129px] mt-4 bg-[url(/src/assets/images/section.svg)]  bg-cover bg-[50%_50%] rounded-full relative font-poppins">

              <div className="flex flex-col w-full max-w-4xl gap-3 mb-6 left-[180px] absolute top-[40px] font-poppins">
                <h1 className="font-bold text-2xl text-white leading-8">
                  User's Personal Details
                </h1>
                <p className="text-base text-white font-normal leading-6">
                  Update your personal and address details here
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-10 mt-4">
                <div className="w-[100px] h-[100px] rounded-[50px] absolute top-[15px]">
                  <img
                    src="/src/assets/images/profile.png"
                    alt="User profile"
                    className="w-full h-full rounded-full"
                  />
                </div>

                <div className="flex flex-col gap-3 mt-4 md:mt-0 absolute top-[22px] right-[135px]">
                  <button
                    variant="outline"
                    className="w-[130px] h-[39px] border border-white text-white bg-transparent rounded-lg"
                  >
                    Cancel
                  </button>

                  <button className="w-[131px] h-[39px] bg-black text-white rounded-lg">
                    Save Changes
                  </button>
                </div>
              </div>
            </header>
            {/* Main content with two columns */}
            <div className="flex flex-col md:flex-row gap-8 px-10 mt-10 font-poppins">
              {/* Left column - Personal Information */}
              <section className="flex-1">
                <h2 className="font-bold text-[34px] leading-[48px] mb-6">
                  Personal Information
                </h2>
                <PersonalInformationSection />
              </section>
              {/* Right column - Address Information */}
              <section className="flex-1">
                <h2 className="font-bold text-[34px] leading-[48px] mb-6">
                  Address Information
                </h2>
                <AddressInformationSection />
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditPage;
