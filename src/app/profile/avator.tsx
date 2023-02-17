import Image from 'next/image'

export default function Avator() {
  return <Image src='/avatar.png' className='w-3/12' width={775} height={775} alt='avatar' />
}
