import React, { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Role
    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);

      // 2 sec baad popup close hoga
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
      <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-2xl relative border border-[#1A2B42]/10 animate-in fade-in zoom-in duration-300">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#132238]/50 hover:text-[#132238] transition-colors"
        >
          ✕
        </button>

        <h3 className="font-serif text-2xl mb-1 text-[#132238]">
          Get in Touch
        </h3>

        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C89B2C] mb-6 font-medium">
          Start your journey today
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-[#132238]/70 block tracking-wider">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full p-2.5 border border-[#1A2B42]/10 rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 focus:outline-none focus:border-[#C89B2C] transition-colors"
            />

            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-[#132238]/70 block tracking-wider">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              className="w-full p-2.5 border border-[#1A2B42]/10 rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 focus:outline-none focus:border-[#C89B2C] transition-colors"
            />

            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-[#132238]/70 block tracking-wider">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +44 123 456 789"
              className="w-full p-2.5 border border-[#1A2B42]/10 rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 focus:outline-none focus:border-[#C89B2C] transition-colors"
            />

            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          {/* Role */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold text-[#132238]/70 block tracking-wider">
              Your Role
            </label>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Founder & CEO"
              className="w-full p-2.5 border border-[#1A2B42]/10 rounded-md text-sm font-sans text-[#132238] placeholder:text-gray-400 focus:outline-none focus:border-[#C89B2C] transition-colors"
            />

            {errors.role && (
              <p className="text-red-500 text-xs">{errors.role}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitted}
            className={`cursor-pointer w-full py-3 mt-4 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg
              ${
                isSubmitted
                  ? "bg-green-600 text-white"
                  : "bg-[#132238] text-white hover:bg-[#1A2B42] shadow-[#132238]/20"
              }`}
          >
            {isSubmitted ? "Submitted ✓" : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;