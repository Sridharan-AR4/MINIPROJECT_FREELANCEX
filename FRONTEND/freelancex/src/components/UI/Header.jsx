// import React, { useContext } from 'react'
// import './Header.css'
// import { Link } from 'react-router-dom'
// import { Usercontext } from '../../Usercontext'
// const Header = () => {
//    const[user,setUser]=useContext(Usercontext);
//   return (
//     <>
//         <header>
//             <div className='header'>
//             <div className='left'>
//                     <div className='lefttitle'>
//                         <Link to='/' style={{textDecoration:'none'}}><h1 className='title'>FREELANCEX</h1></Link>
//                     </div>
//                     { !user?.name ?  <div className='leftlinks'>
//                         <a className='sample1' href='#Features'>Features</a>
//                         <a className='sample1' href='#HowItWorks'>How it works</a>
//                         <a className='sample1'href='#AboutUs'>About us</a>
//                         <a className='sample1' href='#Contact'>Contact</a>
//                     </div> : null}
//                 </div> 
//                 { !user?.name ? <nav className='right'>
//                     <Link to='/Login' ><button className='btn-primary' >Log in</button></Link>
//                     <Link to='/Signup' ><button className='btn-primary' >Sign up</button></Link>
//                 </nav> 
//                 :
//                 <h3 style={{marginRight:'40px'}}>{user.name}</h3>
//                 }
//             </div>
//             <hr></hr>
//         </header>
//     </>
//   )
// }

// export default Header

import React, { useContext } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { Usercontext } from '../../Usercontext';

const Header = () => {
   const [user, setUser] = useContext(Usercontext);
   const navigate = useNavigate();  // Hook to navigate programmatically

   const handleLogout = () => {
      setUser(null);  // Clear the user state
      navigate('/');  // Navigate to the homepage
   };
   const handlesmartc = () => {
        // Clear the user state
      navigate('/smartcontract');  // Navigate to the homepage
   };

   return (
      <>
        <header>
            <div className='header'>
                <div className='left'>
                    <div className='lefttitle'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <h1 className='title'>FREELANCEX</h1>
                        </Link>
                    </div>
                    { !user?.name ? (
                        <div className='leftlinks'>
                            <a className='sample1' href='#Features'>Features</a>
                            <a className='sample1' href='#HowItWorks'>How it works</a>
                            <a className='sample1' href='#AboutUs'>About us</a>
                            <a className='sample1' href='#Contact'>Contact</a>
                        </div>
                    ) : null }
                </div> 

                { !user?.name ? (
                    <nav className='right'>
                        <Link to='/Login'>
                            <button className='btn-primary'>Log in</button>
                        </Link>
                        <Link to='/Signup'>
                            <button className='btn-primary'>Sign up</button>
                        </Link>
                        <button className='btn-primary' onClick={handlesmartc}>SmartContract</button>
                    </nav>
                ) : (
                    <div className='right'>
                        <h3 style={{ marginRight: '10px' }}>{user.name}</h3>
                        <button className='btn-primary' onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
            <hr />
        </header>
      </>
   );
};

export default Header;
