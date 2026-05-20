import React, { useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

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

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };
  const handleOptionSelect = (key, value) =>
    setFormData({ ...formData, [key]: value });
  const handleNext = () => {
    if (formData[stepsData[step].key]) setStep((prev) => prev + 1);
    else alert("Please select an option before proceeding.");
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
  };

  return (
    <section
      id="contact"
      className="bg-[#EEF4FF] text-[#132238] py-24 px-4 md:px-8 border-t border-[#1A2B42]/10 scroll-mt-20"
    >
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#C89B2C]/10 border border-[#C89B2C]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#C89B2C] font-medium">
            {step === 0
              ? "Direct Institutional Registration"
              : step === 4
                ? "Dossier Locking Phase"
                : "Eligibility Verification"}
          </div>
          <h2 className="text-3xl font-serif font-medium text-[#132238] tracking-wide">
            {step === 0
              ? "Start With a Conversation"
              : step === 4
                ? "Review & Confirm"
                : "Map Your Criteria"}
          </h2>
        </div>

        <div className="flex gap-2 max-w-xs mx-auto">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= step ? "bg-[#C89B2C]" : "bg-[#1A2B42]/10"}`}
            />
          ))}
        </div>

        <Card className="p-6 md:p-8 min-h-[380px] flex flex-col justify-center bg-white/60 backdrop-blur-md border-[#1A2B42]/10">
          {step === 0 && (
            <form
              onSubmit={handleInitialSubmit}
              className="space-y-4 animate-fadeIn"
            >
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#132238]/60 font-medium">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#132238]/60 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#1A2B42]/10 rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#132238]/60 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#1A2B42]/10 rounded-lg p-3 text-sm text-[#132238] focus:outline-none focus:border-[#C89B2C]/50 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#132238]/60 font-medium">
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
              <Button type="submit" variant="primary" className="w-full mt-4">
                Continue to Eligibility Steps →
              </Button>
            </form>
          )}

          {step >= 1 && step <= 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-1.5">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#C89B2C]">
                  Evaluation Phase 0{step} of 03
                </span>
                <h3 className="text-lg font-serif italic font-medium text-[#132238] leading-relaxed">
                  "{stepsData[step].question}"
                </h3>
              </div>
              <div className="grid gap-3">
                {stepsData[step].options.map((option, idx) => {
                  const isSelected = formData[stepsData[step].key] === option;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        handleOptionSelect(stepsData[step].key, option)
                      }
                      className={`w-full cursor-pointer text-left px-5 py-3.5 rounded-lg border text-xs transition-all duration-300 flex items-center justify-between ${isSelected ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB]" : "border-[#1A2B42]/10 bg-white/50 text-[#132238]/70 hover:border-[#2563EB]/30 hover:bg-white"}`}
                    >
                      <span className="font-light tracking-wide max-w-[90%] leading-normal">
                        {option}
                      </span>
                      <div
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? "border-[#2563EB] bg-[#2563EB]" : "border-[#1A2B42]/30"}`}
                      >
                        {isSelected && (
                          <div className="w-1 h-1 bg-white rounded-full" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#1A2B42]/10">
                <Button variant="ghost" onClick={() => setStep(step - 1)}>
                  ← Back
                </Button>
                <Button
                  variant="primary"
                  onClick={handleNext}
                  disabled={!formData[stepsData[step].key]}
                >
                  {step === 3 ? "Review dossier →" : "Next Step →"}
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-fadeIn text-center py-4">
              <div className="w-12 h-12 bg-[#C89B2C]/10 border border-[#C89B2C]/30 rounded-full flex items-center justify-center mx-auto text-[#C89B2C] text-xl">
                ✓
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-serif font-medium text-[#132238]">
                  Dossier Alignment Ready
                </h3>
                <p className="text-xs text-[#132238]/60 font-light max-w-xs mx-auto">
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
                className="cursor-pointer text-[11px] uppercase tracking-wider text-[#132238]/40 hover:text-[#132238] underline underline-offset-4"
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
