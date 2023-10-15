import React, { useLayoutEffect } from "react";
import { session } from "../utils/sessions";
import { redirect } from "next/navigation";
const WithOutAuth = (Component: any) => {
  return (props: any) => {
    useLayoutEffect(() => {
      if (session != null) {
        redirect("/");
      }
    }, []);
    return <Component {...props} />;
  };
};

export default WithOutAuth;
