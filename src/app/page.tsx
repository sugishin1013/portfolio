'use client'

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
      </div>
    </main>
  )
}
