import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {useFormik} from 'formik';

type LoginPropsType = {
    // email: string;
    // setEmail: (value: string) => void;
    // password: string;
    // setPassword: (value: string) => void;
    // checked: boolean;
    // setChecked: (value: boolean) => void;
    onLogin: (values: LoginParamsType) => void;
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const validate = (values: LoginParamsType) => {
    const errors: LoginErrorType = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Must be 7 characters or more';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

export const Login: React.FC<LoginPropsType> = React.memo((props) => {

    const {onLogin} = props;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            onLogin(values);
            // formik.resetForm();
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="text" placeholder={'enter you email'} {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
            </div>
            <div>
                <input type="password" placeholder={'enter you password'} {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div>
                <label>
                    Remember Me
                    <input type="checkbox" {...formik.getFieldProps('rememberMe')}/>
                </label>
            </div>
            <div>
                <NavLink to={PATH.RESTORE}>Востановить пароль?</NavLink>
            </div>
            <button type={'submit'}>Sign in</button>
            <div>
                <NavLink to={PATH.REGISTER}>Регистрация</NavLink>
            </div>
        </form>
    );
});