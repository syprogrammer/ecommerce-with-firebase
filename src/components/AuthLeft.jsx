import React from 'react'

const AuthLeft = ({heading,subheading}) => {
  return (
    <div className="rounded-t-md lg:rounded-t-none  shadow-md w-full p-5 h-full  flex flex-col justify-between bg-[#2874f0]">
        <div className="flex flex-col gap-4 text-white">
            <h1 className='font-semibold text-2xl'>{heading}</h1>
            <h3 className='text-sm'>{subheading}</h3>
        </div>
        <div className="w-full mx-auto">
            <img src="/loginimage.png" className='w-fit mx-auto'/>
        </div>
    </div>
  )
}

export default AuthLeft