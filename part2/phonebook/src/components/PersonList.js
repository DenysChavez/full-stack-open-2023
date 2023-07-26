import Person from "./Person";

const PersonList = ({filteredPeople, deletePerson}) => {

    return (
        <div>
            {filteredPeople.map((person) => (
                <Person key={person.id} person={person} deletePerson={ deletePerson} />
            ))}
        </div>
    )
}

export default PersonList;