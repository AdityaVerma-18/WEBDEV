import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {

  // ============================
  // useState Hooks
  // ============================

  // Stores password length (default = 8)
  const [length, setLength] = useState(8)

  // Stores whether numbers are allowed
  const [numberAllowed, setNumberAllowed] = useState(false);

  // Stores whether special characters are allowed
  const [charAllowed, setCharAllowed] = useState(false)

  // Stores the generated password
  const [password, setPassword] = useState("")


  // ============================
  // useRef Hook
  // ============================

  // Creates a reference to the input field.
  // It allows us to directly access the DOM element
  // without re-rendering the component.
  const passwordRef = useRef(null)



  // ============================
  // Password Generator Function
  // ============================

  // useCallback remembers the function.
  // React recreates this function only when
  // length, numberAllowed or charAllowed changes.
  const passwordGenerator = useCallback(() => {

    // Stores final password
    let pass = ""

    // Default characters (A-Z and a-z)
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // Add numbers if checkbox is checked
    if (numberAllowed)
      str += "0123456789"

    // Add special characters if checkbox is checked
    if (charAllowed)
      str += "!@#$%^&*-_+=[]{}~`"


    // Generate password of desired length
    for (let i = 1; i <= length; i++) {

      // Generate random index
      let char = Math.floor(Math.random() * str.length + 1)

      // Pick character from string
      pass += str.charAt(char)
    }

    // Store generated password in state
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])



  // ============================
  // Copy Password Function
  // ============================
  console.log(passwordRef.current)
  const copyPasswordToClipboard = useCallback(() => {
    
    // Selects the input text
    passwordRef.current?.select();

    // Selects the complete password
    passwordRef.current?.setSelectionRange(0, 999);

    // Copies password to clipboard
    window.navigator.clipboard.writeText(password)

  }, [password])



  // ============================
  // useEffect
  // ============================

  // Whenever any dependency changes,
  // automatically generate a new password.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (

    // ============================
    // Main Container
    // ============================

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      {/* Heading */}
      <h1 className='text-white text-center my-3'>
        Password generator
      </h1>


      {/* ============================
          Password Input + Copy Button
      ============================= */}

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        {/* Displays generated password */}
        <input
          type="text"
          value={password}      // Controlled Input
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly              // User cannot edit
          ref={passwordRef}     // Connected to useRef
        />

        {/* Copies password */}
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>

      </div>



      {/* ============================
          Controls
      ============================= */}

      <div className='flex text-sm gap-x-2'>


        {/* -------- Password Length Slider -------- */}

        <div className='flex items-center gap-x-1'>

          <input
            type="range"

            // Minimum length
            min={6}

            // Maximum length
            max={100}

            // Current slider value
            value={length}

            className='cursor-pointer'

            // Runs whenever slider moves
            onChange={(e) => {

              // e.target.value contains current slider value
              setLength(e.target.value)
            }}
          />

          {/* Shows current length */}
          <label>Length: {length}</label>

        </div>



        {/* -------- Numbers Checkbox -------- */}

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"

            // Initial checkbox value
            defaultChecked={numberAllowed}

            id="numberInput"

            // Toggle true/false
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />

          <label htmlFor="numberInput">
            Numbers
          </label>

        </div>



        {/* -------- Special Character Checkbox -------- */}

        <div className="flex items-center gap-x-1">

          <input
            type="checkbox"

            defaultChecked={charAllowed}

            id="characterInput"

            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />

          <label htmlFor="characterInput">
            Characters
          </label>

        </div>

      </div>

    </div>

  )
}

export default App