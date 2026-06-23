import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish, duration = 2200 }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), duration - 500);
    const finishTimer = setTimeout(() => onFinish?.(), duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1b1c1c] transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="splash-icon-wrapper text-7xl">🍔</div>

      <h1 className="mt-6 text-2xl font-headline-sm font-extrabold text-secondary-fixed-dim tracking-wide splash-text">
        TRAILER BURGER
      </h1>

      <p className="mt-2 text-sm text-outline-variant splash-text-delay">
        Preparando tu antojo...
      </p>

      <style>{`
        .splash-icon-wrapper {
          animation: splash-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          transform: scale(0.4);
          line-height: 1;
        }

        .splash-text {
          animation: splash-fade-up 0.6s ease-out 0.35s forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        .splash-text-delay {
          animation: splash-fade-up 0.6s ease-out 0.55s forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        @keyframes splash-pop {
          0% { opacity: 0; transform: scale(0.4); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes splash-fade-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}