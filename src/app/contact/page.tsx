"use client";
import { session } from "@/components/utils/sessions";
import { redirect } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";
import WithAuth from "@/components/utils/WithAuth";
const Contact = () => {
  // useLayoutEffect(() => {
  //   if (!session) {
  //     redirect("/signin");
  //   }
  // }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Contact
    </div>
  );
};

export default WithAuth(Contact);
