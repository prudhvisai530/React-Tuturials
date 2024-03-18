import React from 'react'

function Person({persons}) {
  return (
    <div>
      {
        persons.map(person => <h1>I am {person.name}. I am {person.age} years old and I have {person.skill} skill </h1>)
      }
    </div>
  )
}

export default Person
