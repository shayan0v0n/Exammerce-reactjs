import { Routes, Route } from 'react-router-dom'
import Header from './Includes/Header/Header'
import Footer from './Includes/Footer/Footer'
import Home from './Containers/Home/Home'
import Shop from './Containers/Shop/Shop'
import Blog from './Containers/Blog/Blog'
import Tags from './Containers/Tags/Tags'
import AboutUs from './Containers/AboutUs/AboutUs'
import Faqs from './Containers/FAQs/faqs'
import NotFound from './Components/Errors/NotFound'
import Dashboard from './Containers/Dashboard/Dashboard'
import Product from './Containers/Product/Product'
import { Article } from '@mui/icons-material'
import Tag from './Containers/Tag/Tag'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Shop />} path="/shop" />
        <Route element={<Product />} path="/shop/{tag}/{title}" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Article />} path="/blog/{title}" />
        <Route element={<Tags />} path="/tags" />
        <Route element={<Tag />} path="/tag/{title}" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<Faqs />} path="/FAQs" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  )
}

export default App