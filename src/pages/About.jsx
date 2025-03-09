// export default function About() {
//   return (
//     <div className='min-h-screen flex items-center justify-center'>
//       <div className='max-w-2xl mx-auto p-3 text-center'>
//         <div>
//           <h1 className='text-3xl font font-semibold text-center my-7'>
//             About Sahand' Blog
//           </h1>
//           <div className='text-md text-gray-500 flex flex-col gap-6'>
//             <p>
//               Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
//               as a personal project to share his thoughts and ideas with the
//               world. Sahand is a passionate developer who loves to write about
//               technology, coding, and everything in between.
//             </p>

//             <p>
//               On this blog, you'll find weekly articles and tutorials on topics
//               such as web development, software engineering, and programming
//               languages. Sahand is always learning and exploring new
//               technologies, so be sure to check back often for new content!
//             </p>

//             <p>
//               We encourage you to leave comments on our posts and engage with
//               other readers. You can like other people's comments and reply to
//               them as well. We believe that a community of learners can help
//               each other grow and improve.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import painting from '../../assets/painting.jpg'

export default function About() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-teal-800 mb-4'>Vet Mi Mi</h1>
          <p className='text-xl text-gray-600'>
            Art- Psychotherapist | Mindfulness Blogger | Artist | Meditation
            Guide
          </p>
        </header>

        <div className='flex flex-col md:flex-row items-center md:items-center gap-8 mb-12'>
          <img
            src={painting}
            alt='Vet MiMi'
            className='w-64 h-64 rounded-full object-cover shadow-lg'
          />
          <div className='flex-1 '>
            <h2 className='text-2xl font-semibold text-teal-700 mb-4'>
              About Me
            </h2>
            <p className='text-gray-600 mb-4 '>
              Hello! I'm Vet MiMi, a Art- Psychotherapist. Through my blog, I
              share insights on meditation, mindful living, and the healing
              power of art. With over a decade of experience in mindfulness
              practices, I aim to help others find peace and balance in their
              daily lives.
            </p>
          </div>
        </div>

        <section className='mb-12'>
          <h2 className='text-2xl font-semibold text-teal-700 mb-4'>
            My Blog Focus
          </h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-teal-600 mb-2'>
                Mindful Living
              </h3>
              <p className='text-gray-600'>
                Practical tips and reflections on incorporating mindfulness into
                everyday life.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-teal-600 mb-2'>
                Art Therapy
              </h3>
              <p className='text-gray-600'>
                Exploring the healing and meditative aspects of creating and
                appreciating art.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-teal-600 mb-2'>
                Guided Meditations
              </h3>
              <p className='text-gray-600'>
                Written and audio guides to help you deepen your meditation
                practice.
              </p>
            </div>
          </div>
        </section>

        <section className='text-center'>
          <h2 className='text-2xl font-semibold text-teal-700 mb-4'>
            Let's Connect
          </h2>
          <p className='text-gray-600 mb-6'>
            I love hearing from my readers! Whether you have questions about
            mindfulness, want to share your own experiences, or just want to say
            hello, don't hesitate to reach out.
          </p>
          <button className='bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out'>
            Contact Me
          </button>
        </section>
      </div>
    </div>
  )
}
