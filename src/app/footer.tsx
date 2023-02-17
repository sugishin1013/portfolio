import Link from 'next/link'
import GithubIcon from './githubIcon'

const footer = () => {
  return (
    <footer className='fixed w-full bottom-0'>
      <div className='flex-1 flex justify-between items-center'>
        <small className='lg:pl-4 pl-4'>&copy; {new Date().getFullYear()} sugishin1013</small>
        <Link
          href='https://github.com/sugishin1013'
          target='_blank'
          className='lg:p-4 py-3 px-3 block bg-white'
        >
          <GithubIcon />
        </Link>
      </div>
    </footer>
  )
}

export default footer
