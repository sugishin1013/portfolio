import Image from 'next/image'
import Link from 'next/link'

export default function Works() {
  return (
    <main className='w-screen h-screen flex justify-center lg:items-center lg:pt-0 pt-14 px-4'>
      <div className='mx-auto lg:w-8/12 w-full'>
        <h2 className='lg:text-8xl text-4xl text-center text-slate-700 dark:text-white'>Works</h2>
        <div className='lg:flex justify-between'>
          <Link
            href='https://github.com/sugishin1013/open-ai'
            target='_blank'
            className='flex bg-slate-700 dark:bg-white shadow-lg rounded-lg my-10 w-full lg:w-5/12'
          >
            <div className='flex items-start px-4 py-6'>
              <Image
                className='w-12 h-12 rounded-full object-cover mr-4 shadow'
                src='/avatar.png'
                alt='avatar'
                width={775}
                height={775}
              />
              <div>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold text-white dark:text-slate-700 -mt-1'>
                    sugishin1013
                  </h2>
                </div>
                <p className='text-white dark:text-slate-700'>OpenAI</p>
                <p className='mt-3 text-white dark:text-slate-700 text-sm'>
                  OpenAI API を試してみた
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
