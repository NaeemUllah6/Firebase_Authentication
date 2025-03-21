import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../Firebase/firebaseConfig";
import { auth } from "../Firebase/firebaseConfig";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email user:", typeof formData.email, formData.email);
    console.log("Password:", typeof formData.password, formData.password);

    const { email, password } = formData;

  //   try {
  //     const userCredential = await logIn(auth, email, password);
  //     console.log('email name',email);
  //     Cookies.set("token", userCredential.user.accessToken, { expires: 1, secure: true, sameSite: "strict" });
  //     alert("Signin successful");
  //     navigate("/");
  //     setFormData({ email: "", password: "" });
  //     setError("");
      
  //   } catch (error) {
  //     console.error("Login failed here:", error);
  //     setError('Invalid credentials. Try again')
  //     setLoading(false)
  //   }
  const token  = 'token'
  if(formData.email === 'test@gmail.com' && formData.password === 'test')
  {
    setLoading(true)
    Cookies.set('token' , token, {expires:1, secure:true, sameSites:'strict'} )
    navigate('/')
  }
else{
  setLoading(false)
  setError('Invalid Credentials! Try again')
}
};

  return (
    
    <section className="h-full bg-neutral-200 dark:bg-white">
       {loading && <div className={`h-screen bg-white- flex justify-center items-center`}>
                        <div className="border-4 h-12 w-12 border-red-600 border-dashed rounded-full justify-center items-center animate-[spin_5s_linear_infinite]"></div>
                      </div>}
      <div className="container h-screen p-5 md:p-10 flex justify-center items-center">
        <div className="g-6 flex h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="flex items-center justify-center rounded-lg w-full bg-white shadow-lg dark:bg-neutral-900">
              <div className="g-0 lg:flex lg:flex-wrap w-full">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img className="mx-auto w-48" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                      <h4 className=" mt-1 pb-1 text-xl mb-2 font-semibold">We are The Lotus Team</h4>
                      {error && <p className="text-red-700 mb-10">{error}</p>}
                     
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <label>Enter User Name</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className="mb-4 border h-10 rounded-lg focus:outline-0 ps-3 w-full"
                        onChange={handleChange}
                        placeholder="Type email"
                      />
                      <label>Enter Password</label>
                      <input
                        type="password"
                        value={formData.password}
                        name="password"
                        className="mb-4 border h-10 rounded-lg focus:outline-0 ps-3 mt-3 w-full"
                        placeholder="Type Password"
                        onChange={handleChange}
                      />

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                          type="submit"
                          style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>


                        <a href="#!">Forgot password?</a>
                      </div>
                    </form>

                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <Link to='/signup'
                        // onClick={()=>navigate('/signup')}
                        // style={{
                        //   background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        // }}
                        className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-pink-300 bg-red-700 hover:text-white"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg"
                  style={{
                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">We are more than just a company</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
