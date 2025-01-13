import React from 'react'
import { FaFacebookF, FaEnvelope, FaLinkedinIn , } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Clentan</h3>
        <p className="text-lg font-normal text-gray-400">
        Forex Trader
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Trading refers to the buying and selling of financial instruments, such as stocks, bonds, currencies forex, commodities, and derivatives, with the aim of making a profit. Traders engage in various markets, and depending on their strategy, they might hold assets for a short period minutes to hours or for longer durations weeks to months.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">079 188 6628
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">clentanchauke9089@gmail.com
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaEnvelope />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft