import toast from 'react-hot-toast';

/** validate login page username */
export async function usernameValidate(values: {username: string}): Promise<{username?: string}> {
    const errors = usernameVerify({}, values);

    return errors;
}

/** validate username */
function usernameVerify(error: {username?: string}, values: {username: string}): {username?: string} {
    if (!values.username) {
        error.username = toast.error('Username Required...!');
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}


