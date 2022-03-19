import React from 'react'

function Card(props) {
  return (
    <div className={`${props.className} w-full bg-white dark:bg-slate-800 dark:border-2 dark:border-slate-700 shadow-lg rounded-lg text-left p-6 pb-8`}>
        <div className="mb-2 flex justify-between">
            <p className="font-semibold text-xl leading-8 dark:text-gray-200">{props.title}</p>
        </div>
        {props.children}
    </div>
  )
}

export default Card