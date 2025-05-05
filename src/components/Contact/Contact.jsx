import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


const Contact = ({ name, number, id }) => {


    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    };

    return (
        <>

            <ul className={s.ul}>
                <li >
                    <IoPerson />
                    <p>{name}</p>
                </li>
                <li>
                    <FaPhoneAlt />
                    <p>{number}</p>
                </li>
            </ul>


            <button onClick={() => { handleDelete(id) }}>Delete</button>
        </>
    )
}

export default Contact