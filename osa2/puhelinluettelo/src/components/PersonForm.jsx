

const PersonForm = (props) => {
   

  const handleCheck = (value) => {
    // console.log('Value: ', value)
    let duplicates = []
    duplicates = props.persons.filter(person => person.name === props.newName)
    // console.log('Duplicates: ', duplicates)
    return duplicates.length == 0
  }

  const handleNameChange = (event) => {
    //console.log('New name: ', event.target.value)
    props.setNewName(event.target.value)
    //console.log('Name set: ', newName)
  }

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value)
    //console.log('Number set: ', newNumber)
  }


  const addPerson = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    // console.log('New: ', newName)
        
    if (handleCheck(props.newName)) {
      const personObject = {
        name: props.newName,
        number: props.newNumber
      }
      props.setPersons(props.persons.concat(personObject))
    }
    else {
      alert(`${props.newName} is already added to phonebook`)
    }
    props.setNewName('')
    props.setNewNumber('')
    
  }

    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={props.newName}
            onChange={handleNameChange} 
          />          
        </div>
        <div>
          number: <input
            value={props.newNumber}
            onChange={handleNumberChange} 
          />          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

  export default PersonForm