import React from "react";
import { Card, CardContent } from "@mui/material";

const Prescription = () => {
  const transcripts1 = {
    id: 1,
    title: "Transcript 1",
    provider: "Call with Nurse Mary",
    date: "26/03/2025; 11:17AM",
    duration: "30 mins",
    content: `Mary (Nurse): Hello, John! Welcome to CommunoHeal. I'm Mary, a registered nurse. How can I assist you today?
  John Doe (Patient): Hi Mary. I've been feeling feverish for the past two days, and I also have a sore throat. I'm not sure if it's serious.
  Mary (Nurse): I'm sorry to hear that. Let's go over your symptoms in detail. Apart from the fever and sore throat, are you experiencing any other symptoms—like cough, fatigue, or difficulty breathing?
  John Doe (Patient): I do feel a bit tired, but no cough or breathing issues so far.
  Mary (Nurse): Got it. Could you let me know your temperature if you've checked it recently?
  John Doe (Patient): Yes, it was around 101°F when I checked this morning.
  Mary (Nurse): Okay. Do you have any existing medical conditions or allergies I should be aware of?
  John Doe (Patient): I have mild asthma, but it's usually under control. No known allergies...........`,
  };
  const transcripts2 = {
    id: 2,
    title: "Transcript 2",
    provider: "Call with Dr. Jake",
    date: "12/02/2025; 01:25PM",
    duration: "18 mins",
    content: `Dr. Jake (Doctor): Hi John, I'm Dr. Jake. I understand you've been experiencing a fever and sore throat for the past two days. Mary briefed me—let's dive a little deeper. How severe is your throat pain on a scale of 1 to 10?
  John Doe (Patient): I'd say around a 6. It hurts the most when I swallow.
  Dr. Jake (Doctor): I see. Any swelling around your neck or white spots on your tonsils?
  John Doe (Patient): My throat feels a bit swollen, but I haven't noticed any white spots.
  Dr. Jake (Doctor): Based on your symptoms, it could be a viral infection or strep throat. I'll prescribe you some fever reducers and throat lozenges. If the symptoms persist for more than three days, I'd recommend a throat swab test.
  John Doe (Patient): Okay, that sounds reasonable. Will the prescription be available digitally?
  Dr. Jake (Doctor): Yes, I'm sending it to your CommunoHeal account now. You can access it anytime. Also, stay hydrated and get plenty of rest........`,
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
        <div className="absolute w-[262px] h-[219px] top-0 left-0 cursor-pointer" >
          <div className="relative h-[196px] bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%]">
            <div className="absolute w-[163px] h-[25px] top-36 left-[50px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
              COMMUNOHEAL
            </div>
          </div>
        </div>
        {/* Page Title */}
        <h1 className="absolute w-[951px] h-[45px] top-[246px] left-1/2 -translate-x-1/2 font-['Poppins',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap">
          Recent Transcripts / Chats
        </h1>
        {/* Results Count */}
        <p className=" font-normal text-xl text-center tracking-[0] leading-[normal] mb-12 font-['Poppins',Helvetica]">
          Displaying 2/2 results
        </p>
        {/* Prescription Cards */}
        <div className="flex flex-wrap justify-center gap-4 absolute top-[319px] left-1/2 -translate-x-1/2 w-full max-w-[1410px]">
          {/* First Prescription Card */}
          <div className="w-[654px] h-[620px] bg-[#50cfd1] rounded-[40px] shadow-[0px_4px_4px_#00000040] opacity-50">
            <div className="p-7">
              {/* Document Icon */}
              <div className="flex flex-col items-center justify-center gap-5 py-3">
                <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
                  <div className="absolute w-[100px] h-[100px] -top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-[62.5px] text-center tracking-[0] leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    📑
                  </div>
                </div>
              </div>

              {/* Transcript Header */}
              <div className="ml-4">
                <h2 className="font-normal text-2xl text-center tracking-[0] leading-7 font-['Inter',Helvetica]">
                  {transcripts1.title}
                </h2>
                <p className="font-normal text-[#00000080] text-[13px] leading-6 text-center font-['Inter',Helvetica]">
                  {transcripts1.provider}
                </p>
                <p className="font-semibold text-black text-[13px] tracking-[0] leading-[normal] mt-2 font-['Inter',Helvetica]">
                  {transcripts1.date}
                </p>
                <p className="font-medium text-black text-[10px] text-center tracking-[0] leading-9 whitespace-nowrap font-['Inter',Helvetica]">
                  Duration: {transcripts1.duration}
                </p>
              </div>

              {/* Transcript Content */}
              <div className="px-11 pb-6 pt-2 font-normal text-black text-xl tracking-[0] leading-[normal] font-['Inter',Helvetica] whitespace-pre-line">
                {transcripts1.content}
              </div>
            </div>
          </div>

          {/* Second Prescription Card */}
          <div className="w-[654px] h-[620px] bg-[#50cfd1] rounded-[40px] shadow-[0px_4px_4px_#00000040] opacity-50 relative">
            <div className="p-8">
              {/* Document Icon */}
              <div className="flex flex-col items-center justify-center gap-5 py-3">
                <div className="relative w-[100px] h-[100px] bg-[#0000000d] rounded-[50px]">
                  <div className="absolute w-[100px] h-[100px] -top-px left-0 [font-family:'Roboto',Helvetica] font-normal text-black text-[62.5px] text-center tracking-[0] leading-[100px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    📑
                  </div>
                </div>
              </div>

              {/* Transcript Header */}
              <div className="ml-4">
                <h2 className="font-normal text-2xl text-center tracking-[0] leading-7 font-['Inter',Helvetica]">
                  {transcripts2.title}
                </h2>
                <p className="font-normal text-[#00000080] text-[13px] leading-6 text-center font-['Inter',Helvetica]">
                  {transcripts2.provider}
                </p>
                <p className="font-semibold text-black text-[13px] tracking-[0] leading-[normal] mt-2 font-['Inter',Helvetica]">
                  {transcripts2.date}
                </p>
                <p className="font-medium text-black text-[10px] text-center tracking-[0] leading-9 whitespace-nowrap font-['Inter',Helvetica]">
                  Duration: {transcripts2.duration}
                </p>
              </div>

              {/* Transcript Content */}
              <div className="px-11 pb-6 pt-2 font-normal text-black text-xl tracking-[0] leading-[normal] font-['Inter',Helvetica] whitespace-pre-line">
                {transcripts2.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
