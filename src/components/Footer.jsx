import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-teal-500 to-gray-500 rounded-lg text-white'>
                Vet MiMi's
              </span>
              Blog
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-2 sm:gap-8'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Vet MiMi's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow me ' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://web.facebook.com/vet.mimi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-center'>
          <Footer.Copyright
            href='#'
            by="Vet MiMi's blog"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  )
}
