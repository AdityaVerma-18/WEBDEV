import React from 'react'
import UserContext from './Usercontext'
// children is generic name they are basically classes like div which are to be wrapped
const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider