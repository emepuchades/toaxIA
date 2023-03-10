import React from 'react'
import './Components.style.css'
import Logo from '../../assets/images/toax-logo.png'
import Github from '../../assets/images/github.png'

function Header() {
    return (
        <nav className="navbar bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    <img src={Logo} className="" width='100px' height='380px' alt="TOXIC Logo" />
                    <h2>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                            TOAX
                            <span className="hackathon-tag bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                                HACKATHON
                            </span>
                        </span>
                    </h2>
                </div>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="https://github.com/midudev/midu-cohere-hackathon" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <div className='flex'><img src={Github} class="flex mr-3" width='20px' height='20px' /> midudev-cohere-2023 </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://toax-hackathon.vercel.app/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                <div className='flex'><img src={Github} class="flex mr-3" width='20px' height='20px' /> puchiidev </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header