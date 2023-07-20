const Filter = ({searchName, setSearchName}) => {

    return (
        <div>
            Filter shown with <input value={ searchName} onChange={(event) => setSearchName(event.target.value)}/>
        </div>
    )
}

export default Filter 