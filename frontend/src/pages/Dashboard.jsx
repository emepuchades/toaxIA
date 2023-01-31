import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ClassifyIA from '../components/ClassifyIA'
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
            <ClassifyIA
                userTwitter={userTwitter}
            />
        </>
    )
}

export default Dashboard