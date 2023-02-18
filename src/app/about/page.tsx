import NextIcon from '../nextIcon'
import ReactIcon from '../reactIcon'
import TailwindIcon from '../tailwindIcon'
import TypeScriptIcon from '../typeScriptIcon'

export default function About() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div className='mx-auto lg:w-8/12 w-full'>
        <h2 className='lg:text-8xl text-4xl text-center text-slate-700 dark:text-white'>About</h2>
        <p className='lg:my-10 my-5 lg:text-xl text-base text-slate-700 dark:text-white leading-relaxed'>
          フロントエンドエンジニア「sugishin1013」のポートフォリオサイトです。これまでに手がけた制作物、身につけたスキルをまとめています。
          下記のアイコンはこのサイトで使用している技術スタックです。
          今後も新しいことを学習しつつ、このサイトで色々試して追加していきます。
        </p>
        <ul className='flex justify-center items-center w-full'>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <ReactIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <NextIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <TypeScriptIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 m-4'>
            <TailwindIcon />
          </li>
        </ul>
      </div>
    </main>
  )
}
