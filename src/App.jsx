import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'

import SetAvatar from './Components/SetAvatar'
import Chat from './Pages/Chat'




function App() {


  return (
   <BrowserRouter>
   <Routes>
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login/>} />
       <Route path="/" element={<Chat />} />
       <Route path="/setAvatar" element={<SetAvatar />} />
       <Route path="/chat" element={<Chat/>} />
       </Routes>
       </BrowserRouter>

  )
}

export default App
