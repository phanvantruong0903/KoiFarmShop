import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log(params);
    const token = params.get("email_verify_token"); // LAM ON HOAT DONG
    if (token) {
      console.log(token);
      localStorage.setItem("email_verify_token", token);
      navigate("/profile");
    }
  }, [params]);

  return;
}
