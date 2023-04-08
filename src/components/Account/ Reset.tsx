import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../../helper/validate";

import styles from "../../styles/Account/Logging.module.css";

const Reset = () => {
  // for the  password validation
  const PasssFomrik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },

    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center   items-center h-screen">
        {/*   This section contain all the form content      */}
        <div className={styles.formContainer} style={{ width: "50%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset </h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter Your Password
            </span>
          </div>
          {/* ============== FORM ==================  */}
          <form className="p-20" onSubmit={PasssFomrik.handleSubmit}>
            {/* SUBMIT  BUTTON : All the styling for this button  found in the module logging css   */}
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...PasssFomrik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...PasssFomrik.getFieldProps("confirm_pwd")}
                className={styles.textbox}
                type="password"
                placeholder=" Repeat Password"
              />

              <button className={styles.btn}> Sign in </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
