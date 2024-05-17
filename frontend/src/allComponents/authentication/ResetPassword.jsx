import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./authStyles.css";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../app/utils";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { otp } = useParams();
  console.log("params", otp);
  const initialValues = {
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPwd: false,
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const backendValues = {
      otp,
      password: values.password,
    };
    const response = await fetch(baseUrl + "resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendValues),
    });
    if (!response.ok) return;
    const data = await response.json();
    console.log("reset password", data);
    resetForm();
    navigate("/login");
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });
  const handleTogglePassword = (values, setFieldValue) => {
    setFieldValue("showPassword", !values.showPassword);
  };
  const handleToggleConfirmPassword = (values, setFieldValue) => {
    setFieldValue("showConfirmPwd", !values.showConfirmPwd);
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
            <h3>Reset Password</h3>
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
            <div>
              <div>
                <Field
                  type={values.showConfirmPwd ? "text" : "password"}
                  placeholder={`Confirm Password`}
                  name="confirmPassword"
                  className="inputField"
                />
                <div
                  className="password-toggle-icon"
                  onClick={() =>
                    handleToggleConfirmPassword(values, setFieldValue)
                  }
                >
                  {values.showConfirmPwd ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </div>
              </div>
              <div className="error">
                <ErrorMessage name="confirmPassword" />
              </div>
            </div>
            <button className="reUsableBtn" type="submit">
              Continue
            </button>
            <button className="reUsableBtn" type="reset">
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
