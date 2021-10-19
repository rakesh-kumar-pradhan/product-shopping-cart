import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import _get from "lodash.get";
import { AuthDispatchContext, signIn } from "contexts/auth";
import Input from "components/core/form-controls/Input";
const LoginSchema = Yup.object().shape({
    firstName:Yup.string().required("firstName is required!"),
    lastName:Yup.string().required("lastName is required!"),
    password: Yup.string().required("Password is required!"),
    mobile: Yup.string().required("mobile is required!"),
    email: Yup.string().required("Email Address is required!")
});

const AuthPage = () => {
    const authDispatch = useContext(AuthDispatchContext);
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    console.log("location => ", location);
    const goToForgotPassword = (e) => {
        e.preventDefault();
    };

    const goToRegister = (e) => {
        e.preventDefault();
    };

    const signInSuccess = (userData) => {
        signIn(authDispatch, userData);
        if (fromUrl) {
            console.log(fromUrl);
            history.push(fromUrl);
        } else {
            history.push("/auth");
        }
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                mobile: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const userData = { ...values };
                    resetForm();
                    signInSuccess(userData);
                } catch (err) {
                    console.error(err);
                }
            }}
        >
            {() => (
                <Form>
                    <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        component={Input}
                    />
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        component={Input}
                    />
                    <Field
                        name="email"
                        type="email"
                        placeholder="example@gmail.com"
                        component={Input}
                    />
                    <Field
                        name="mobile"
                        type="number"
                        placeholder="moblie Number"
                        component={Input}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        component={Input}
                    />

                    <button className="auth-button block" onClick={() => { }}>
                        Register
                    </button>

                    <p>

                        <Link to="/auth" className="btn btn-link">Cancel</Link>

                    </p>
                </Form>
            )}
        </Formik>
    );
};

export default AuthPage;
