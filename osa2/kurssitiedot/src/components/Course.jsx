const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
  


const Content = ({ content }) => {
  // console.log(content)
  return (
    <div>
      {content.map(part =>
      <Part key={part.id} part={part} />
      )}
    </div>
    

  )
}

const Header = ({ header }) => <div><h2>{header}</h2></div>


const Course = ({ courses }) => {
  
    
  console.log(courses)
  return (
    <div>
      {courses.map(course => 
      <div key={course.id}>    
        <Header header={course.name} />
        <Content key={course.parts.id} content={course.parts} />
        <p><b>total of {course.parts.reduce( (sum, part) => sum+part.exercises, 0)} exercises</b></p>
      </div>    
      )}
                    
    </div>
  )

  //
        
}

export default Course