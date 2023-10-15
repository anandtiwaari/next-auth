"use client";
import React from "react";
import WithAuth from "@/components/utils/WithAuth";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      About
    </div>
  );
};

export default WithAuth(About);
