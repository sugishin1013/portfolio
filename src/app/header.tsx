import Nav from './nav'

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-white dark:bg-slate-700 antialiased lg:p-2 p-4 flex flex-wrap items-center  header'>
      <div className='flex-1 flex justify-between items-center' />
      <label htmlFor='menu-toggle' className='pointer-cursor lg:hidden block'>
        <svg
          className='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
        >
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

export default Header
