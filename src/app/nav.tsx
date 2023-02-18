import Link from 'next/link'
import GithubIcon from './githubIcon'

const nav = () => {
  return (
    <nav>
      <ul className='lg:flex items-center justify-between text-base pt-4 lg:pt-0 text-slate-700 dark:text-white '>
        <li>
          <Link
            href='/'
            className='lg:p-4 p-6 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='lg:p-4 p-6 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/profile'
            className='lg:p-4 p-6 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href='/skill'
            className='lg:p-4 p-6 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            href='/works'
            className='lg:p-4 p-6 block border-b-2 border-transparent hover:border-gray-600 dark:hover:border-white transition-all'
          >
            Works
          </Link>
        </li>
        <li>
          <Link href='https://github.com/sugishin1013' target='_blank' className='lg:p-4 p-6 block'>
            <GithubIcon />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default nav
