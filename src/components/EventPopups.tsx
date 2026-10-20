"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const fiveKUrl = "https://runsignup.com/Race/TX/Mcallen/CosmicGlow5KRunWalk";
const flyerUrl = "/files/popups/Fall-Event-Flyer.png";
const flyerDismissedKey = "ahsti-fall-event-flyer-dismissed";

type EventPopupsProps = {
  enableFiveK?: boolean;
  enableFlyer?: boolean;
};

export default function EventPopups({
  enableFiveK = true,
  enableFlyer = false, //disable flyer
}: EventPopupsProps) {
  const [showFiveK, setShowFiveK] = useState(enableFiveK);
  const [showFlyer, setShowFlyer] = useState(false);
  const [showApplyOptions, setShowApplyOptions] = useState(false);

  useEffect(() => {
    function handleApplyNowClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest("a");
      const linkText = link?.textContent?.replace(/\s+/g, " ").trim().toLowerCase();
      if (linkText !== "apply now") {
        return;
      }

      event.preventDefault();
      setShowApplyOptions(true);
    }

    document.addEventListener("click", handleApplyNowClick);
    return () => document.removeEventListener("click", handleApplyNowClick);
  }, []);

  useEffect(() => {
    if (!showApplyOptions) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowApplyOptions(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showApplyOptions]);

  useEffect(() => {
    setShowFiveK(enableFiveK);
  }, [enableFiveK]);

  useEffect(() => {
    if (!enableFlyer) {
      setShowFlyer(false);
      return;
    }

    const dismissed =
      window.sessionStorage.getItem(flyerDismissedKey) === "true";

    setShowFlyer(!dismissed);
  }, [enableFlyer]);

  function closeFlyer() {
    window.sessionStorage.setItem(flyerDismissedKey, "true");
    setShowFlyer(false);
  }

  return (
    <>
      {showApplyOptions && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-options-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowApplyOptions(false);
            }
          }}
        >
          <div className="relative my-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setShowApplyOptions(false)}
              aria-label="Close application options"
              className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2
              id="apply-options-title"
              className="pr-8 text-2xl font-bold text-[#00345B] sm:text-3xl"
            >
              Welcome to Affordable Homes of South Texas!
            </h2>
            <p className="mt-2 text-slate-700">
              Please select the option that best describes you.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <section className="flex flex-col rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-bold text-[#00345B]">
                  Existing AHSTI Customer
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-700">
                  If you have previously registered or applied with Affordable
                  Homes of South Texas, please continue using our existing
                  customer portal.
                </p>
                <a
                  href="https://www.myahstihome.org/"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#007DC3] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#005f96]"
                >
                  Existing Customer – Sign In
                </a>
              </section>

              <section className="flex flex-col rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-bold text-[#00345B]">
                  New AHSTI Customer
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-700">
                  If this is your first time applying with Affordable Homes of
                  South Texas, please use our new HousingHub customer portal.
                </p>
                <a
                  href="https://ahsti.housinghubcrm.com/login.html"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[#007DC3] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#005f96]"
                >
                  New Customer – Apply Now
                </a>
              </section>
            </div>
          </div>
        </div>
      )}

      {enableFiveK && showFiveK && (
        <aside className="fixed bottom-4 right-4 z-40 w-[min(330px,calc(100vw-2rem))] rounded-lg border-2 border-[#E7212B] bg-white p-4 shadow-2xl">
          <button
            type="button"
            onClick={() => setShowFiveK(false)}
            aria-label="Close Cosmic Glow 5K announcement"
            className="absolute right-2 top-2 rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer"
          >
            <X size={18} />
          </button>

          <p className="pr-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#E7212B]">
            Now live
          </p>

          <h2 className="mt-1 pr-5 text-xl font-bold text-[#00345B]">
            Cosmic Glow 5K Run/Walk
          </h2>

          <p className="mt-1 text-sm text-slate-700">
            Registration is open for AHSTI&apos;s 5K run and walk.
          </p>

          <a
            href={fiveKUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-md bg-[#007DC3] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#005f96]"
          >
            Register now
          </a>
        </aside>
      )}

      {enableFlyer && showFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="homeownership-event-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeFlyer();
            }
          }}
        >
          <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-[720px] overflow-auto rounded-lg bg-white shadow-2xl">
            <h2
              id="homeownership-event-title"
              className="sr-only"
            >
              Homeownership Event flyer
            </h2>

            <button
              type="button"
              onClick={closeFlyer}
              aria-label="Close Homeownership Event flyer"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-slate-700 shadow-md hover:bg-white hover:cursor-pointer"
            >
              <X size={22} />
            </button>

            <img
              src={flyerUrl}
              alt="Homeownership Event flyer with event dates, locations, and free credit pulls"
              className="h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
