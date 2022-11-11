import Head from "next/head";
import React from "react";
import {
	FaFacebookF,
	FaGithub,
	FaGoogle,
    FaRegEnvelope
} from "react-icons/fa";
import {MdLockOutline} from 'react-icons/md'
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function about(){
	const [darkMode, setDarkMode] = useState(true);

    return(
        <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col items-center min-h-screen py-2 bg-white dark:bg-gray-900">
            <Head>
                <title>Breaking Bakes - Log In</title>

            </Head>
            
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <nav className="space-x-10 mb-12 flex justify-between dark:text-green-300 text-slate-600">
                    <a href="/"><h1 className="font-burtons text-8xl">Breaking  <span className="text-teal-600 font-medium dark:text-teal-400">Bakes</span></h1></a>
                    <ul className=" items-center hidden md:flex">
                    <li>
                        <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className=" cursor-pointer text-2xl "/>
                    </li>

                    </ul>
            </nav>
                <div className="bg-white roundes-2xl shadow-2xl flex w-2/3 max-w-4xl dark:bg-gray-800">
                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
     
                        </div>
                        
                        <div className="py-10">
                            <h2 className="text-3xl font-bold dark:text-teal-500 text-green-500 mb-2">
                            Login as Admin</h2>
                            <div className="border-2 w-10 border-green-400 dark:border-teal-400 inline-block mb-2"></div>
                            <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-blue-500">
                                    <FaFacebookF className="text-sm dark:text-gray-100"/>
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-slate-800">
                                    <FaGithub className="text-sm dark:text-gray-100"/>
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-red-600">
                                    <FaGoogle className="text-sm dark:text-gray-100"/>
                                </a>
                            </div>
                            <p className="text-gray-400 my-3 dark:text-gray-100">or use your email account</p>
                            <div className="flex flex-col items-center ">
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 mr-2"/>
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center ">
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><MdLockOutline className="text-gray-400 mr-2"/>
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                                </div>
                                <div className="flex justify-between w-64 mb-5">
                                    <label className="flex items-center text-xs dark:text-gray-100"><input type="checkbox" name="remember" className="mr-1 " />
                                    Remember me
                                    </label>
                                    <a href="#" className="text-xs dark:text-gray-100">Forgot password</a>
                                </div>
                                <a href="/admin" className="border-2 border-green-600 text-green-600 rounded-full px-12 py-2 inline-block font-semibold dark:hover:bg-teal-500 
                                dark:hover:text-white hover:bg-green-500 
                                hover:text-white  dark:border-teal-500 dark:text-teal-500 ">Sign In</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 bg-teal-600 font-medium dark:bg-teal-400  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2 dark:text-gray-600">Hello, Baker!</h2>
                        <div className="border-2 w-10 border-white inline-block mb-2 dark:border-gray-600"></div>
                        

                        <p className="mb-2 dark:text-gray-600">Necesitamos tu informacion para saber si eres el admin. 😎</p>
                    </div>

                </div>

            </main>
        </div>
        </div>
        
    );
}