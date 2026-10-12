import { useState } from 'react'
import './App.css'

/*
========================================
            REACT useState
========================================

useState is a Hook used to create and
manage state in functional components.

Syntax:

const [state, setState] = useState(initialValue)

Example:

const [counter, setcounter] = useState(15)

counter   -> current state value
setcounter -> function to update state

Updating state causes React to re-render
the component with the new value.

========================================
          COUNTER APPLICATION
========================================

States Used:

1. counter
   - Stores the current counter value.
   - Initial value = 15

2. msg
   - Stores warning messages.
   - Initial value = ""

========================================
            ADD FUNCTION
========================================

const add = () => {}

Purpose:
- Increase counter by 1.

Logic:
- If a warning message is being shown
  and counter becomes positive again,
  clear the message.
- Increment counter using setcounter().

========================================
           DECREASE FUNCTION
========================================

const dec = () => {}

Purpose:
- Decrease counter by 1.

Logic:
- If counter is already 0 or below,
  show warning message.
- Otherwise decrease counter by 1.

========================================
       CONDITIONAL UI MESSAGE
========================================

<h3>{msg}</h3>

React displays the value stored in msg.

msg = ""
=> Nothing visible

msg = "counter is negative"
=> Message appears on screen

========================================
       STATE UPDATE NOTE
========================================

Wrong for multiple updates:

setcounter(counter + 1)
setcounter(counter + 1)

Both use the same counter value.
fibre concept - that react updates the dom in batch for efficiency

Correct:

setcounter(prev => prev + 1)
setcounter(prev => prev + 1)

Each update uses the latest state value.
it is like async js like promise catch actually propagatiion happens
========================================
*/

function App() {

  let [counter, setcounter] = useState(15)
  let [msg, setmsg] = useState("")

  const add = () => {

    if (counter <= 0) {
      setmsg("")
    }

    setcounter(counter + 1)
  }

  const dec = () => {

    if (counter <= 0) {
      setmsg("counter is negative")
    } else {
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>hi User</h1>

      <h3>counter: {counter}</h3>

      <button onClick={add}>increase</button>
      <br />

      <button onClick={dec}>decrease</button>

      <h3>{msg}</h3>
    </>
  )
}

export default App