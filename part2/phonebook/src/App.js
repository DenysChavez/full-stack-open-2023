import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./serves/persons";
import Notification from "./components/Notification";
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // Get Data from the Server
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  // ////////

  // Add NEW Person
  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...existingPerson, number: newNumber };

        personService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            )
            setNewName("");
            setNewNumber("");
            setMessage(`Updated ${changedPerson.name}`) 
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch((error) => {
            setErrorMessage(`Information of '${existingPerson.name}' has already removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter((n) => n.id !== existingPerson.id));
          });
      }
    } else {
      const personsObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personsObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${personsObject.name}`) 
            setTimeout(() => {
              setMessage(null)
            }, 5000)
      });
    }
  };

  // /////

  // Detele Person
  const deletePerson = (id) => {
    const person = persons.find((n) => n.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((n) => n.id !== id));
      });
    }
  };

  // /////////

  const filteredPeople = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} errorMessage={errorMessage} />
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <br />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <PersonList filteredPeople={filteredPeople} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
