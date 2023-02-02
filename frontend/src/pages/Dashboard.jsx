import React, { useState } from 'react'
import Header from '../components/Header'
import UserTwitter from '../components/UserTwitter'

function Dashboard() {
    const [userTwitter, setUserTwitter] = useState('')

    return (
        <>
            <Header />
            <UserTwitter
                userTwitter={userTwitter}
                setUserTwitter={setUserTwitter}
            />
        </>
    )
}

export default Dashboard