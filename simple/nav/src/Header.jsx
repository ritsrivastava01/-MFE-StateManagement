import React from 'react'

function Header({count, onClear }) {
  return (
    <header  className='bg-blue-700 text-white font-bold text-3xl p-5 flex'>
    <div className='flex-grow'>Simple MFE communication</div>
    <div>{count}</div>
    <button onClick={onClear}
    className=' px-4  bg-blue-800 text-white font-bold text-xl rounded'>
        Clear cart
    </button>
    </header>
  )
}

export default Header