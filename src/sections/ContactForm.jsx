import React, { useState, useRef } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

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

export default function ContactForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    intention: "",
    pathway: "",
  });

  const [errors, setErrors] = useState({});

  // CAPTCHA STATES
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const refreshIconRef = useRef(null);

  // FIX: keepError=true hoga toh error clear nahi hoga
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

  // FIX: 6 chars type hote hi wrong captcha check
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

  const stepsData = {
    1: {
      question:
        "What is your total active professional leadership or entrepreneurial experience?",
      key: "experience",
      options: [
        "Over 15 Years (Eligible for Senior Fast-Track Peer Review)",
        "10 to 15 Years (Eligible for Advanced Strategic Path)",
        "5 to 10 Years (Eligible for Standard Experiential Audit)",
        "Under 5 Years (Requires Special Board Case Review)",
      ],
    },

    2: {
      question:
        "What is your primary commercial or academic objective for credential validation?",
      key: "intention",
      options: [
        "To legally append the formal 'Dr.' prefix to my corporate profile",
        "To fortify global enterprise credibility & fundraising capability",
        "To secure international advisory panel positions & global consulting slots",
        "To transition into elite global research & strategic think-tank circles",
      ],
    },

    3: {
      question:
        "Which institutional validation pathway aligns with your strategic requirements?",
      key: "pathway",
      options: [
        "Dual Validation Pathway (Simultaneous European & Global Credentials)",
        "Single Direct Validation Track (Targeted Specific Core Institution)",
        "Undecided (Requires Direct Consultation with Academic Board Advisor)",
      ],
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // EMAIL VALIDATION
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    // PHONE VALIDATION
    if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);

    // CAPTCHA VALIDATION
    if (!captchaInput.trim()) {
      setCaptchaError("Please enter the captcha code");
      return;
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      setCaptchaError("Incorrect captcha, please try again");
      refreshCaptcha(true);
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      setStep(1);
    }
  };

  const handleOptionSelect = (key, value) =>
    setFormData({ ...formData, [key]: value });

  const handleNext = () => {
    if (formData[stepsData[step].key]) {
      setStep((prev) => prev + 1);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    alert("Dossier filed successfully!");

    setStep(0);

    setFormData({
      name: "",
      email: "",
      phone: "",
      currentRole: "",
      experience: "",
      intention: "",
      pathway: "",
    });

    setErrors({});

    refreshCaptcha();
  };

  return (
    <section
      id="contact"
      className="bg-[#EEF4FF] text-[#132238] py-12 md:py-16 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10 scroll-mt-20"
    >
      <div className="max-w-xl mx-auto space-y-8 md:space-y-10">

        {/* Header */}
        <div className="text-center space-y-4 md:space-y-5">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C89B2C]/20 bg-[#C89B2C]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2C]" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
              {step === 0
                ? "Direct Institutional Registration"
                : step === 4
                ? "Dossier Locking Phase"
                : "Eligibility Verification"}
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
            {step === 0
              ? "Start With a Conversation"
              : step === 4
              ? "Review & Confirm"
              : "Map Your Criteria"}
          </h2>

          <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base italic leading-relaxed font-normal">
            Begin a confidential consultation to evaluate your professional
            profile and determine the most suitable institutional recognition
            pathway.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 max-w-xs mx-auto">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i <= step ? "bg-[#C89B2C]" : "bg-[#1A2B42]/10"
              }`}
            />
          ))}
        </div>

        {/* Form Card */}
        <Card className="rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-center bg-white/70 backdrop-blur-md border border-[#1A2B42]/10 shadow-sm">

          {/* STEP 0 */}
          {step === 0 && (
            <form
              onSubmit={handleInitialSubmit}
              className="space-y-4 animate-fadeIn"
            >

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-[0.22em] text-[#132238]/60 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#1A2B42]/10 rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors"
                  placeholder="e.g. Dr. Vivek Verma"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.22em] text-[#132238]/60 font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors ${
                      errors.email
                        ? "border-red-400"
                        : "border-[#1A2B42]/10"
                    }`}
                    placeholder="name@company.com"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.22em] text-[#132238]/60 font-semibold">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full bg-white border rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors ${
                      errors.phone
                        ? "border-red-400"
                        : "border-[#1A2B42]/10"
                    }`}
                    placeholder="+1 98765 43210"
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Role */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-[0.22em] text-[#132238]/60 font-semibold">
                  Current Role / Corporate Industry
                </label>

                <input
                  type="text"
                  required
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#1A2B42]/10 rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors"
                  placeholder="Founder & CEO"
                />
              </div>

              {/* CAPTCHA */}
              <div className="space-y-2 pt-2">

                <p className="text-xs uppercase tracking-[0.22em] text-[#132238]/60 font-semibold">
                  Security Verification
                </p>

                <div className="flex items-start gap-2">

                  {/* CAPTCHA BOX */}
                  <div
                    className="flex items-center justify-center gap-0.5 bg-white border border-[#1A2B42]/10 rounded-lg py-2 px-3 select-none relative overflow-hidden"
                    style={{ minWidth: 150 }}
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

                  {/* REFRESH BUTTON */}
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-3 border border-[#1A2B42]/10 rounded-lg text-[#132238]/50 hover:text-[#132238] hover:bg-white transition-colors"
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
                </div>

                {/* CAPTCHA INPUT */}
                <input
                  type="text"
                  value={captchaInput}
                  onChange={handleCaptchaInput}
                  placeholder="Enter CAPTCHA code"
                  maxLength={6}
                  autoComplete="off"
                  className={`w-full bg-white border rounded-lg p-3 text-sm text-[#132238] uppercase tracking-[0.3em] focus:outline-none focus:border-[#C89B2C]/50 transition-colors ${
                    captchaError
                      ? "border-red-400"
                      : "border-[#1A2B42]/10"
                  }`}
                />

                {captchaError && (
                  <p className="text-red-500 text-xs">
                    {captchaError}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full mt-4">
                Continue to Eligibility Steps →
              </Button>
            </form>
          )}

          {/* STEPS 1 TO 3 */}
          {step >= 1 && step <= 3 && (
            <div className="space-y-6 animate-fadeIn">

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
                  Evaluation Phase 0{step} of 03
                </span>

                <h3 className="font-serif text-xl md:text-2xl font-medium leading-relaxed text-[#132238] italic">
                  "{stepsData[step].question}"
                </h3>
              </div>

              <div className="grid gap-3">
                {stepsData[step].options.map((option, idx) => {
                  const isSelected =
                    formData[stepsData[step].key] === option;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        handleOptionSelect(
                          stepsData[step].key,
                          option
                        )
                      }
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                        isSelected
                          ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB]"
                          : "border-[#1A2B42]/10 bg-white/50 text-[#132238]/70 hover:border-[#2563EB]/30 hover:bg-white"
                      }`}
                    >
                      <span className="text-sm leading-relaxed font-normal max-w-[90%]">
                        {option}
                      </span>

                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "border-[#2563EB] bg-[#2563EB]"
                            : "border-[#1A2B42]/30"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1A2B42]/10">
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                >
                  ← Back
                </Button>

                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!formData[stepsData[step].key]}
                >
                  {step === 3 ? "Review Dossier →" : "Next Step →"}
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn text-center py-4">

              <div className="w-12 h-12 bg-[#C89B2C]/10 border border-[#C89B2C]/30 rounded-full flex items-center justify-center mx-auto text-[#C89B2C] text-xl">
                ✓
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-medium text-[#132238]">
                  Dossier Alignment Ready
                </h3>

                <p className="text-[#132238]/60 text-sm leading-relaxed font-normal max-w-sm mx-auto">
                  Hi {formData.name}, your credentials profile has been
                  successfully generated.
                </p>
              </div>

              <Button
                onClick={handleFinalSubmit}
                variant="primary"
                className="w-full"
              >
                Submit Confidential Dossier
              </Button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-[11px] uppercase tracking-[0.22em] text-[#132238]/40 hover:text-[#132238] underline underline-offset-4 transition-colors"
              >
                Modify Answers
              </button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}