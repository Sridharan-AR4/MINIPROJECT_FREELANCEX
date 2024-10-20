import React from 'react'
import './Features.css'
import crypto from './images/Features/crypto.jpeg'
import decentralizedd from './images/Features/decentralized.jpeg'
import smartcontracts from './images/Features/smartcontracts.jpeg'
import global from './images/Features/global.jpeg'
import fees from './images/Features/fees.jpg'

const Features = () => {
    return (
        <>
            <div className="features">
                <div className='featurestitle'>
                    <h1>Features</h1>
                </div>
                <div className="featuresdiv">
                    <div className="feature">
                        <img src={crypto}></img>
                        <h3>Instant Crypto Payments</h3><p>
                            Say goodbye to delayed payments! Get paid instantly in cryptocurrencies upon successful task completion</p>
                    </div>
                    <div className="feature">
                        <img src={decentralizedd}></img>
                        <h3>Decentralized Dispute Resolution</h3><p>
                            Avoid lengthy disputes with our decentralized resolution system backed by third-party arbitration tools like Kleros.</p>
                    </div>
                    <div className="feature">
                        <img src={fees}></img>
                        <h3>
                            Low Transaction Fees </h3><p>Keep more of what you earn with low fees compared to traditional freelancing platforms.</p>
                    </div>
                    <div className="feature">
                        <img src={global}></img>
                        <h3>Global Collaboration</h3><p>
                            Work with clients and freelancers from anywhere in the world, with payments and contracts supported globally.

                        </p>
                    </div>
                    <div className="feature">
                        <img src={smartcontracts}></img>
                        <h3>Smart Contract Security</h3><p>
                            Our platform leverages blockchain technology to provide secure, automated, and transparent smart contracts for every project.
                        </p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export default Features