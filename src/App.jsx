
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'



function App() {

  // const [contactItems, setContactItems] = useState(() => {
  //   const savedContacts = localStorage.getItem("contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : contacts;
  // }

  // );





  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App
