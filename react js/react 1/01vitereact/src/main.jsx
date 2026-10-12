import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// const reactelement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click to visit google'
// }

const anotherelement=(
    <a href="https://google.com" target='_blank'>
        click to visit google
    </a>
)

const anotheruser="kirmada"
const reactelement=React.createElement(
    'a',
    {
        href: 'https://google.com',target:'_blank'
    },
    'click me to visit google ',
    // here another user is an evaluated expression no condition can be passed through this obkject that react accepts

    anotheruser
)

createRoot(document.getElementById('root')).render(
  
    // <App />
    // app is just a function ,its a convention which help to implement HTML so you can run it by app()

    // anotherelement
    reactelement
)
