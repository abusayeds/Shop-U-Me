import React from 'react';
import './Revirwitam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItam = ({product,hendelRemoveItam}) => {
    const {price, name,img,quantity,id} = product
    return (
        <div className=' grid grid-cols-3 mt-4 rounded border md:w-4/6 m-auto md:p-4  '>
             
              <div className=' flex items-center'>
              <img className='w-28 h-full rounded' src={img} alt="" />
              </div>
          
              <div className='ml-4'>
                <p> <small>{name}</small></p>
                <p>price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
     
            <div className='md:text-end pl-5 '>
               <p className=''>
               <button onClick={() => hendelRemoveItam (id)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
               </p>
            </div>
           
        </div>
    );
};

export default ReviewItam;<h4>review itam</h4>