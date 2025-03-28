import React, { useState } from 'react'
import Authlayout from '../../components/layouts/Authlayout'
import {useNavigate} from 'react-router-dom'
import Input from '../../components/inputs/input'

import { Eye, EyeOff } from "lucide-react"


const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return;
    }

    if (!password) {
      setError("Please enter a password.")
    }

    setError("");

    // Call the login API here
  }
 
  return (
    // <Authlayout>
    //   <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'></div>
    //   <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
    //   <p className='text-xs text-slate-700 mt-[5px] mb-6'> 
    //     to make use of our system, <br/>
    //     please login with your credentials</p>
    // </Authlayout>
    <div className='bg-white flex flex-row justify-center w-full'>
      <div className='bg-white overflow-hidden w-full max-w-[1512px] h-[982px] relative'>
        <div className='absolute w-full h-[985px] top-[-3px] left-0'>
          <div className='absolute w-[788px] h-[965px] top-0 left-[724px] bg-[#4faeb0]" '/>
          {/* Semi-transparent card background with blur effect */}
          <div className='absolute w-[605px] h-[767px] top-[111px] left-[822px] bg-[#81fcff82] rounded-[40px] border border-solid border-[#8e8e93] '> 
            {/* creat form here */}
        
              <div className='flex flex-1 items-center justify-center px-8'>
                <div className='w-full max-w-md rounded-lg bg-teal-400/30 p-8 backdrop-blur-sm'>
                <h2 className="mb-8 text-5xl font-light text-white">login</h2>
                <form action="">
                <div className="space-y-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                  className="w-full rounded-md border-0 bg-white/90 p-3 text-gray-800"
                  required
                />
              </div>
              
              <div className='relative'> 
              <label htmlFor="password" className="text-white">
                  Password
                </label>
                <div className="relative">
                  <input 
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border-0 bg-white/90 p-3 pr-10 text-gray-800"
                  placeholder="********" 
                  required />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-label="Toggle password visibility"
                  >                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
                </form>
                </div>
              </div>
        
            
          </div>


            {/* Login form container */}
          {/* <form onClick={handleLogin}
            className='flex flex-col w-[542px] h-[869px] items-center justify-center gap-8 absolute top-[86px] left-[853px] rounded-[10px] border-none bg-transparent'>

            <Input   // input component -> it will send all the props to the input component
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label= 'Email'
            placeholder='john@gmail.com'
            type="text" />

            <Input   // input component -> it will send all the props to the input component
            value={email}
            onChange={({target}) => setPassword(target.value)}
            label= 'Password'
            placeholder='min 8 characters'
            type="password" />

            {error && <p className=''>{error}</p>}

            <button type='submit' className=''>
              login
            </button>
          </form> */}

         
         

          {/*  left side content*/}
          <h2 className="absolute w-[534px] h-[89px] top-[266px] left-[111px] font-['Syne',Helvetica] font-normal text-black text-[64px] tracking-[0] leading-[64px]">
              Welcome back!
            </h2>
            <p className="absolute w-[530px] h-[148px] top-[327px] left-[115px] font-['Noto_Sans_Symbols',Helvetica] font-normal text-black text-4xl tracking-[0] leading-9">
              to make use of our system, please login with your credentials.
            </p>

            {/* Hospital illustration */}
            <img
              className="absolute w-[983px] h-[605px] top-[380px] left-0 object-cover"
              alt="Hospital illustration"
              src="/image-12.png"
            />
          {/* Logo */}
          <div className='absolute w-[282px] h-[226px] top-[13px] left-52'>
            <div className='relative h-[212px] bg-[url(/image-13.png)] bg-cover bg-[50%_50%]'>
              <div className='absolute w-[282px] h-[226px] top-0 left-0 bg-[#000000] opacity-[0.5]'></div> {/* Logo */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login

