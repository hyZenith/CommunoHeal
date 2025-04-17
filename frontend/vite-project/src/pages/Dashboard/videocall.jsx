import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const VideoCallWindow = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [isMuted, setIsMuted] = useState(false); // State for mute/unmute
  const [isVideoOn, setIsVideoOn] = useState(true); // State for video on/off

  // Chat transcript data
  const chatMessages = [
    { sender: "Doc", message: "So how are you feeling?" },
    { sender: "John", message: "A slight ...." },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
    <div className="bg-white overflow-hidden w-full max-w-[1512px] h-[982px]">
      <div className="relative w-full h-full">
        {/* Left side with logo and doctor image */}
        <div className="absolute w-[969px] h-[762px] top-0 left-0 ">
          {/* Logo section */}
          <div
            className="absolute w-[282px] h-[226px] top-0 left-0"
          >
            <div className="relative h-[212px] bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%] ">
              <div className="absolute w-[175px] h-[26px] top-[149px] left-[53px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
                COMMUNOHEAL
              </div>
            </div>
          </div>

          {/* Doctor image */}
          <div className="w-[884px] h-[542px] top-[220px] bg-[#009e89a8] absolute left-[85px]">
            <img
              className="absolute w-[877px] h-[541px] top-0 left-0 object-cover"
              alt="Doctor vector icon"
              src="/src/assets/images/doctor-vector-icon.png"
            />
          </div>
        </div>

        {/* Right side chat panel */}
        <div className="absolute w-full h-full top-0 left-0">
          {/* Chat panel background */}
          <div className="absolute w-[464px] h-[982px] top-0 right-0 bg-[#a4ebed]" />

          {/* Chat transcript header */}
          <h2 className="absolute w-[319px] top-[81px] left-[1080px] font-sans font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            Chat transcipt
          </h2>

          {/* Chat transcript container */}
          <div className="absolute w-[400px] h-[794px] top-[133px] left-[1080px] bg-[#ffffffbf] border-none rounded-none">
            <div className="p-4">
              {/* Chat messages */}
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className="font-sans font-normal text-black text-xl tracking-[0] leading-[normal] mb-2"
                >
                  {message.sender}: {message.message}
                </div>
              ))}
            </div>
          </div>

          {/* Chat input field */}
          <div className="absolute w-[367px] h-12 top-[856px] left-[1097px]">
            <input
              className="  border-solid border-[#21786c] text-[#419187] text-2xl font-sans font-normal  flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Type a message ..."
            />
          </div>

        </div>

        {/* Control buttons */}
        <div className="absolute w-[465px] h-[50px] bottom-[157px] left-[85px] flex gap-[21px]">
          <button
            className="w-[141px] h-[50px] bg-[#bf0f0c] hover:bg-[#a00c09] text-white rounded-lg border border-solid border-[#8f0b09]"
            onClick={() => navigate("/")} // Redirect to home
          >
            End meeting
          </button>

          <button
            className="w-[141px] h-[50px] bg-[#43a094] hover:bg-[#378379] text-white rounded-lg border border-solid border-[#d9d9d9]"
            onClick={() => setIsMuted(!isMuted)} // Toggle mute/unmute
          >
            {isMuted ? "Mute" : "Unmute oneself"}
          </button>

          <button
            className="w-[141px] h-[50px] bg-[#43a094] hover:bg-[#378379] text-white rounded-lg border border-solid border-[#d9d9d9]"
            onClick={() => setIsVideoOn(!isVideoOn)} // Toggle video on/off
          >
            {isVideoOn ? "Turn off Video" : "Turn on Video"}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default VideoCallWindow