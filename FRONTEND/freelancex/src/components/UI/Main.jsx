import React from 'react'
import './Main.css'
import applogo from'./images/logo.png' 
const Main = () => {
  return (
    <>
        <main>
            <div className='main'>
                <div className='headline'>
                    <h1>Connect, Collaborate, Create: The Freelance Revolution Starts Here! </h1>
                </div>
                <div className="applogo">
                    <img src={applogo}></img>
                </div>
                <button className='btn-primary'>Get Started</button>
                <div className="subheadline">
                    <h3>
                    FreelanceX is a decentralized freelancing platform powered by blockchain and smart contracts, ensuring secure payments and transparency for freelancers and clients alike
                    </h3>
                </div>
            </div>
            <hr></hr>
        </main>
    </>
  )
}

export default Main