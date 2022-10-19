import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import FormModal from '../../components/FormModal'
import Header from '../../components/Header'
import useArticles from '../../context/ArticlesProvider/useArticles'

function Layout() {
  const { openModal } = useArticles()
  
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        {openModal && <FormModal/>}
    </>
  )
}

export default Layout