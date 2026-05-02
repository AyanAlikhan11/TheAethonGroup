"use client";

import { useState } from "react";
import {
  ArrowRight,
  Gift,
  UserPlus,
  Briefcase,
  Phone,
  CheckCircle,
  Loader2,
} from "lucide-react";

type FormType = "business" | "candidate" | "project" | null;

export default function CTASection() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    referralName: "",
    message: "",
  });

  const openForm = (type: FormType) => {
    setSuccess("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      referralName: "",
      message: "",
    });
    setActiveForm(type);
  };

  const closeForm = () => {
    setActiveForm(null);
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: activeForm,
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Submitted Successfully! Thank you for the referral.");
        setTimeout(() => {
          closeForm();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="cta" className="w-full bg-[#f7f7f5] py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[28px] shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8 md:p-10">
              {/* LEFT */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                    Refer. Reward.
                    <br />
                    Make an{" "}
                    <span className="text-[#c8a43d]">Impact.</span>
                  </h2>

                  <p className="text-gray-500 text-base mt-5 leading-relaxed max-w-md">
                    Refer a business or a candidate and earn exciting rewards.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => openForm("business")}
                    className="group bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
                  >
                    Refer a Business
                    <span className="w-7 h-7 rounded-full bg-[#c8a43d] flex items-center justify-center">
                      <ArrowRight size={15} />
                    </span>
                  </button>

                  <button
                    onClick={() => openForm("candidate")}
                    className="group border border-gray-300 text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-all"
                  >
                    Refer a Candidate
                    <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </div>

              {/* CENTER */}
              <div className="relative flex justify-center items-center min-h-[320px]">
                <div className="absolute w-64 h-64 bg-[#d4b04a] rounded-full blur-[2px]" />

                <div className="absolute left-8 top-8 rotate-[-12deg]">
                  <Gift className="text-black/60 w-8 h-8" />
                </div>

                <div className="absolute right-10 top-10 rotate-12">
                  <ArrowRight className="text-black/60 w-7 h-7" />
                </div>

                <div className="relative z-10 rotate-[8deg]">
                  <div className="w-[170px] h-[320px] bg-black rounded-[34px] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[28px] relative overflow-hidden flex flex-col items-center justify-center">
                      <div className="absolute top-0 w-24 h-5 bg-black rounded-b-2xl" />

                      <div className="mt-10 text-[#c8a43d] text-4xl font-bold">
                        A
                      </div>

                      <div className="text-center mt-4">
                        <p className="text-sm font-semibold">Referral</p>
                        <p className="text-sm font-semibold">Reward</p>
                      </div>

                      <div className="mt-5 w-10 h-10 rounded-full bg-[#c8a43d] flex items-center justify-center">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-5">
                <button
                  onClick={() => openForm("business")}
                  className="w-full flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5 hover:shadow-md transition-all"
                >
                  <div className="flex gap-4 items-start text-left">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        Refer a Business
                      </h4>
                      <p className="text-sm text-gray-500">
                        Help a business grow with us.
                      </p>
                    </div>
                  </div>

                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => openForm("candidate")}
                  className="w-full flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5 hover:shadow-md transition-all"
                >
                  <div className="flex gap-4 items-start text-left">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                      <UserPlus className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">
                        Refer a Candidate
                      </h4>
                      <p className="text-sm text-gray-500">
                        Refer talented people.
                      </p>
                    </div>
                  </div>

                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-[#c8a43d] px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  <Phone size={18} />
                </div>

                <div>
                  <h4 className="font-semibold text-black text-lg">
                    Ready to build your growth engine?
                  </h4>
                  <p className="text-sm text-black/70">
                    Book a free consultation call.
                  </p>
                </div>
              </div>

              <button
                onClick={() => openForm("project")}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3"
              >
                Discuss Your Project
                <span className="w-7 h-7 rounded-full bg-[#c8a43d] border border-white/20 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 capitalize">
              {activeForm === "project"
                ? "Discuss Project"
                : `Refer a ${activeForm}`}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              {(activeForm === "business" || activeForm === "project") && (
                <input
                  name="company"
                  placeholder="Company Name"
                  className="w-full border rounded-xl px-4 py-3"
                  onChange={handleChange}
                />
              )}

              {activeForm === "candidate" && (
                <input
                  name="referralName"
                  placeholder="Candidate Name"
                  className="w-full border rounded-xl px-4 py-3"
                  onChange={handleChange}
                />
              )}

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full border rounded-xl px-4 py-3"
                onChange={handleChange}
              />

              {success && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <CheckCircle size={18} />
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}