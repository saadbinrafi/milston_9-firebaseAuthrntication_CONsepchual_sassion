import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const {registerUser} = useContext(AuthContext)
    

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const ConfirmPassword = e.target.  ConfirmPassword.value;
        
        console.log(name,photo,email,password,ConfirmPassword);
        registerUser(email,password)
        
        
        
    }
 


    return (
        <div className='w-[50%] mx-auto min-w-[600px] border-2 border-purple-300 p-5'>
            <form onSubmit={handleRegister} className='grid grid-cols-2 gap-5'>
                <div>
                    <p>Name</p>
                    <input name='name' type="nam" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Photo</p>
                    <input name='photo' type="photo" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Email</p>
                    <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <p>Password</p>
                    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>ConfirmPassword</p>
                    <input name='ConfirmPassword' type="confirm password" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button name='register' className='btn btn-primary mt-6 '>Register</button>
                
            </form>
        </div>
    );
}

export default Register;