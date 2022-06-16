import React from 'react'

const Header = ({title}) => {
  return (
    <div className='mt-3 mb-4'>
      <h1 className='font-weight-light display-4 text-center'>{title}</h1>
    </div>
  )
}

export default Header