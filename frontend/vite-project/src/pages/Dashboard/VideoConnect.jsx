import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import videocall from './videocall'

// Data for specialists to enable mapping
const specialists = [
  {
    id: 1,
    name: "Abc, nurse, xyz hospital",
    image: "/src/assets/images/seaaaaaa.png",
    isOnline: true,
  },
  {
    id: 2,
    name: "Ghi, pharmacist, mno hospital",
    image: "/src/assets/images/pexels-fotios-photos-1083822.png",
    isOnline: true,
  },
  {
    id: 3,
    name: "Efg, emergency, xyz hospital",
    image: "/src/assets/images/download.png",
    isOnline: true,
  },
  {
    id: 4,
    name: "Klm, senior nurse, bcd hospital",
    image: "/src/assets/images/old-book-with-white-flower-phone-wallpaper.png",
    isOnline: true,
  },
];

const VideoConnect = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1512px] relative py-10">
        {/* Header section with logo and title */}
        <header className="relative mb-16">
          <div className="relative h-[196px] w-[262px]">
            <div className="relative h-[196px] bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%]">
              <div className="absolute w-[163px] h-[25px] top-36 left-[50px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
                COMMUNOHEAL
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <h1 className="text-[40px] font-normal text-black text-center tracking-[0] leading-[normal] [font-family:'Poppins',Helvetica] mb-6">
              Available team of specialists
            </h1>

            <div className="absolute left-[141px] top-[197px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl">
              Displaying 4/30 results
            </div>
          </div>
        </header>

        {/* Specialists list */}
        <section className="flex flex-col gap-6 px-[141px]">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-[#009e8a80] rounded-[40px] border-none shadow-none"
            >
              <div className="p-0">
                <div className="flex items-center justify-between h-32 px-10 ">
                  <div className="flex items-center gap-10">
                    <div className="relative">
                      <div className="w-[85px] h-[85px]">
                        <img
                          src={specialist.image}
                          alt={specialist.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      {specialist.isOnline && (
                        <div className="absolute w-6 h-6 bottom-0 right-0 bg-[#5eb334] rounded-xl" />
                      )}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#0f2a2d] text-[28px] tracking-[0] leading-[normal]">
                      {specialist.name}
                    </div>
                  </div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => navigate("/videocall")} // Redirect to VideoCall page
                  >
                    <img
                      className="w-[66px] h-[66px] object-cover"
                      alt="Video call"
                      src="/src/assets/images/video-call-3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
    
      </div>
    </div>
  );
};

export default VideoConnect;
