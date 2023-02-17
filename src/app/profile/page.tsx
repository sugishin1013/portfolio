import Link from 'next/link'
import Avator from './avator'

export default function Profile() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div className='mx-auto lg:w-8/12 w-full'>
        <h2 className='lg:text-8xl text-4xl text-center text-slate-700 dark:text-white'>Profile</h2>
        <p className='lg:my-10 my-5 lg:text-xl text-base text-slate-700 dark:text-white leading-relaxed'>
          大学卒業後、新卒で入社した会社を半年で退職し、
          IT業界への転職を志しプログラミング未経験でWEB制作会社からキャリアをスタート。
          その後様々な会社でWEB業界の業務を幅広く経験し、
          今はフロントエンドエンジニアとしてWEB制作・WEB開発をやってます。
        </p>
        <div className='lg:flex lg:items-center justify-center'>
          <div className='lg:w-2/12 w-4/12 lg:mr-6 lg:ml-0 mx-auto'>
            <div className='flex justify-center'>
              <Avator />
            </div>
            <h3 className='my-2 lg:text-xl text-base text-center text-slate-700 dark:text-white'>
              sugishin1013
            </h3>
          </div>
          <ul className='lg:text-base text-sm'>
            <li>
              - GitHub:
              <Link href='https://github.com/sugishin1013' target='_blank' className='ml-2'>
                https://github.com/sugishin1013
              </Link>
            </li>
            <li>
              - Zenn:
              <Link href='https://zenn.dev/sugishin1013' target='_blank' className='ml-2'>
                https://zenn.dev/sugishin1013
              </Link>
            </li>
            <li>
              - Qiita:
              <Link href='https://qiita.com/sugishin' target='_blank' className='ml-2'>
                https://qiita.com/sugishin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
