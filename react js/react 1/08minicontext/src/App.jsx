import Login from "./component/Login"
import UserContextProvider from "./context/Usercontextprovider"

import Profile from "./component/Profile"
function App() {
  

  return (
    <UserContextProvider>
      <h1> React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
