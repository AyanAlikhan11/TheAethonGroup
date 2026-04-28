"use client";

import Image from "next/image";
import { ArrowRight, Gift, UserPlus, Briefcase, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f7f7f5] py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-[28px] shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8 md:p-10">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                  Refer. Reward.
                  <br />
                  Make an{" "}
                  <span className="text-[#c8a43d]">
                    Impact.
                  </span>
                </h2>

                <p className="text-gray-500 text-base mt-5 leading-relaxed max-w-md">
                  Refer a business or a candidate and earn exciting rewards.
                  Grow together.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all">
                  Refer a Business
                  <span className="w-7 h-7 rounded-full bg-[#c8a43d] flex items-center justify-center">
                    <ArrowRight size={15} />
                  </span>
                </button>

                <button className="group border border-gray-300 text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-all">
                  Refer a Candidate
                  <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
                    <ArrowRight size={15} />
                  </span>
                </button>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative flex justify-center items-center min-h-[320px]">
              {/* Gold Blob */}
              <div className="absolute w-64 h-64 bg-[#d4b04a] rounded-full blur-[2px]" />

              {/* Gift Icon */}
              <div className="absolute left-8 top-8 rotate-[-12deg]">
                <Gift className="text-black/60 w-8 h-8" />
              </div>

              {/* Floating icon */}
              <div className="absolute right-10 top-10 rotate-12">
                <ArrowRight className="text-black/60 w-7 h-7" />
              </div>

              {/* Phone */}
              <div className="relative z-10 rotate-[8deg]">
                <div className="w-[170px] h-[320px] bg-black rounded-[34px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[28px] relative overflow-hidden flex flex-col items-center justify-center">
                    {/* notch */}
                    <div className="absolute top-0 w-24 h-5 bg-black rounded-b-2xl" />

                    <div className="mt-10 text-[#c8a43d] text-4xl font-bold">
                      A
                    </div>

                    <div className="text-center mt-4">
                      <p className="text-sm font-semibold text-black">
                        Referral
                      </p>
                      <p className="text-sm font-semibold text-black">
                        Reward
                      </p>
                    </div>

                    <div className="mt-5 w-10 h-10 rounded-full bg-[#c8a43d] flex items-center justify-center">
                      ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">
              {/* Card 1 */}
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-black" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-black text-lg">
                      Refer a Business
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Help a business grow with us and earn rewards.
                    </p>
                  </div>
                </div>

                <button className="w-10 h-10 rounded-full border flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Card 2 */}
              <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-5 hover:shadow-md transition-all">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-black" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-black text-lg">
                      Refer a Candidate
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Know someone amazing? Refer them to join our team.
                    </p>
                  </div>
                </div>

                <button className="w-10 h-10 rounded-full border flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>
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
                  Book a free consultation call with our team.
                </p>
              </div>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 w-fit">
              Discuss Your Project
              <span className="w-7 h-7 rounded-full bg-[#c8a43d] border border-white/20 flex items-center justify-center">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}