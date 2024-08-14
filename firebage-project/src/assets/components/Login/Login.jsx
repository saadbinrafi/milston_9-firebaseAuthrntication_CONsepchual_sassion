import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    console.log(user)

    const handleLogin = (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        loginUser(email, password)
    }




    return (
        <div>
            <div className='w-[50%] mx-auto min-w-[600px] border-2 border-purple-300 p-5'>
                <form onSubmit={handleLogin} className='grid grid-cols-2 gap-5'>

                    <div>
                        <p>Email</p>
                        <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full " />
                    </div>


                    <button name='register' className='btn btn-primary mt-6 font-bold text-[20px] '>Login </button>



                </form>
            </div>
        </div>
    );
};

export default Login;