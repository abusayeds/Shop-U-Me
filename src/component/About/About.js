
import React from 'react';






const About = () => {
   
    return (
        
    <div className=' pt-10  ' >
       <div className='bg-slate-200 w-80 m-auto p-4'>
       <p className='font-bold'>Login from </p>
        <form className=' mt-4' >
            <input type="email" name="email" id="" className='border p-1 rounded w-11/12' placeholder='email'/>
            <br />
            <input type="password" className='border mt-2 p-1 rounded w-11/12' name="" placeholder='password' id="" />
            <br />
            <input type="password" className='border mt-2 p-1 rounded w-11/12' name="" placeholder='re-type password' id="" />

        </form>
        
       </div>
    </div>
   
    );
};

export default About;
