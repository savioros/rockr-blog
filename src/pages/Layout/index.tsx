import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import FormModal from '../../components/FormModal'
import Header from '../../components/Header'
import useArticles from '../../context/ArticlesProvider/useArticles'

function Layout() {
  const { modal } = useArticles()
  
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        {modal && <FormModal/>}
    </>
  )
}

export default Layout