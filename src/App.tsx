import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen)
  }

  const closeChatbot = () => {
    setIsChatbotOpen(false)
  }

  return (
    <div className="app">
      <NavBar onChatbotToggle={toggleChatbot} />
      <HeroSection onChatbotToggle={toggleChatbot} />
      <Chatbot isOpen={isChatbotOpen} onClose={closeChatbot} />
    </div>
  )
}

export default App
