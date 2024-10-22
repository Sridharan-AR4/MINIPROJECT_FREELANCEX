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
                        <a className='sample1' href='#Features'>Features</a>
                        <a className='sample1' href='#HowItWorks'>How it works</a>
                        <a className='sample1'href='#AboutUs'>About us</a>
                        <a className='sample1' href='#Contact'>Contact</a>
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