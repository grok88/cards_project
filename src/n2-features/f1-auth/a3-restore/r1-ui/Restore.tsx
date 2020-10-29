import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../n1-main/m1-ui/main/routes/Routes";
import {RequestStatusType} from "../../../../n1-main/m2-bll/b1-main/mainInitialState";
import {useFormik} from "formik";
import {Col, Form, Input, Row, Button} from "antd";
import styles from "./Restore.module.css";

type RestorePropsType = {
    // email: string;
    // setEmail: (value: string) => void;
    onRestore: (email: string) => void;
    status: RequestStatusType
}

//Ant-design FORM
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

export const Restore: React.FC<RestorePropsType> = React.memo((props) => {

    const {status, onRestore} = props;
    //formik
    const formik = useFormik({
        initialValues: {
            email: '',

        },

        onSubmit: values => {
            console.log(values)
            // formik.resetForm();
            onRestore(values.email);
        },
    });
    //antd
    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div>
            {status === 'succeeded' ? <div>
                На почту пришло письмо...
            </div> : ''}
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
                                <Input type="text" placeholder={'enter you email'}  {...formik.getFieldProps('email')}/>
                            </Form.Item>
                            <div className={styles.regInfo}>
                                <Form.Item>
                                    <Button htmlType={'submit'}>Востановить пароль</Button>
                                </Form.Item>
                                <div>
                                    <NavLink to={PATH.LOGIN}>login</NavLink>
                                </div>
                            </div>

                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
});
