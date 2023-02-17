'use client'

export default function Home() {
  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div>
        <h1 className='lg:text-7xl text-5xl text-right text-slate-700 dark:text-white'>
          sugishin1013
          <br />
          <small className='lg:text-2xl text-xl'>Frontend Developer</small>
        </h1>
        <style jsx>{`
          h1 {
            line-height: 0.8;
          }
        `}</style>
      </div>
    </main>
  )
}
