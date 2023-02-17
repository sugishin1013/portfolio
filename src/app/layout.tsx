import '@fontsource/noto-sans-sora-sompeng/400.css'
import '@fontsource/noto-sans-sora-sompeng/500.css'
import '@fontsource/noto-sans-sora-sompeng/700.css'
import './globals.scss'
import Footer from './footer'
import Header from './header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
