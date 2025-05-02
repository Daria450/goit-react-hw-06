import { useState, useEffect } from 'react';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'


function App() {
  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contactItems, setContactItems] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contacts;
  }

  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactItems));
  }, [contactItems])


  const addContact = (newContact) => {
    setContactItems((prevContacts) => {
      return [...prevContacts, newContact];
    });
  }
  const deleteContact = (contactId) => {
    setContactItems((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  }
  const visibleContacts = contactItems.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactItems={visibleContacts} onDelete={deleteContact} />
    </>
  )
}

export default App
