import './header.scss'
import Nav from './nav'

const header = () => {
  return (
    <header className='antialiased lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2'>
      <div className='flex-1 flex justify-between items-center' />
      <label htmlFor='menu-toggle' className='pointer-cursor lg:hidden block'>
        <svg
          className='fill-current text-gray-900'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        >
          <title>menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
        </svg>
      </label>
      <input className='hidden' type='checkbox' id='menu-toggle' />
      <div className='hidden lg:flex lg:items-center lg:w-auto w-full' id='menu'>
        <Nav />
      </div>
    </header>
  )
}

export default header
