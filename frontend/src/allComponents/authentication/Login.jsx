import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./authStyles.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector } from "react-redux";
import { baseUrl } from "../../app/utils";

const Login = () => {
  const navigate = useNavigate();
  const signUpLoadingStates = useSelector((state) => state?.authReducer);

  console.log("sign up data in store", signUpLoadingStates);

  const initialValues = {
    email: "",
    password: "",
    showPassword: false,
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const response = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'authorization':`Bearer ${token}`
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) return;
    const data = await response.json();
    console.log("login data", data);
    const token = data?.data?.token;
    localStorage.setItem('token',token);
    navigate("/home");
    resetForm();
  };
  console.log(localStorage.getItem('token'));
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const handleTogglePassword = (values, setFieldValue) => {
    setFieldValue("showPassword", !values.showPassword);
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
            <h3 className="signup-header">Login</h3>
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

            <button className="reUsableBtn" type="submit">
              Login
            </button>
            <button className="reUsableBtn" type="reset">
              Reset Form
            </button>

            <Link to="/forgotPassword" className="link-tag">
              Forgot Password?
            </Link>
            <p className="link-tail-text">
              Don’t have an account yet?{" "}
              <Link to="/signUp" className="link-tag">
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
