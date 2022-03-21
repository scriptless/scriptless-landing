import React from 'react'
import { NavLink } from 'react-router-dom'

function RoundButton(props) {
  return (
    <NavLink to={props.to} 
        className="hover:animate-pulse inline-flex items-center shadow-sm px-4 py-1 border dark:border-2 border-gray-300 dark:border-slate-600 text-sm leading-6 font-medium rounded-full text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-600">
        {props.children}
    </NavLink>
  )
}

export default RoundButton