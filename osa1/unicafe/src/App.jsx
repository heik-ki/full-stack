import { useState } from 'react'


const StatisticLine = (props) => {
  
  return(   
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <th style={{width:'15%'}}></th>
          </tr>

          <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.text2}</td>
          </tr>
        </tbody>
      </table>
      
                
  ) 
}


const Button = (props) => {
  console.log(props)
  return(
  
  <button onClick={props.handleClick}>
        {props.text}
  </button>
  
  )
}


const Statistics = (props) => {
  //console.log(props)
  const all = props.good + props.neutral + props.bad
  //console.log(all) 
  const average = (props.good - props.bad)/(props.good + props.neutral + props.bad)
  //console.log(average)
  const positive = 100*props.good/(props.good + props.neutral + props.bad)
  //console.log(positive)

  if (props.good + props.neutral + props.bad == 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value = {all} />
      <StatisticLine text="average" value = {average} />
      <StatisticLine text="positive" value = {positive} text2 = " %"/>

      
      
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  
  return (
    <div>
      <h1>give feedback</h1>
      
      <Button 
          handleClick={increaseGood}
          text='good' 
      />
      <Button 
          handleClick={increaseNeutral}
          text='neutral' 
      />
      <Button 
          handleClick={increaseBad}
          text='bad' 
      />
      
      <h1>statistics</h1>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
       
      
    </div>
  )
}

export default App
