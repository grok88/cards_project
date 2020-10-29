import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {Redirect} from "react-router-dom";
import {registerTC} from "../p2-bll/registerThunk";
import {Status} from "../../../../n0-common/c1-ui/status/Status";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {setError, setStatus} from "../../../../n1-main/m2-bll/b1-main/mainActions";
import {useFormik} from "formik";
import {Button, Col, Form, Input, Row} from 'antd';
import styles from "../../a1-login/l1-ui/Login.module.css";
import {registerIn} from "../p2-bll/registerActions";

//Ant-design FORM
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

type RegisterPropsType = {}
export type RegisterParamsType = {
    email: string
    password: string
}

export const Register: React.FC<RegisterPropsType> = React.memo((props) => {

    const isRegisterIn = useSelector<AppRootStateType, boolean>(state => state.register.isRegisterIn)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.main.status);
    const error = useSelector<AppRootStateType, null | string>(state => state.main.error);


    const dispatch = useDispatch();
    // const [email, setEmail] = useState<string>('gerasimenkodenis7@gmail.com');
    // const [password, setPassword] = useState<string>('qwertyu12');

    const [firstVisited, setFirstVisited] = useState<boolean>(true);

    useEffect(() => {
        if (firstVisited) {
            dispatch(setError(''));
            dispatch(setStatus('idle'));
            setFirstVisited(false);
        }
    }, [firstVisited, setFirstVisited]);

    useEffect(() => {
        return () => {
            dispatch(registerIn(false));
            dispatch(setStatus("idle"));
        }
    }, [])

    //formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values: RegisterParamsType) => {
            dispatch(registerTC(values));
        },
    });


    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };


    if (isRegisterIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (

        <div style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Status title={'Register'} status={status} error={error}/>
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
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: ' '
                                    },
                                    {
                                        validator: (formItemInfo, inputValue) => {
                                            if (!inputValue.length) return Promise.reject('email is required');
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) return Promise.reject('Invalid email address');

                                            else return Promise.resolve();
                                        }
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input type="text" placeholder={'enter you email'}
                                       {...formik.getFieldProps('email')}/>
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: ' '
                                    },
                                    {
                                        validator: (formItemInfo, inputValue) => {
                                            if (!inputValue.length) return Promise.reject('password is required');
                                            if (inputValue.length <= 7) return Promise.reject('Must be 7 characters or more');

                                            else return Promise.resolve();
                                        }
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input.Password type="password" placeholder={'enter you password'}
                                       {...formik.getFieldProps('password')}/>
                            </Form.Item>
                            <div className={styles.regInfo}>
                                <Form.Item>
                                    <Button htmlType="submit">Sign up</Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>

    );
});
