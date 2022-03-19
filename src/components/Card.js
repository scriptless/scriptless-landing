import React from 'react'

function Card(props) {
  return (
    <div className={`${props.className} w-full bg-white shadow-lg rounded-lg text-left p-6`}>
        <div className="py-2">
            <p className="font-semibold text-xl leading-8">{props.title}</p>
        </div>
        {props.children}
    </div>
  )
}

export default Card