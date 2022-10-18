import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import { ArticlesProvider } from '../../context/ArticlesProvider'

function Layout() {
  return (
    <>
        <Header/>
        <ArticlesProvider>
          <Outlet/>
        </ArticlesProvider>
    </>
  )
}

export default Layout