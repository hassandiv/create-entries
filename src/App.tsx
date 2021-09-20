import React, { useState } from 'react'
import './App.css'
import List from './components/List'
import AddToList from './components/AddToList'

//step 1
// type myEntryState = { //this type or interface goes into the state 
//   definedEntry: { //array/object of declared/defined types for the array name definedEntryArray
//     name: string
//     age: number
//     imgUrl: string
//     note?: string
//   }[]
// }

//OR just the below

export type myEntryState = { //this type or interface goes into the state 
  definedEntry: { //array/object of declared/defined types
    name: string
    age: number
    imgUrl: string
    note?: string
  }[]
}

const App = () => {

  const [entry, setEntry] = useState<myEntryState['definedEntry']>([
    {
      name: 'Hassan Hafez',
      age: 35,
      imgUrl: 'https://www.springboard.com/library/static/b3e84a84e1cc5ad222ac62dac3855f6d/c1b63/08-06-_-banner.png',
      note: 'I am a software engineer ;)'
    },
    {
      name: 'Hassan Hafez',
      age: 35,
      imgUrl: 'https://www.springboard.com/library/static/b3e84a84e1cc5ad222ac62dac3855f6d/c1b63/08-06-_-banner.png',
      note: 'I am a software engineer ;)'
    }
  ]) //entry array contains the array/object "entryArry" of declared types, entry is my usual array of data to map through.

  return (
    <div className="App">
      <h1>
        Add Entries
      </h1>
      <List
        definedEntry={entry}
      />
      <AddToList
        entryProps={entry}
        setEntryProps={setEntry}
      />
    </div>
  )
}

export default App