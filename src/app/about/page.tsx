import NextIcon from '../nextIcon'
import ReactIcon from '../reactIcon'
import TailwindIcon from '../tailwindIcon'
import TypeScriptIcon from '../typeScriptIcon'

export default function About() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div>
        <h2 className='lg:text-8xl text-4xl text-center text-gray-800 dark:text-white'>About</h2>
        <p className='my-10 lg:text-xl text-base text-center text-gray-800 dark:text-white leading-relaxed'>
          このサイトで利用している技術スタックです。
          <br />
          とりあえずNext.jsのベーステンプレートとTailwind
          CSSの装飾を組み合わせて簡素にページつくってみました。
          <br />
          今後も新しいことを学習しつつ、色々試して追加していきたい。
        </p>
        <ul className='flex justify-center items-center w-full'>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mx-4'>
            <ReactIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mx-4'>
            <NextIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mx-4'>
            <TypeScriptIcon />
          </li>
          <li className='lg:w-20 lg:h-20 w-10 h-10 lg:mr-10 mx-4'>
            <TailwindIcon />
          </li>
        </ul>
      </div>
    </main>
  )
}
