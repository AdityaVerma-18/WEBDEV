import Game from "./Game"
function App() {
  const username="Kirmada"
  return (
  <> 
  <Game/>
  <h1>stfu {username}</h1>
  {/* remember {} has evaluated expresion it is used to inject js in html in react no conditions can be passed through it just an evaluated expression */}
  </>
  )
}

export default App
