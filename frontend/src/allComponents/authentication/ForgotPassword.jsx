import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./authStyles.css";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../app/utils";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const res = await fetch(baseUrl + "forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) return;
    console.log(data);
    navigate(`/verifyOtp/${values?.email}`);
    resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Email is required!"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          className="signUpForm"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <h3 className="signup-header">Forgot Password</h3>
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

          <button className="reUsableBtn" type="submit">
            Continue
          </button>
          <button className="reUsableBtn" type="reset">
            Reset Form
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ForgotPassword;
