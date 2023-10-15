"use client";
import React from "react";
import WithAuth from "@/components/utils/WithAuth";
const News = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      News
    </div>
  );
};

export default WithAuth(News);
