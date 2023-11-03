import React from 'react';
import './Revirwitam.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItam = ({product,hendelRemoveItam}) => {
    const {price, name,img,quantity,id} = product
    return (
        <div className='order-review'>
           <img src={img} alt="" />
           <div className='order-details'>
            <div>
                <p> <small>{name}</small></p>
                <p>price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <button onClick={() => hendelRemoveItam (id)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
           </div>
        </div>
    );
};

export default ReviewItam;<h4>review itam</h4>