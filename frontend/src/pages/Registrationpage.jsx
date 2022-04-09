import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {userRegister} from "../steps/step3";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Alert from "../components/Alert";
export default function Registrationpage() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const registrationstate = useSelector(state=>state.userRegisterReducer)
    const {loading, success, err} = registrationstate
    const dispatch = useDispatch()

    function register(){
        if(password!==cpassword)
        {
            alert("password not matched")
        }
        else{
            const user={
                fname, 
                lname,
                email,
                password
            };
            console.log(user);
            dispatch(userRegister(user));
        }
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className=" register col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    {loading && (<Loading />)}
                    {success && (<Success  success='User Registered Successfully' />)}
                    {err && (<Alert err='Email already existing' />)}
                    <h2>REGISTRATION</h2>
                    <div>
                        <input required type="text" placeholder="firstname" className="form-control" value={fname} onChange={(e)=>{setfname(e.target.value)}} />
                        <input required type="text" placeholder="lastname" className="form-control" value={lname} onChange={(e)=>{setlname(e.target.value)}} />
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                        <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <input required type="text" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                        <button onClick={register} className="btn mt-4 mb-3">REGISTER</button>
                        <br/>
                        <h4>or</h4>
                        <p>Existing User <a href="/login">Click Here To Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}