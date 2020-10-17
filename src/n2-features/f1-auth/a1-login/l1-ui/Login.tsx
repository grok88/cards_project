import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {useFormik} from 'formik';
import {Button, Checkbox, Col, Form, Input, Row} from 'antd';
import styles from './Login.module.css';

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


//Formik
const validate = (values: LoginParamsType) => {
    const errors: LoginErrorType = {};
    //
    // if (!values.password) {
    //     errors.password = 'Required';
    // } else if (values.password.length < 7) {
    //     errors.password = 'Must be 7 characters or more';
    // }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

//Ant-design FORM
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export const Login: React.FC<LoginPropsType> = React.memo((props) => {

    const {onLogin} = props;

    const formik = useFormik({
        initialValues: {
            // email: 'grok88@tut.by',
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
    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);

    };

    return (
        <Row>
            <Col span={24}>
                <div style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '24px 24px 24px 24px',
                    margin: '20px auto'
                }}>
                    <Form onFinish={formik.handleSubmit} initialValues={formik.values}
                          onFinishFailed={onFinishFailed}  {...layout}>
                        <Form.Item label="Email"
                                   name="email"
                                   rules={[
                                       // {
                                       //     type: 'email',
                                       //     // message: (formik.touched.email && formik.errors.email) ? formik.errors.email : "",
                                       // },
                                       {
                                           required: true,
                                           message: ' '
                                           // message: (formik.touched.email && formik.errors.email) ? formik.errors.email : "",
                                       },
                                       {
                                           validator: (formItemInfo, inputValue) => {
                                               // console.log(formItemInfo, inputValue);
                                               if (!inputValue.length) return Promise.reject('email is required');
                                               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) return Promise.reject('Invalid email address');

                                               else return Promise.resolve();
                                           }
                                       }
                                   ]}
                            // help={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                            // validateStatus={formik.touched.email && formik.errors.email ? "error" : "success"}
                                   hasFeedback
                        >
                            <Input type="text" placeholder={'enter you email'} {...formik.getFieldProps('email')} />
                        </Form.Item>
                        <Form.Item style={{marginBottom: 0}}
                                   label="Password"
                                   name="password"
                                   rules={[
                                       {
                                           required: true,
                                           // message: (formik.touched.password && formik.errors.password) ? formik.errors.password : "",
                                           message: ' '
                                       },
                                       {
                                           validator: (formItemInfo, inputValue) => {
                                               // console.log(formItemInfo, inputValue);
                                               if (!inputValue.length) return Promise.reject('password is required');
                                               if (inputValue.length < 7) return Promise.reject('Must be 7 characters or more');

                                               else return Promise.resolve();
                                           }
                                       }
                                   ]}
                                   hasFeedback
                        >
                            <Input.Password type="password"
                                            placeholder={'enter you password'} {...formik.getFieldProps('password')}/>
                            {/*{formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}*/}

                        </Form.Item>
                        <Form.Item style={{marginBottom: 'none'}}
                                   name="remember"
                                   label={'Remember'}
                                   valuePropName="checked"
                        >
                            <Checkbox  {...formik.getFieldProps('rememberMe')}/>
                        </Form.Item>

                        <div className={styles.regInfo}>
                            <Form.Item>
                                <Button htmlType="submit">Sign in</Button>
                            </Form.Item>
                            <div>
                                <NavLink to={PATH.RESTORE} className={styles.restore}>Востановить пароль?</NavLink>
                            </div>
                            <div>
                                <NavLink to={PATH.REGISTER} className={styles.signUp}>Регистрация</NavLink>
                            </div>
                        </div>
                    </Form>
                </div>
            </Col>

        </Row>

    );
});