import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./serves/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

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

    const persontToFind = persons.some((object) => object.name === newName);

    if (!persontToFind) {
      const personsObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      personService.create(personsObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  // /////

  const deletePerson = id => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== id))
        })
    }
  }


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
