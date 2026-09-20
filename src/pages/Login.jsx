import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { baseurl } from "../services/BaseUrl";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { authUser, setAuthUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const formdata = new URLSearchParams();
            formdata.append('username', username);
            formdata.append('password', password)

            const res = await fetch(`${baseurl}/login`,
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formdata

                })
            const data = await res.json()
            // console.log(data)

            const accessToken = data?.access_token
            localStorage.setItem("access_token", accessToken)

            const userRes = await fetch(`${baseurl}/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            const userData = await userRes.json()



            if (userData.id) {
                setAuthUser(userData)
                navigate("/")
            }
            else {
                toast.error("username or password is incorrect")
                return
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 w-96">
                        Please Enter Your Credential
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="input" placeholder="Username" />
                            <label className="label">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="Password" />
                            <div><Link to={"/signup"} className="link link-hover">Don't Have an account?</Link></div>
                            <button onClick={handleLogin} className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;