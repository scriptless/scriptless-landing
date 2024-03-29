import React from 'react'

function Header(props) {
  return (
    <div className="w-full flex flex-col justify-between lg:flex-row-reverse lg:items-center">
        <div className="text-center">
            <img 
            className="hover:animate-spin flex-shrink-0 flex-grow-0 shadow-lg inline-block h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden bg-gray-50 border-4 border-gray-200 dark:border-slate-700" 
            src={props.darkMode ? "./logo-white.png" : "./logo-dark.png"} alt=""/>
        </div>
        <div className="py-10 text-left">
            <p className="text-black dark:text-gray-200 text-3xl font-bold">Hello I'm</p>
            <p className="text-blue-600 dark:text-blue-400 text-3xl font-bold">Scriptless</p>
            <div className="max-w-3xl">
                <p className="text-gray-500 dark:text-gray-100 my-2 leading-2 font-thin">
                    My name is Alex and I am a self taught full-stack developer based in <a class="underline hover:no-underline" href="">Berlin</a>/<a class="underline hover:no-underline" href="">Düsseldorf</a>, Germany. On this website you can find my personal projects and more information about me.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header