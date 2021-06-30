import logo from './logo.svg';
import './App.css';
import { Container, Jumbotron } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'

import './App.css'

/** 
 * Gets existing journal entries from local storage and stores in const
 * that is used for state var entries initialization
 * If no entries, populates with empty array
 */  
const ALL_ENTRIES = localStorage.getItem('entries')
  ? JSON.parse(localStorage.getItem('entries'))
  : []


function App() {
  const [entries, setEntries] = useState(ALL_ENTRIES)
  const [content, setContent] = useState('')
  
  // Sets state variable content equal to input text contents
  /**
   * @param {event} event - fires onChange of text area input
   * Sets state variable content equal to input text contents
   */
  const handleContent = event => {
    setContent(event.target.value)
  }
  
  /**
   * @param {event} event - fires on form submission
   * Doesn't allow for empty journal entries to be submitted
   * Dynamically assigns date on journal submit
   * Creates an object with date and text content
   * Pushes new entry object to current state variable of entries
   */
  const handleSubmitForm = event => {
    event.preventDefault()
    //check whether the content is not empty
    console.log('on submit content ', content)
    if (content !== '') {
      // get date of journal entry submission
      let today = new Date()
      let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let dayName = dayOfWeek[today.getDay()]
      let monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
      let month = monthOfYear[today.getMonth()]
      let dayOfMonth = today.getDate()
      let journalDate = dayName + ', ' + month + ' ' + dayOfMonth
      console.log('journal DAte is ', journalDate) 

      // single entry object
      const entry = { journalDate, content }
      // do not override previous values in the array
      // use spread operator to access previous values
      setEntries([entry, ...entries])
  
      // clean input fields
      setContent('')
    } else {
      alert('Invalid entry, journal entry must have content')
    }
  }

  // Handle when user clicks delete button in journalEntry
  const handleDeleteEntry = (item) => {
    // make a separate copy of the array
    let array = [...entries];
    let index = array.indexOf(item)
    // if the item exists, delete it and setEntries to 
    // setEntries minus item
    if (index !== -1) {
      array.splice(index, 1);
      setEntries(array);
    }
  }

  // When entries value changes, set local storage equal to new entries
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [entries])

  return (
    <Container id="journalApp">
      <Jumbotron fluid>
        <h3 className='display-6 text-center'>
          React Journal App
          <img src={logo} style={{ width: 50, height: 50 }} alt='react-logo' />
        </h3>
        <div className='text-center'>
        </div>
        <Form
          content={content}
          handleContent={handleContent}
          handleSubmitForm={handleSubmitForm}
        />
        <List 
          entries={entries}
          handleDeleteEntry={handleDeleteEntry}
        />
      </Jumbotron>
    </Container>
  )
}

export default App