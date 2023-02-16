const nav = () => {
  return (
    <nav>
      <ul className='lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0'>
        <li>
          <a
            className='lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400'
            href='#'
          >
            Home
          </a>
        </li>
        <li>
          <a
            className='lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400'
            href='#'
          >
            About
          </a>
        </li>
        <li>
          <a
            className='lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400'
            href='#'
          >
            Documentation
          </a>
        </li>
        <li>
          <a
            className='lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2'
            href='#'
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default nav
