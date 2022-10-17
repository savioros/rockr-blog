import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../pages/Layout'

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='post/:id' element={<Home/>}/>
        <Route path='newpost' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default PublicRoutes