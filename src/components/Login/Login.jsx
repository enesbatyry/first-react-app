import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validator";
import {login, me} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import style from "./../../Common/FormControls/FormControls.module.css"


const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder="login" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name="password" placeholder="password" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input"/>remember me
            </div>
            {props.error && <div className={style.formSummeryError}>{props.error}</div>}
            <div>
                <button type="submit">sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>({
        isAuth: state.auth.isAuth,
        id: state.auth.id
})

export default connect(mapStateToProps, {login, me})(Login)