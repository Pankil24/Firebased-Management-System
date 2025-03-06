import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChatBotComponent from './components/ChatBot/ChatBotComponent'
import Header from './pages/Header'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import NOCForm from './pages/NOCForm'
import Register from './pages/Register'
import { Bounce, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'

function App() {
  const toast = useSelector((state) => state?.toast)
  console.log("here is repo")
  return (
    <>
      {toast?.show && (
        <ToastContainer 
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          rtl={false}
          draggable
          pauseOnHover={false}
          theme={'dark'}
          transition={Bounce}
        />
      )}
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/noc-form' element={<NOCForm />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ChatBotComponent />
    </>
  )
}

export default App
