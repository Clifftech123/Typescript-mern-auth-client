import toast from 'react-hot-toast';

/** validate login page username */
export async function usernameValidate(values: {username: string}): Promise<{username?: string}> {
    const errors = usernameVerify(values, {});

    return errors;
}

/** validate username */
function usernameVerify(values: {username: string}, error: {username?: string}): {username?: string} {
    if (!values.username) {
        error.username = toast.error('Username Required...!');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}

/** validate password */
export async function passwordValidate(values: {password: string | number} ): Promise<{password?: string}> {
    const errors = passwordVerify(values, {});

    return errors;
}

/** validate password */
function passwordVerify(values: {password: string | number}, error: {password?: string }): {password?: string} {

    if (!values.password) {
        error.password = toast.error('Password Required...!');
    } else if (typeof values.password === 'string' && values.password.length < 8) {
        error.password = toast.error('Password must be 8 characters long...!');
    }

    return error;
}
