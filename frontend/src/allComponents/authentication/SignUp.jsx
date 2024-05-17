import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./authStyles.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../reusables/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { baseUrl } from "../../app/utils";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    checkBox: false,
    showPassword: false, // State to toggle password visibility
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const response = await fetch(baseUrl + "signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (!response.ok) return;
    console.log("sign up data", data);
    navigate("/login");
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Email is required!"),
    checkBox: Yup.boolean()
      .oneOf([true], "You have to accept the agreement policy!")
      .required(),
    password: Yup.string().required("Password is required!"),
  });

  const handleTogglePassword = (values, setFieldValue) => {
    setFieldValue("showPassword", !values.showPassword);
  };

  const handleGoogleSignUp = async () => {
    // const response = await fetch('http://localhost:8000/auth/google/callback',{withCredentials:true});
    // const data = await response.json();
    // console.log('sign up with google data',data);
    window.open("http://localhost:8000/auth/google/callback");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="signUpForm">
            <h4 className="signup-header">Sign Up</h4>
            <div>
              <div>
                <Field
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="inputField"
                />
              </div>
              <div className="error">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div>
              <div>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="inputField"
                />
              </div>
              <div className="error">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div>
              <div>
                <Field
                  type={values.showPassword ? "text" : "password"}
                  placeholder={`Password`}
                  name="password"
                  className="inputField"
                />
                <div
                  className="password-toggle-icon"
                  onClick={() => handleTogglePassword(values, setFieldValue)}
                >
                  {values.showPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </div>
              </div>
              <div className="error">
                <ErrorMessage name="password" />
              </div>
            </div>

            <div
              style={{
                width: "343px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Field
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  className="inputCheckbox"
                />

                <p htmlFor="checkBox">
                  By signing up, you agree to the{" "}
                  <span style={{ color: "blue" }}>
                    Terms of Service and Privacy Policy
                  </span>
                </p>
              </div>
              <div className="error">
                <ErrorMessage name="checkBox" />
              </div>
            </div>
            <button
              className="reUsableBtn"
              type="submit"
              disabled={!values.checkBox}
            >
              Sign Up
            </button>
            <p
              style={{ color: "#91919F", fontSize: "14px", fontWeight: "700" }}
            >
              Or with
            </p>
            <div style={{ position: "relative" }}>
              <Button
                text="Sign Up with Google"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
                handleClick={handleGoogleSignUp}
              />
              <img src="/images/googleIcon.jpeg" className="googleIcon" alt="Google Icon" />
            </div>

            <div>
              <p className="link-tail-text">
                Already have an account?{" "}
                <Link className="link-tag" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <button className="reUsableBtn" type="reset">
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
