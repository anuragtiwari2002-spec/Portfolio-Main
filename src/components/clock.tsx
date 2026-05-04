"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<string>("");
  const [offset, setOffset] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();

      // Bangalore time (IST = UTC+5:30)
      const bangaloreTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const hours = bangaloreTime.getHours().toString().padStart(2, "0");
      const minutes = bangaloreTime.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);

      // Calculate offset from user's local time
      const localOffset = now.getTimezoneOffset(); // in minutes, negative for east
      const istOffsetMinutes = 330; // IST is UTC+5:30 = 330 minutes
      const diffMinutes = istOffsetMinutes + localOffset; // diff from local to IST

      if (diffMinutes === 0) {
        setOffset("");
      } else {
        const absHours = Math.floor(Math.abs(diffMinutes) / 60);
        const absMins = Math.abs(diffMinutes) % 60;
        const direction = diffMinutes > 0 ? "BEHIND" : "AHEAD";
        let offsetStr = `${absHours}HR`;
        if (absMins > 0) {
          offsetStr += ` ${absMins}MIN`;
        }
        setOffset(`${offsetStr} ${direction}`);
      }
    }

    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <p className="font-mono text-xs tracking-widest text-muted">
      <span className="inline-block align-middle mr-1.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </span>
      {time} IN BANGALORE, INDIA{offset && ` | ${offset}`}
    </p>
  );
}
