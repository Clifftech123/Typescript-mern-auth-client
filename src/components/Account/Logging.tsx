import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../../helper/validate";
import { passwordValidate } from "../../helper/validate";

import styles from "../../styles/Account/Logging.module.css";

const Logging = () => {
  // for the username validation
  const formik = useFormik({
    initialValues: {
      username: "", //  username is the name of the input field
    },
    validate: usernameValidate,
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
        <div className={styles.formContainer}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with others.
            </span>
          </div>
          {/* ============== FORM ==================  */}
          <form className="pb-1 h-80" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-6">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            {/* SUBMIT  BUTTON : All the styling for this button  found in the module logging css   */}
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />

              <button className={styles.btn}>Let go </button>
            </div>
            {/*  REGISTER*/}
            <div className="text-center py-4">
              <span className="text-gray-500">
                {" "}
                Don't have account{" "}
                <Link className="text-red-500" to="/register">
                  Create Account Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logging;
