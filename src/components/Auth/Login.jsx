import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  // console.log(handleLogin);

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email,password);

    setemail("");
    setpassword("");
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='rounded-xl border-2 border-emerald-600 p-20'>
            <form 
            onSubmit = {(e) => {
              submitHandler(e)
            }} //called 2 way binding
            className='flex flex-col items-center justify-center'>
                <input 
                value = {email}
                onChange={ (e) => {
                  // console.log(e.target.value);
                  setemail(e.target.value);
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400' type='email' placeholder='Enter your email'/>
                <input
                value={password}
                onChange={ (e) => {
                  setpassword(e.target.value);
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl  rounded-full py-3 px-5 pt-3 mt-3 placeholder:text-gray-400' type='password' placeholder='Enter your password'/>   
                <button className='w-full mt-7 text-white outline-none bg-emerald-600 border-2 border-none text-xl rounded-full py-3 px-5 placeholder:text-white'>Log in</button> 
            </form>        
        </div>        
    </div>
  )
}

export default Login