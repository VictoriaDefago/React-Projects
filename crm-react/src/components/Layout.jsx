import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 py-10 px-5'>
            <h2 className='text-4xl font-black text-center text-white'>CRM -  Clientes</h2>
            <nav className='mt-10'>
              <Link 
                className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} mt-2 block text-2xl`} 
                to='/'>
                  Clientes
                </Link>
              <Link 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} mt-2 block text-2xl`}
              to='/clientes/nuevo'>
                Nuevo Cliente
              </Link>
            </nav>
        </aside>
        <main className='md:w-3/4 md:h-screen overflow-scroll m-4'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout