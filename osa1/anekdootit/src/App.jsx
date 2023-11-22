import { useState } from 'react'

const Button = (props) => {
  // console.log(props)
  return(
  
  <button onClick={props.handleClick}>
        {props.text}
  </button>
  
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const getRandomInt = (max) => Math.floor(Math.random() * max)
  

  const pointArray = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [points, setPoints] = useState(pointArray)
  // console.log('Points: ', points)


 

  const randomize = () => setSelected(getRandomInt(anecdotes.length)) 
  // console.log('Selected:', selected)
  // console.log('Points of selected', points[selected])
   
  const increaseVote = () => {
    const copyPoints = [...points]
    // console.log('copyPoints: ', copyPoints)
    copyPoints[selected] += 1

    return setPoints(copyPoints)
  }

  const getBiggestVote = () => {
    let biggest = 0
    for (let i in points) {
      if (points[i] > points[biggest])
        biggest = i
    }
    
    return biggest
  }

  let mostVotesIndex = getBiggestVote()

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>       
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
      </div>
    
      <div>
      
        <Button
          handleClick={increaseVote}
          text = 'vote'
        />
        <Button
          handleClick={randomize}
          text = 'next anecdote'
        />

      </div>

      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotesIndex]}</p>
        <p>has {points[mostVotesIndex]} votes</p>
      </div>
    </div>
  )
}

export default App
