import React from 'react'
import AnimalCard from './components/AnimalCard'
import './style.css'

/*

💪 Exercise: Create a reusable component with props

Here's an app that provides information about different animals. However, the code is starting to look repetitive.

🎯 Your task:
- Reduce the repetition in the code below by creating a reusable component called AnimalCard.
- The AnimalCard component should accept the following props:
  - symbol
  - name
  - classification

*/

export default function App() {
  return (
    <main>
      <h1>Welcome to AnimalDB!</h1>
      <AnimalCard symbol="🐶" name="Dog" classification="Mammal" />
      <AnimalCard symbol="🐸" name="Frog" classification="Amphibian" />
      <AnimalCard symbol="🦖" name="Tyrannosaurus Rex" classification="Reptile" />
    </main>
  )
}
