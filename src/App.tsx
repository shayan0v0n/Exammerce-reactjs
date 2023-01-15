import Header from './Includes/Header/Header'
import Footer from './Includes/Footer/Footer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import Home from './Containers/Home/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
      <Footer />
    </>
  )
}

export default App