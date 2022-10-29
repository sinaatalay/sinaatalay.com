import React from "react";

export default function ResumeSection({ title, children }) {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="w-full border-t-[2px] border-neutral-300"></div>
      </div>
      <div className="mb-3">{children}</div>
    </>
  );
}
