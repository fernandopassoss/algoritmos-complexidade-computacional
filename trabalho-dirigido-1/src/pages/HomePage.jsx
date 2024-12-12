import React from 'react'
import '../styles/HomePage.scss'
import Header from '../components/Header'

import Section from '../components/Section'


function HomePage() {
    return (
        <div>
            <Header/>
            <Section children={'body'}/>
        </div>
    )
}

export default HomePage
