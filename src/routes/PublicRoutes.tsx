import { Route, Routes } from 'react-router-dom'
import Article from '../pages/Article'
import Home from '../pages/Home'
import Layout from '../pages/Layout'

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='article/:id' element={<Article/>}/>
        <Route path='newarticle' element={<Home/>}/>
        <Route path='*' element={<h1>Existe Não pvt</h1>}/>
      </Route>
    </Routes>
  )
}

export default PublicRoutes