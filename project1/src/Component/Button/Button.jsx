import React from 'react'

function Button ({title, ...props}) {

  return (
    <button className="w-13 p-2 rounded-2xl text-white text-center gap-3 cursor-pointer" {...props}>
       {title}
    </button>
  )
}

export default Button