import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../steps/step3";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
export default function Loginpage() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const loginstate = useSelector(state => state.userLoginReducer)
    const { loading, err } = loginstate
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";  //redirecting to homepage
        }
    }, []);

    function login() {
        const user = { email, password };
        dispatch(userLogin(user));
    }

    return (
        <div>
                <div className="row justify-content-center">
                    <div className="login col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                        {loading && (<Loading />)}
                        {err && (<Alert err='Invalid Credentials' />)}
                        <h2>Login</h2>
                        <div>
                            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <button onClick={login} className="btn mt-4 mb-3">LOGIN</button>
                            <br />
                            <h4>or</h4>
                            <p>New User <a href="/registration"> Click Here To Register</a></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}