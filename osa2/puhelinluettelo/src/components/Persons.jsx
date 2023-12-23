
const Persons = (props) => {
    
    return (
          
        <div>
            {props.persons.filter(f => f.name.toLowerCase().includes(props.filter.toLowerCase()) || props.filter === '').map(f => <div key={f.name}>
              {f.name} {f.number}
            </div>)}
        </div>
            
    )
    
}

export default Persons