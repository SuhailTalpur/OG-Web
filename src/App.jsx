import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import Cards from './Components/features'
import NFTInfoCard from './Components/NFTInfoCard'
import AboutDegenAlpha from './Components/AboutDegenAlpha'
import CommunityImportance from './Components/CommunityImportance'
import Timeline from './Components/Timeline'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Timeline/>
      <NFTInfoCard/>
      <AboutDegenAlpha/>
      <CommunityImportance/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default App
