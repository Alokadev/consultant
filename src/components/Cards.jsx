import React from "react";
import {
  SiJavascript,
  SiMysql,
  SiCyberdefenders,
  SiWoocommerce,
} from "react-icons/si";
import { TbFileTypePhp } from "react-icons/tb";
import {
  FaLaravel,
  FaReact,
  FaLinux,
  FaDatabase,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaFlagUsa } from "react-icons/fa";

const IconGroup = ({ icons }) => {
  return (
    <div className="flex justify-center items-center gap-1">
      {icons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  );
};

const CustomButton = ({ onClick, label }) => {
  return (
    <button
      className="bg-[#CEAB2B] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const PersonCard = ({ name, role, image, icons, flag }) => {
  return (
    <div className="w-full shadow flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mt-[-3rem] bg-white">
        <img
          className="w-full h-full object-cover rounded-full bg-[#CEAB2B]"
          src={image}
          alt={name}
        />
      </div>
      <h2 className="text-2xl font-bold text-center py-1">{name}</h2>
      <div className="flex flex-col items-center text-center font-medium">
        <p className="mx-4 mt-4 mb-4">{role}</p>
        {/* Apply zoom effect to the flag image */}
        <img
          className="w-5 h-5 object-cover rounded-full bg-[#CEAB2B] hover:scale-150 transition-transform duration-300"
          src={flag}
          alt={name}
        />
        <IconGroup icons={icons} />
      </div>
      <CustomButton label="Connect" />
    </div>
  );
};

const Cards = () => {
  const icons1 = [
    <SiJavascript size={40} />,
    <TbFileTypePhp size={40} />,
    <SiMysql size={40} />,
    <FaReact size={40} />,
    <FaLaravel size={40} />,
  ];

  const icons2 = [
    <FaWordpress size={40} />,
    <FaElementor size={40} />,
    <SiWoocommerce size={40} />,
  ];

  const icons3 = [
    <FaLinux size={40} />,
    <MdOutlineSecurity size={40} />,
    <FaDatabase size={40} />,
    <SiCyberdefenders size={40} />,
  ];

  return (
    <div id="consultant" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <PersonCard
          name="Pubudu Dissanayake"
          role="Full-Stack Developer"
          image="https://i.pinimg.com/736x/28/31/4a/28314a9a1dd503e41e5bccf67261a6ce.jpg"
          icons={icons1}
          flag="https://i.pinimg.com/736x/69/8c/6c/698c6c2bef8f2761c04f470a465d9815.jpg"
        />
        <PersonCard
          name="Avishka Imash"
          role="Web Designer"
          image="https://i.pinimg.com/736x/30/f9/09/30f909ede7e7b3310e534f457e69d392.jpg"
          icons={icons2}
          flag="https://i.pinimg.com/736x/69/8c/6c/698c6c2bef8f2761c04f470a465d9815.jpg"
        />
        <PersonCard
          name="Sanuja Rathsara"
          role="Cyber Security Specialist"
          image="https://i.pinimg.com/736x/27/64/1a/27641aec60a01a3ef3ee7ea6742267eb.jpg"
          icons={icons3}
          flag="https://i.pinimg.com/736x/94/ed/56/94ed56988c54877bcabb4ea7747aa67d.jpg"
        />
      </div>
    </div>
  );
};

export default Cards;
