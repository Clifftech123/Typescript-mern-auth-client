import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../../helper/validate";

import styles from "../../styles/Account/Logging.module.css";

const Password = () => {
  // for the  password validation
  const PasssFomrik = useFormik({
    initialValues: {
      password: "",
    },

    validate: passwordValidate,
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
          <form className="pb-1 h-80" onSubmit={PasssFomrik.handleSubmit}>
            <div className="profile flex justify-center py-6">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            {/* SUBMIT  BUTTON : All the styling for this button  found in the module logging css   */}
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...PasssFomrik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />

              <button className={styles.btn}> Sign in </button>
            </div>
            {/*  REGISTER*/}
            <div className="text-center py-4">
              <span className="text-gray-500">
                {" "}
                Forget Password?
                <Link className="text-red-500" to="/recovery">
                  Recovery Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
