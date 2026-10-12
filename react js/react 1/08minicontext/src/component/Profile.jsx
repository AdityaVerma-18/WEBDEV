import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <h2>Please Login</h2>
            </div>
        )
    }

    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '100px',
                border: '1px solid #ddd',
                padding: '20px',
                width: '250px',
                margin: '100px auto',
                borderRadius: '8px',
            }}
        >
            <h2>Welcome</h2>
            <p>{user.username}</p>
        </div>
    )
}

export default Profile