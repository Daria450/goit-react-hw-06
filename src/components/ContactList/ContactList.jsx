import React from 'react'
import Contact from '../Contact/Contact'
import s from './ContactList.module.css'
import { useSelector } from 'react-redux';

const ContactList = () => {

    const items = useSelector((state) => state.contacts.contacts.items);
    const filter = useSelector((state) => state.filter.filter.name);
    const visibleContacts = items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <ul>{visibleContacts.map(item =>
                <li key={item.id} className={s.li}><Contact name={item.name} number={item.number} id={item.id} /></li>)}
            </ul>
        </>
    )
}

export default ContactList