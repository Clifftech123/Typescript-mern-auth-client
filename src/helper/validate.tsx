import toast from "react-hot-toast";

/** validate login page username  Main function
 * This function will be called in the onSubmit function
 * this will export the password and the username page
 *
 *
 *
 *
 */
export async function usernameValidate(values: {
  username: string;
}): Promise<{ username?: string }> {
  const errors = usernameVerify(values, {});

  return errors;
}

/** validate username   */
function usernameVerify(
  values: { username: string },
  error: { username?: string }
): { username?: string } {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}

//******************************************** */

/** validate password  login password main function
 *  We will use this function in the login page
 * and the register page
 * This function will be called in the onSubmit function
 *  this will export the password and the username page
 *
 */
export async function passwordValidate(values: {
  password: string;
}): Promise<{ password?: string }> {
  const errors = passwordVerify(values, {});

  return errors;
}

/** validate password  */
function passwordVerify(
  values: { password: string },
  error: { password?: string }
): { password?: string } {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!values.password) {
    error.password = toast.error("Password Required...!");
  } else if (
    typeof values.password === "string" &&
    values.password.length < 8
  ) {
    error.password = toast.error("Password must be 8 characters long...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("wrong password...!");
  } else if (!passwordRegex.test(values.password)) {
    error.password = toast.error(
      "Password must contain at least one uppercase letter, one lowercase letter, and one number...!"
    );
  }

  return error;
}

//******************************************** */

// validate  reset password

export async function resetPasswordValidate(values: {
  password: string;
  confirm_pwd: string;
}): Promise<{ password?: string; confirm_pwd?: string }> {
  const errors = resetPasswordVerify(values, {});

  return errors;
}

function resetPasswordVerify(
  values: { password: string; confirm_pwd: string },
  error: { password?: string; confirmPassword?: string }
): { password?: string; confirm_pwd?: string } {
  if (values.password !== values.confirm_pwd) {
    error.confirmPassword = toast.error("Password does not match...!");
  }

  return error;
}
