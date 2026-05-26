import React, { useState, useRef } from "react";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const COLORS = [
  "#C89B2C",
  "#132238",
  "#3B6D11",
  "#185FA5",
  "#993C1D",
  "#993556",
];

const ROTATIONS = [-5, 3, -7, 4, -3, 6];
const SHIFTS = [2, -1, 3, -2, 1, -3];

function generateCaptcha() {
  let s = "";

  for (let i = 0; i < 6; i++) {
    s += CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  return s;
}

const Popup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const refreshIconRef = useRef(null);

  if (!isOpen) return null;

  const refreshCaptcha = (keepError = false) => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
    if (!keepError) setCaptchaError("");

    if (refreshIconRef.current) {
      refreshIconRef.current.style.transition = "transform 0.4s";
      refreshIconRef.current.style.transform = "rotate(360deg)";

      setTimeout(() => {
        if (refreshIconRef.current) {
          refreshIconRef.current.style.transform = "rotate(0deg)";
          refreshIconRef.current.style.transition = "";
        }
      }, 420);
    }
  };

  // FIX 1: CAPTCHA change on wrong input (6 chars typed)
  const handleCaptchaInput = (e) => {
    const val = e.target.value;
    setCaptchaInput(val);
    setCaptchaError("");

    if (val.length === 6) {
      if (val.toUpperCase() !== captchaCode) {
        setCaptchaError("Incorrect captcha, please try again");
        refreshCaptcha(true);
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid number";
    }

    // Role
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    // CAPTCHA
    let captchaOk = true;

    if (!captchaInput.trim()) {
      setCaptchaError("Please enter the captcha code");
      captchaOk = false;
    } else if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setCaptchaError("Incorrect captcha, please try again");
      refreshCaptcha(true);
      captchaOk = false;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0 && captchaOk;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);

      setTimeout(() => {
        onClose();

        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
        });

        setErrors({});
        setIsSubmitted(false);

        setCaptchaInput("");
        setCaptchaError("");
        setCaptchaCode(generateCaptcha());
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#132238]/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl relative border border-[#1A2B42]/10 animate-in fade-in zoom-in duration-300 w-full max-w-[520px] p-8 overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#132238]/50 hover:text-[#132238] transition-colors"
        >
          ✕
        </button>

        {/* Heading */}
        <h3 className="font-serif text-2xl mb-1 text-[#132238]">
          Get in Touch
        </h3>

        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C89B2C] mb-5 font-medium">
          Start your journey today
        </p>

        <form onSubmit={handleSubmit}>

          {/* Form Grid */}
          {/* FIX 2: Mobile me single column, desktop pe 2 column — placeholder overflow fix */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">

            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                placeholder: "e.g. John Doe",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "name@company.com",
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "+44 123 456 789",
              },
              {
                id: "role",
                label: "Your Role",
                type: "text",
                placeholder: "e.g. Founder & CEO",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div
                key={id}
                className="flex flex-col gap-1 min-w-0"
              >
                <label className="text-[10px] uppercase font-bold text-[#132238]/70 tracking-wider">
                  {label}
                </label>

                <input
                  type={type}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`w-full min-w-0 p-2 border rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 placeholder:text-[9px] sm:placeholder:text-xs focus:outline-none focus:border-[#C89B2C] transition-colors ${
                    errors[id]
                      ? "border-red-400"
                      : "border-[#1A2B42]/10"
                  }`}
                />

                {errors[id] && (
                  <p className="text-red-500 text-[11px]">
                    {errors[id]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CAPTCHA */}
          <p className="text-[10px] uppercase font-bold text-[#132238]/70 tracking-wider mb-2">
            Security Verification
          </p>

          <div className="flex items-start gap-2 mb-1">

            {/* Captcha Display */}
            <div
              className="flex items-center justify-center gap-0.5 bg-gray-50 border border-[#1A2B42]/10 rounded-md py-1.5 px-3 select-none relative overflow-hidden"
              style={{ minWidth: 140 }}
            >
              <div className="absolute inset-0 flex items-center px-2 pointer-events-none">
                <div
                  className="w-full border-t border-dashed border-[#1A2B42]/10"
                  style={{ transform: "rotate(-1.5deg)" }}
                />
              </div>

              {captchaCode.split("").map((char, i) => (
                <span
                  key={i}
                  className="font-mono font-bold relative z-10 inline-block"
                  style={{
                    color: COLORS[i % COLORS.length],
                    transform: `rotate(${ROTATIONS[i]}deg) translateY(${SHIFTS[i]}px)`,
                    fontSize: 18 + (i % 3),
                  }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Refresh Button */}
            <button
              type="button"
              onClick={refreshCaptcha}
              className="p-2 border border-[#1A2B42]/10 rounded-md text-[#132238]/50 hover:text-[#132238] hover:bg-gray-50 transition-colors flex-shrink-0"
            >
              <svg
                ref={refreshIconRef}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            </button>

            {/* Captcha Input */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <input
                type="text"
                value={captchaInput}
                onChange={handleCaptchaInput}
                placeholder="Enter code"
                maxLength={6}
                autoComplete="off"
                className={`w-full min-w-0 p-2 border rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 uppercase tracking-widest focus:outline-none focus:border-[#C89B2C] transition-colors ${
                  captchaError
                    ? "border-red-400"
                    : "border-[#1A2B42]/10"
                }`}
              />

              {captchaError && (
                <p className="text-red-500 text-[11px]">
                  {captchaError}
                </p>
              )}
            </div>
          </div>

          <p className="text-[11px] text-[#132238]/40 mb-4">
            Type the characters shown in the box
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-3 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg cursor-pointer
            ${
              isSubmitted
                ? "bg-green-600 text-white"
                : "bg-[#132238] text-white hover:bg-[#1A2B42]"
            }`}
          >
            {isSubmitted
              ? "Submitted ✓"
              : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;