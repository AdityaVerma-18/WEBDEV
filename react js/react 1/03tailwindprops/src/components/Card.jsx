import React from 'react'

/*
========================================
            REACT PROPS
========================================

Props (Properties) are used to pass data
from a parent component to a child component.

Example:

<Card username="Aditya" btntext="Visit" />

React receives:

{
  username: "Aditya",
  btntext: "Visit"
}

----------------------------------------
Without Destructuring
----------------------------------------

function Card(props) {
  return <h1>{props.username}</h1>
}

----------------------------------------
With Destructuring
----------------------------------------

function Card({ username, btntext }) {
  return <h1>{username}</h1>
}

Equivalent to:

const username = props.username
const btntext = props.btntext

----------------------------------------
Default Props
----------------------------------------

function Card({ username, btntext = "lol" })

If btntext is not passed,
its default value becomes "lol".

<Card username="Aditya" />
=> btntext = "lol"

========================================
*/

function Card({ username, btntext = "lol" }) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-76">

      {/* NFT Image */}
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col py-3 px-3 pb-10">

        {/* Props displayed here */}
        <div className="flex justify-between">
          <h1 className="font-bold">{username}</h1>
          <h1>{btntext}</h1>
        </div>

        <div className="flex justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>

      </div>
    </div>
  )
}

export default Card