
const Filter = (props) => {

    // console.log(props)

    return (
        <form >
            <div>
                filter shown with: 
                <input
                    value={props.filter}
                    onChange={event => props.setFilter(event.target.value)} 
                />          
            </div>
        </form>
        
    )

}


export default Filter