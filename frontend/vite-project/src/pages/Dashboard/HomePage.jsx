import React from "react";
import { HomeIcon, MessageSquareIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className=" bg-white overflow-hidden w-full h-[915px]">
        <div className="absolute w-[282px] h-[226px] top-1 left-0">
          <div  className="relative h-52 top-1 bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%] cursor-pointer">
            <div className="absolute w-[175px] h-[26px] top-[145px] left-[53px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
              COMMUNOHEAL
            </div>
          </div>
        </div>

        {/* Navigatin Bar */}
        <div className="absolute w-[641px] h-24 top-[65px] left-[425px] bg-[#a8f3ffe3] rounded-[20px] flex items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <HomeIcon className="w-10 h-10 text-[#26766b]" />
            <span className="[font-family:'Belanosima',Helvetica] font-normal text-[#26766b] text-4xl">
              Home
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MessageSquareIcon className="w-10 h-10 text-[#26766c]" />
            <span className="[font-family:'Belanosima',Helvetica] font-normal text-[#26766c] text-4xl">
              Chat
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-[45px] h-[45px] bg-[url(/src/assets/images/union.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[15px] h-[15px] top-2.5 left-[15px]"
                alt="Vector"
                src="/src/assets/images/vector.svg"
              />
            </div>
            <span className="[font-family:'Belanosima',Helvetica] font-normal text-[#26766c] text-4xl">
              Profile
            </span>
          </div>
        </div>

        <div className="absolute w-[837px] h-[311px] top-[254px] left-[141px]">
          <h1 className="absolute top-0 left-3 [font-family:'Inter',Helvetica] font-normal text-black text-[35px] tracking-[0] leading-[normal] whitespace-nowrap">
            Good evening, John Doe!
          </h1>
          <div className="absolute w-[837px] h-[280px] top-[61px] left-0 bg-[#9CDEE8] bg-opacity-50 rounded-[40px] border-none shadow-none">
            <div className="p-6">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-[32px] mb-6">
                How are you feeling today?
              </h2>
              <div className="feeling-options [font-family:'Inter',Helvetica] font-normal text-black text-[32px] mb-6  gap-6 ">
                <div className="feeling-option ">
                  <input
                    type="radio"
                    id="feeling-good"
                    name="feeling"
                    className="h-6 w-6"
                  />
                  <label htmlFor="feeling-good"> I'm feeling good!</label>
                </div>
                <div className="feeling-option">
                  <input
                    type="radio"
                    id="not-well"
                    name="feeling"
                    className="h-6 w-6"
                  />
                  <label htmlFor="not-well"> I'm not feeling so well.</label>
                </div>
                <div className="feeling-option">
                  <input
                    type="radio"
                    id="emergency"
                    name="feeling"
                    className="h-6 w-6"
                  />
                  <label htmlFor="emergency" className="text-red-500"> I need help as soon as possible! (emergency)
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Cards */}
          <div className="absolute top-[453px] left-[82px] flex gap-[73px]">
            <div 
              className={`w-[400px] h-[191px] bg-[#30b8cd7a] rounded-[50px] shadow-[13px_12px_9.2px_#00000040] relative overflow-hidden cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center h-full p-0">
                <div className="flex items-center gap-2 mt-[72px]">
                  <img
                    className="w-9 h-9 object-cover "
                    src="/src/assets/images/medical-prescription.png"
                  />

                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center">
                    past prescriptions
                  </h3>
                </div>
                <p className="absolute w-[316px] top-[113px] [font-family:'Inter',Helvetica] font-light italic text-black text-xl text-center"></p>
              </div>
            </div>
            <div
              className={`w-[400px] h-[191px] bg-[#30b8cd7a] rounded-[50px] shadow-[13px_12px_9.2px_#00000040] relative overflow-hidden cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center h-full p-0">
                <div className="flex items-center gap-2 mt-[72px]">
                  <img
                    className="w-9 h-9 object-cover"
                    src="/src/assets/images/video-call.png"
                  />

                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center">
                    video connect
                  </h3>
                </div>
                <p className="absolute w-[316px] top-[113px] [font-family:'Inter',Helvetica] font-light italic text-black text-xl text-center"></p>
              </div>
            </div>
            <div
              className={`w-[400px] h-[191px] bg-[#30b8cd7a] rounded-[50px] shadow-[13px_12px_9.2px_#00000040] relative overflow-hidden cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center h-full p-0">
                <div className="flex items-center gap-2 mt-[72px]">
                  <img
                    className="w-9 h-9 object-cover"
                    src="/src/assets/images/transcription.png"
                  />

                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl text-center">
                    transcripts
                  </h3>
                </div>
                <p className="absolute w-[316px] top-[113px] [font-family:'Inter',Helvetica] font-light italic text-black text-xl text-center"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Graphic */}
      <div className="absolute w-[637px] h-[441px]  top-0 -right-0 ">
        <div className="relative h-[441px]">
          <div className="absolute w-[637px] h-[440px] top-0 left-0">
            <div className="absolute w-[375px] h-[142px] top-0 left-[145px]">
              <img
                className="absolute w-[360px] h-[131px] top-0 left-[15px]"
                alt="Subtract"
                src="/src/assets/images/subtract.png"
              />

              <div className="absolute w-[71px] h-[59px] top-[83px] left-[191px] bg-[#41888a] rounded-[23.86px]" />
              <div className="absolute w-[185px] h-[59px] top-[83px] left-0 bg-[#00c4ab] rounded-[23.86px]" />
            </div>

            <div className="absolute w-[103px] h-[63px] top-[232px] left-[455px] bg-[#41888a] rounded-[25.63px]" />
            <div className="absolute w-[185px] h-[59px] top-[158px] left-0 bg-[#00c4ab] rounded-[23.86px]" />
            <div className="absolute w-[197px] h-[59px] top-[381px] left-[94px] bg-[#00c4ab] rounded-[23.86px]" />
            <div className="absolute w-[439px] h-[59px] top-[158px] left-[198px] bg-[#c1fff7] rounded-[23.86px]" />
            <div className="absolute w-[439px] h-[59px] top-[232px] left-0 bg-[#009e8a] rounded-[23.86px]" />
            <div className="absolute w-[220px] h-[59px] top-[306px] left-[379px] bg-[#50cfd1] rounded-[23.86px]" />
            <div className="absolute w-[164px] h-[59px] top-[381px] left-[300px] bg-[#50cfd1] rounded-[23.86px]" />
          </div>

          <div className="top-[303px] left-[294px] bg-[#1f6f65] absolute w-[72px] h-[65px] rounded-[35.92px/32.5px]" />
          <div className="top-[376px] left-[471px] bg-[#c1fff7] absolute w-[72px] h-[65px] rounded-[35.92px/32.5px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
