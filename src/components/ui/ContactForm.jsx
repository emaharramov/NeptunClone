import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    if (value.length >= 2 || !/\d/.test(value)) {
      setName(value);
    }
  };

  const handleNumberChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setNumber(value);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <form
        action="https://neptun.az/index.php?route=information/partners"
        method="post"
        className="flex flex-wrap xxl:h-[150px] lg:px-[15px]"
      >
        <div className="bepartners w-full lg:w-[275px] lg:mr-[15px]">
          <input
            className="mb-3 w-full"
            type="text"
            placeholder="Adınız*"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="mb-3 w-full"
            type="text"
            placeholder="Nömrə*"
            value={number}
            onChange={handleNumberChange}
          />
          <input
            className="mb-3 w-full"
            type="text"
            placeholder="E-mail ünvanınız*"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="lg:px-[15px] w-full lg:w-[580px]  bepartnersText">
          <textarea
            rows="10"
            placeholder="Şərh*"
            className="w-full h-[140px] p-4"
          ></textarea>
        </div>

        <div className="lg:pl-[15px] bepartners w-full lg:w-[275px]">
          <input
            type="text"
            className="w-full mb-[9px]"
            placeholder="Aşağıdakı kodu daxil edin **"
          />
          <img
            className="mb-[9px]"
            src="https://neptun.az/index.php?route=extension/captcha/basic_captcha/captcha"
            alt="captcha"
          />
          <button className="bg-orange text-white py-[9px] px-[20px] rounded-[22px] w-full">
            Təsdiqlə
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
