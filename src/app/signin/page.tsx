"use client";
import React, { useState } from "react";
import WithOutAuth from "@/components/utils/WithOutAuth";
import { GetSessionToken } from "@/components/utils/sessions";
import { session } from "@/components/utils/sessions";
import { redirect, useRouter } from "next/navigation";
const SignIn = () => {
  const [userData, setUserData] = useState<any>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const LoginApi = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/login`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      GetSessionToken(data?.token);
      console.log(data, "show the data here000");
      console.log(session, "show the session here");
      router.push("/");
    } catch (er) {
      console.log(er, "show the errr");
    }
  };

  return (
    <div className="form-container" id="login-form">
      <h1>Login</h1>
      <div className="formja">
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="email"
          name="email"
          // required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          // required
          onChange={handleChange}
        />
        <button type="submit" onClick={LoginApi}>
          Login
        </button>
      </div>
      <p>
        Don't have an account?{" "}
        <a href="#" id="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default WithOutAuth(SignIn);
