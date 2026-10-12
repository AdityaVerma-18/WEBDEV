import React, { useState, useContext } from 'react'
import UserContext from '../context/Usercontext'

function Login() {

    // Local state for input fields
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Access the value provided by UserContextProvider
    // useContext(UserContext) returns the object passed in the Provider's value prop
    const { setUser } = useContext(UserContext)

    // Runs when user clicks Submit
    const handleSubmit = (e) => {
        e.preventDefault()

        // Update the global context state
        // Every component using UserContext will receive the updated user
        setUser({
            username,
            password,
        })

        // Optional: Clear the inputs after submission
        setUsername('')
        setPassword('')
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: '#f4f4f4',
            }}
        >
            <div
                style={{
                    width: '320px',
                    padding: '25px',
                    borderRadius: '10px',
                    background: '#fff',
                    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px',
                    color:'black'
                 }}>
                    Login
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box',
                    }}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box',
                    }}
                />

                <button
                    onClick={handleSubmit}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '5px',
                        background: '#2563eb',
                        color: '#fff',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Login

/*
==========================
        CONTEXT API NOTES
==========================

1. What is Context API?
   - Context API is React's built-in way to share data
     between components without passing props manually
     through every intermediate component.

2. Why use Context API?
   - Avoids Prop Drilling.
   - Makes global data easy to access.

3. Examples of global data
   - Logged-in user
   - Theme (Dark/Light)
   - Language
   - Authentication
   - Shopping Cart

4. Steps to use Context API

   Step 1:
   Create Context

       const UserContext = React.createContext()

   Step 2:
   Create Provider

       <UserContext.Provider value={{user, setUser}}>
            {children}
       </UserContext.Provider>

   The Provider makes data available to every child component.

   Step 3:
   Wrap your App

       <UserContextProvider>
            <App />
       </UserContextProvider>

   Now every component inside App can access the context.

   Step 4:
   Consume the Context

       const { user, setUser } = useContext(UserContext)

5. What does useContext() do?

   It reads the nearest Provider's value.

   Example:

       value={{ user, setUser }}

   Then

       const { user, setUser } = useContext(UserContext)

   gives access to both variables.

6. What happens on Submit?

   setUser({
       username,
       password
   })

   updates the global user object.

   Any component using

       const { user } = useContext(UserContext)

   will automatically re-render with the new data.

7. Flow of Context API

   createContext()
          ↓
   Provider stores data
          ↓
   Wrap App
          ↓
   useContext()
          ↓
   Access data anywhere
*/