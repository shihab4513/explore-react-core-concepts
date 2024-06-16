/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>

      <h1>Vite + React</h1>

      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>

      <p className="read-the-docs">
        My name is Shihab Uddin. How are you?
      </p>
    </>
  )
}

function Device(props) {
  // console.log(props)
  return (
    <h2>This Device : {props.name} Price : {props.price}</h2>
  )
}

function Person() {
  const age = 25, money = 20;
  const person = {
    name: 'Shihab Uddin',
    age: 24
  }
  return <h3>I am {person.name}. And my age is {person.age}</h3>;
}

function Student(props) {
  console.log(props)
  return (<div className='student'>
    <h3>This is a Student</h3>
    <p>Name: </p>
    <p>Age: </p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
