import Avator from './avator'

export default function Profile() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div>
        <h2 className='lg:text-8xl text-4xl text-center text-gray-800 dark:text-white'>Profile</h2>
        <p className='lg:my-10 my-5 lg:text-xl text-base text-center text-gray-800 dark:text-white leading-relaxed'>
          フロントエンドエンジニアとしてWEB制作・WEB開発をやってます。
        </p>
        <div className='flex justify-center'>
          <Avator />
        </div>
        <h3 className='lg:my-10 my-5 lg:text-4xl text-2xl text-center text-gray-800 dark:text-white'>
          sugishin1013
        </h3>
      </div>
    </main>
  )
}
