import React, { useState } from 'react'
import Header from '../components/Header/Header'
import AnalyzeUser from '../components/AnalyzeUser/AnalyzeUser'
import Characteristics from '../components/Characteristics/Characteristics'

function Dashboard() {
    const [userTwitter, setUserTwitter] = useState('')

    return (
        <>
            <Header />
            <AnalyzeUser
                userTwitter={userTwitter}
                setUserTwitter={setUserTwitter}
            />
        </>
    )
}

export default Dashboard