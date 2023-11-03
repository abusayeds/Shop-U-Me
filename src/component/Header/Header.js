// import React, { useState } from 'react';
// import './Header.css'
// import  img from'../../Image/ema-john-pik.png'
// import { Link } from 'react-router-dom';

// import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
// import app from '../../firebase/Firebasw.init';

// const auth = getAuth(app);

// const Header = () => {

  
//   const provider = new GoogleAuthProvider()
//   const [user , setUser] = useState({})
//   const hendelgoogleprovider = () => {
//     signInWithPopup ( auth , provider)
//     .then (result => {
//       const user = result.user

//       setUser(user)
//       console.log(user)
//     })
//     .catch(error =>{
//       console.error('error' , error)
//     })
    
   
  
//   }
//   const hendelsingOut = () =>{
//      signOut(auth)
//      .then(() => {
//       setUser({})
//      })
//      .catch(() => {
//       setUser({})
//      })
//   }
//     return (
//        <nav className='nav'>
//          <div className='header'>
//           <img src={img} alt="" />
//           <div className='link'>
//            <Link to='/'> Shop</Link>
//            <Link to='/order'>Order</Link>
//            <Link to='/inventory'>Inventory</Link>
      
//             <div>
//             {
//               user.photoURL ?<Link onClick={hendelsingOut} to='/about'> sing out</Link>
//               : <Link  onClick={hendelgoogleprovider} to='/about'> login</Link>
              
//             }
//              {
//               <img src={user.photoURL} alt="" srcset="" />
//              }
//             </div>
           

//           </div>
//         </div>
//        </nav>
//     );
// };

// export default Header;






import {  faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Image/shop-removebg-preview.png'

const Header = () => {
  const [open , setOpen ] =useState(false)
  return (
    <div>
      <nav className='bg-slate-200   '>
         <div className='md:flex items-center '>
            
            <div className='flex justify-between p-2 ' >
           
              
               <div className='w-20'>
                  <img src={img} alt=""  />
               </div>
         
              <p onClick={() => setOpen(!open)} className='text-2xl md:hidden mt-6'>
               
               
                {
                  open ?  <FontAwesomeIcon icon={faX}></FontAwesomeIcon> 
                  : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                }
                
                </p>
              
            </div>

           <div className='md:flex hidden ml-10 '>
            
                  {/* <div className='group'>
                    <p><Link to="" className='py-7 px-4 text-black  '> category <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></Link></p>
                    <div className='absolute top-30 bg-slate-300 p-5 rounded hidden group-hover:block hover:block'>
                    <p><Link className='text-black'> vasutal</Link></p>
                    <p><Link  className='text-black'> porota</Link></p>
                    <p><Link  className='text-black'> moklai</Link></p>
                    <p><Link  className='text-black'> vat</Link></p>
                    </div>
                  </div> */}
                  <div>
                  <Link  to="/" className='py-7 px-4 text-black'>Shop </Link>
                  <Link to="/order" className='py-7 px-4 text-black'>Order</Link>
                  <Link to="/inventory" className='py-7 px-4 text-black '>Inventory</Link>
                  </div>
            

            
           </div>

           {/*------- mobail devise -----*/}

           <div className={`md:hidden bg-slate-200 w-full h-full relative bottom-0 items-center  duration-500  ${open ? "left-0" : "hidden"} } `}>
                  <div className='px-6 py-4 flex gap-3'>
                              
                
                  {/* <div className='group'>
                  <div className=' '>
                  <Link to="" className=' text-black'>
                  
                   Category</Link>
                  </div>
                  <div className='absolute top-10 left-4 p-5 rounded  bg-slate-200 hidden group-hover:block hover:block '>
                  <Link  to="" className=' text-black'> Category</Link>
                  <br />
                  <Link  to="" className=' text-black'> Category</Link>
                  <br />
                  <Link  to="" className=' text-black'> Category</Link>
                  </div>
                  
                  </div> */}

                  <Link  to="/" className=' text-black'> Shop</Link>
                  <Link to="/order" className=' text-black'>Order</Link>
                  <Link to="/inventory" className=' text-black '>Inventory</Link>
                    </div>
               
                

           </div>
          {/*------- mobail devise -----*/}
            
         </div>

     </nav>
    </div>
  );
};

export default Header;