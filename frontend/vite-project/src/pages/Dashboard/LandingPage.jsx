import React from "react";
import { useNavigate } from "react-router-dom";

// Service data for mapping
const services = [
  {
    icon: "/src/assets/images/video.png",
    title: "Video Consultations",
    description:
      "Connect with doctors through secure video calls with AI-powered transcription.",
  },
  {
    icon: "/src/assets/images/calendar.png",
    title: "Schedule Appointments",
    description:
      "Book monthly check-ups with your preferred healthcare provider.",
  },
  {
    icon: "/src/assets/images/prescription.png",
    title: "Digital Prescriptions & Test Results",
    description:
      "Access and manage your prescriptions & test results digitally in one place.",
  },
  {
    icon: "/src/assets/images/phone.png",
    title: "Emergency Support",
    description: "24/7 emergency support with immediate response team access.",
  },
];

// Social media links
const socialLinks = [
  { icon: "/src/assets/images/email.png", alt: "Email", url: "mailto:example@example.com" },
  { icon: "/src/assets/images/twitter.png", alt: "Twitter", url: "https://twitter.com" },
  { icon: "/src/assets/images/youtube.png", alt: "Youtube", url: "https://youtube.com" },
  { icon: "/src/assets/images/linkedin.png", alt: "LinkedIn", url: "https://linkedin.com" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/SignUp");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us-section");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1512px] relative">
 
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-8 py-4">
          <div className="relative h-[196px] w-[262px] cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-[url(/src/assets/images/image-13.png)] bg-cover bg-[50%_50%] h-full">
              <div className="absolute w-[163px] h-[25px] top-36 left-[50px] [font-family:'Gugi',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-5">
                COMMUNOHEAL
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div
              className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl cursor-pointer hover:text-[#459496]"
              onClick={scrollToAboutUs}
            >
              About Us
            </div>
            <div
              className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl cursor-pointer hover:text-[#459496]"
              onClick={handleLoginClick}
            >
              Login
            </div>
            <button
              className="bg-[#459496] text-[#fefefe] rounded-[40px] h-14 px-8 [font-family:'Inter',Helvetica] font-normal text-2xl"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative mt-8 px-8 bg-[url(/src/assets/images/Vector3.png)] bg-[100px_200px]">
          <div className="flex flex-row items-center justify-between ">
            <div className="max-w-[600px] z-10  ">
              <h1 className="[font-family:'Belanosima',Helvetica] font-normal text-[#459496] text-[73px] text-center leading-[73px]">
                COMMUNOHEAL
              </h1>
              <h2 className="[font-family:'Syne',Helvetica] font-normal text-black text-[35px] leading-[35px] mt-6">
                Bridging Healthcare Gaps, <br />
                One Connection at a Time
              </h2>
            </div>
            <div className="relative">
              <img
                className="w-[814px] h-[643px] bg-blend-luminosity"
                alt="Healthcare professional"
                src="/src/assets/images/image 4.png"
              />
            </div>
          </div>
          <img
            className="absolute w-[556px] h-[547px] top-[-50px] left-[-376px] z-0"
            alt="Blob shape"
            src="/blob-1.svg"
          />
          <img
            className="absolute w-[654px] h-[664px] top-[100px] right-[-100px] z-0"
            alt="Vector shape"
            src="/vector-1.svg"
          />
        </section>

        {/* Services Section */}
        <section className="relative mt-32 px-8">
          <div className="bg-[#009f8a52] rounded-[40px] py-4 mb-16">
            <h2 className="[font-family:'Belanosima',Helvetica] font-normal text-[#00585b] text-[40px] text-right pr-16 leading-10">
              OUR SERVICES
            </h2>
          </div>

          <div className="flex justify-center gap-16 relative z-10">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[130px] h-[133px] bg-[#73dede80] rounded-[65px/66.26px] flex items-center justify-center mb-4">
                  <img
                    className="w-[52px] h-[52px]"
                    alt={service.title}
                    src={service.icon}
                  />
                </div>
                <h3 className="[font-family:'Belanosima',Helvetica] font-normal text-black text-2xl text-center leading-6 mb-4">
                  {service.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal italic text-black text-2xl text-center leading-6 max-w-[290px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <img
            className="absolute w-[1053px] h-[1049px] top-[10px] left-[-567px] z-0"
            alt="Blob shape"
            src="/blob-3.svg"
          />
          <img
            className="absolute w-[437px] h-[429px] top-[420px] right-[137px] z-0"
            alt="Blob shape"
            src="/blob-4.svg"
          />
        </section>

        {/* Partners Section */}
        <section className="relative mt-32 px-8">
          <div className="bg-[#009f8a52] rounded-[40px] py-4 mb-16">
            <h2 className="[font-family:'Belanosima',Helvetica] font-normal text-[#00585b] text-[40px] text-center leading-10">
              OUR PARTNERS
            </h2>
          
          </div>
      
          <div className="border-none shadow-none">
            <div className="p-0">
            <p className="[font-family:'Inter',Helvetica] font-normal italic text-black text-xl text-center leading-5 mb-8">
                  Leading healthcare institutions working together for better
                  community health
                </p>
              <div className="bg-[url(/src/assets/images/Rectangle52.png)] bg-no-repeat bg-cover h-[623px] rounded-[50px] p-8">
               
              </div>
            </div>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal italic text-black text-xl text-center leading-5 mt-8">
            Want to be a part of this movement? Join us and bring healthcare
            where it's needed most!
          </p>

          <img
            className="absolute w-[354px] h-[322px] top-[400px] right-[200px] z-0"
            alt="Blob shape"
            src="/blob-2.svg"
          />
          <img
            className="absolute w-[368px] h-96 top-[450px] right-[-180px] z-0"
            alt="Blob shape"
            src="/blob-5.svg"
          />
        </section>

        {/* About Us Section */}
        <section id="about-us-section" className="relative mt-32 px-8">
          <div className="border-none shadow-none">
            <div className="bg-[url(/src/assets/images/rectangle-45.svg)] bg-no-repeat bg-cover rounded-lg p-8">
              <h2 className="[font-family:'Syne',Helvetica] font-normal text-black text-[40px] leading-10 mb-8">
                ABOUT US
              </h2>
              <p className="[font-family:'Syne',Helvetica] font-normal text-black text-3xl leading-[30px] max-w-[1121px]">
                At CommunoHeal, our mission is simple yet impactful — to ensure
                that every community, no matter how remote or under-resourced,
                receives timely and adequate healthcare services.
              </p>
            </div>
          </div>

          <img
            className="absolute w-[560px] h-[498px] top-[100px] left-[-193px] z-0"
            alt="Blob shape"
            src="/blob.svg"
          />
          <img
            className="absolute w-[651px] h-[679px] top-[200px] right-[-125px] z-0"
            alt="Blob shape"
            src="/blob-6.svg"
          />
        </section>

          <div className=" mt-[100px] w-full">
              <hr />
          </div>

        {/* Footer */}
        <footer className="mt-32 relative">
          <div className="mb-8" />

          <div className="flex justify-between items-center px-8 pb-8">
            <div className="[font-family:'Syne',Helvetica] font-normal text-black text-2xl tracking-[0] leading-6">
              Office: IT Department, Gauhati University, Assam - 781013
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px]">
                  <img
                    className="w-full h-full object-contain"
                    alt={link.alt}
                    src={link.icon}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;