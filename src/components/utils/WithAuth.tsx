"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { session } from "../utils/sessions";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
const WithAuth = (Component: any) => {
  // const router = useRouter();
  // if (!session) {
  //   router.push("/signin");
  // }
  return (props: any) => {
    useLayoutEffect(() => {
      if (session == null) {
        redirect("/signin");
      }
    }, []);
    return <Component {...props} />;
  };
};

export default WithAuth;
