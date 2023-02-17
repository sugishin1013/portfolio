import Link from 'next/link'

const nav = () => {
  return (
    <nav>
      <ul className='lg:flex items-center justify-between text-base pt-4 lg:pt-0 text-gray-800 dark:text-white '>
        <li>
          <Link
            href='/'
            className='lg:p-4 p-3 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/profile'
            className='lg:p-4 p-3 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href='/history'
            className='lg:p-4 p-3 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            History
          </Link>
        </li>
        <li>
          <Link
            href='/skill'
            className='lg:p-4 p-3 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Skill
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default nav
