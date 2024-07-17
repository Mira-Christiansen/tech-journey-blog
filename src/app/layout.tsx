import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
 */
const font = Inter({ weight: 'variable', subsets: ['latin']})
const title = 'The Star Wars Encyclopedia';
const description = 'This your hub for all the star wars information we can provide! Currently a work in progress, the star wars universe is very large!';

const SocialLinks = {
  twitter: 'https://x.com/starwars?lang=en',
  github: 'https://github.com/topics/star-wars',
  instagram: 'https://www.instagram.com/starwars/',
  email: 'mailto:ClipAndStill@Lucasfilm.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/darth-vader.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} >
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
