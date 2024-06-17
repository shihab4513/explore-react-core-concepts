/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'
function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers = [
    { id: 1, name: "Dr Mahfuzur Rahman", age: 58 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Suvro Dev", age: 58 },
    { id: 4, name: "Pritom", age: 28 }
  ];
  return (

    <>

      <h1>Vite + React</h1>
      {/* print all the singers array of object data */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name="Shihab Uddin"></Actor>
      {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}


      {/* <ToDo Task="Learn React" isDone={true}></ToDo>
      <ToDo Task="Explore core concepts" isDone={false}></ToDo>
      <ToDo Task="Try JSX" isDone={true}></ToDo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person> */}
      {/* we can send integer ,boolean etc except string using {} */}
      {/* <Student grade="7" score={99}></Student>
      <Student grade="12" score={85}></Student>
      <Student></Student>
      <Developer></Developer> */}


    </>
  )
}
// Props is read only . you cant change props value
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
// we can set by default value here as well .We have used destructuring to get value
function Student({ grade = 0, score = 0 }) {
  // console.log(props)

  return (<div className='student'>
    <h3>This is a Student</h3>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
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
