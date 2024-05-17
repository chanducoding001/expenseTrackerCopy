import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../reusables/Button";
import "./authStyles.css";
import { baseUrl } from "../../app/utils";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const { verifyEmail } = useParams();
  const navigate = useNavigate();
  console.log(otp);
  const sendOtpAgain = async () => {
    const res = await fetch(baseUrl + "forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: verifyEmail }),
    });
    const data = await res.json();
    if (!res.ok) return;
    console.log(data);
  };
  const verifyOtpApi = async () => {
    const res = await fetch(baseUrl + "verifyOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp }),
    });
    const data = await res.json();
    if (!res.ok) return;
    console.log(data);
    navigate(`/resetPassword/${otp}`);
    setOtp(null);
  };
  return (
    <>
      <div className="otp-container">
        <h3>Enter your Verification Code</h3>
        <div className="otp-wrapper">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={
              <span
                style={{
                  margin: "20px",
                  width: "20px",
                  border: "2px solid black",
                  height: "2px",
                }}
              ></span>
            }
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  borderRadius: "50%",
                  padding: "20px",
                  height: "50px",
                  width: "50px",
                  border: "2px solid #7F3DFF",
                  outline: "2px solid #7F3DFF",
                }}
              />
            )}
          />
        </div>
        <div>
          <p className="link-tail-text">
            We send verification code to your email {verifyEmail}. You can check
            your inbox.
          </p>
          <p className="link-tail-text">
            I didn’t received the code?{" "}
            <button onClick={sendOtpAgain} className="otp-send-again-btn">
              Send again
            </button>
          </p>
        </div>
        <div>
          <Button text="Verify" handleClick={verifyOtpApi} />
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
