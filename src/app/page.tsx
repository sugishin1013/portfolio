'use client'
import NextIcon from './nextIcon'
import ReactIcon from './reactIcon'
import TailwindIcon from './tailwindIcon'

export default function Home() {
  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div>
        <h1 className='lg:text-9xl text-7xl text-right text-gray-800 dark:text-white'>
          portfolio
          <br />
          <small className='lg:text-2xl text-2xl'>by sugishin1013</small>
        </h1>
        <style jsx>{`
          h1 {
            line-height: 0.5;
          }
        `}</style>
        <ul className='flex justify-center items-center w-full mt-10'>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mr-4'>
            <ReactIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mr-4'>
            <NextIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mr-4'>
            <TailwindIcon />
          </li>
        </ul>
      </div>
    </main>
  )
}
