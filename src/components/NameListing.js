import React from 'react'
import Person from './Person'

function NameListing() {
    // const names = ['Prudhvi', 'sai', 'chengalpattu']
    // const namesList = names.map(name =><h1>{name}</h1>)

    const person =[
        {
            name:'prudhvi',
            age: 24,
            skill: 'Angular'
        },
        {
            name:'Govardhan',
            age:23,
            skill:'mulesoft'
        },
        {
            name:'sahit',
            age:23,
            skill:'support'
        }
    ]
  return (
    <div>
        <Person persons={person}></Person>
    </div>
  )
}

export default NameListing
