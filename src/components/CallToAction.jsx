import { Button } from 'flowbite-react'
import aboutme from '../../assets/aboutme.jpg'

export default function CallToAction() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col sm:flex-row py-3 border-2 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col gap-7'>
        <h2 className='text-2xl font-semibold text-white'>
          Ready to Embark on Your Mindfulness Journey?
        </h2>
        <p className='text-white my-2 w-[70%] self-center'>
          Discover inner peace through guided meditations, therapeutic art, and
          spiritual practices tailored just for you.
        </p>
        <button className='bg-yellow-400 text-white font-bold py-2 lg:py-3 px-4 lg:px-5 rounded-tl-xl rounded-br-xl transition duration-300 ease-in-out self-center hover:scale-105 '>
          <a href='./about' className='block w-full h-full'>
            About Me
          </a>
        </button>
      </div>
      <div className='p-5 flex-1'>
        <img
          src={aboutme}
          alt='Mindfulness journey'
          className='rounded-xl w-full max-w-md mx-auto'
        />
      </div>
    </div>
  )
}
