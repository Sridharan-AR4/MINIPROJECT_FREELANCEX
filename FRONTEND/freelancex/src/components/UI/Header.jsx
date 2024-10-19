import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
        <header>
            <div className='header'>
                <div className='left'>
                    <div className='lefttitle'>
                        <h1 className='title'>FREELANCEX</h1>
                    </div>
                    <div className='leftlinks'>
                        <h3 className='sample1'>Features</h3>
                        <h3 className='sample1'>How it works</h3>
                        <h3 className='sample1'>About us</h3>
                        <h3 className='sample1'>Contact</h3>
                    </div>
                </div>
                <nav className='right'>
                    <button className='btn-primary'>Log in</button>
                    <button className='btn-primary'>Sign up</button>
                </nav>
            </div>
            <hr></hr>
        </header>
    </>
  )
}

export default Header