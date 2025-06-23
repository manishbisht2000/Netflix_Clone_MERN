import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import HomePage from "./pages/home/HomePage"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authUser"
import { useEffect } from "react"


function App() {
  const {user, isCheckingAuth, authCheck} = useAuthStore()
  console.log("auth user is here", user)

  useEffect(() => {
    authCheck()
  }, [])

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
    <Footer />

    <Toaster />
    </>
  )
}

export default App
