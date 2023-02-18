import JqueryIcon from '../jqueryIcon'
import NextIcon from '../nextIcon'
import NuxtIcon from '../nuxtIcon'
import ReactIcon from '../reactIcon'
import TailwindIcon from '../tailwindIcon'
import TypeScriptIcon from '../typeScriptIcon'
import VueIcon from '../vueIcon'
import WordpressIcon from '../wordpressIcon'

export default function Skill() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div className='mx-auto lg:w-8/12 w-full'>
        <h2 className='lg:text-8xl text-4xl text-center text-slate-700 dark:text-white'>Skill</h2>
        <p className='text-center lg:my-10 my-5 lg:text-xl text-base text-slate-700 dark:text-white leading-relaxed'>
          これまでに業務で実際に使用・経験した技術スタック
        </p>
        <ul className='flex justify-center items-center w-full flex-wrap'>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <ReactIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <NextIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <VueIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <NuxtIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <TypeScriptIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <TailwindIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <WordpressIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <JqueryIcon />
          </li>
        </ul>
      </div>
    </main>
  )
}
