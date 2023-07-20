import Person from "./Person";

const PersonList = ({filteredPeople}) => {

    return (
        <div>
            {filteredPeople.map((person) => (
                <Person key={person.id} person={person} />
            ))}
        </div>
    )
}

export default PersonList;