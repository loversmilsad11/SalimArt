import watercolor from '../../assets/watercolor.jpg';
import Artworks from '../../assets/Artworks.jpg';
import Artistic from '../../assets/Artistic.jpg';
/* import Designs from '../../assets/Designs.jpg'; */

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, title }) => (
  <div className=" p-4 md:w-1/3 mb-6">
    <div className="rounded-lg h-52 overflow-hidden">
      <img src={image} alt="content" className="object-cover object-center " />
    </div>
    <h2 className="text-xl font-medium title-font text-white mt-5 ">{title}</h2>
    <a  className="text-blue-300 hover:text-blue-100 inline-flex items-center mt-3">Fullscreen
      <svg fill='none' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth='2' className="w-4 h-4 ml-2" viewBox="0 0 24 24" >
        <path d='MS 12h14M12 517 7-7 7'></path>
      </svg>
    </a>
  </div>
);

export default function Projects() {
  const pro = [
    { title: 'Water color', image: watercolor },
    { title: 'Art works', image: Artworks },
    { title: 'Artistic achievements', image: Artistic },
   /*  { title: 'Designs', image: Designs }, */

  ];
  return (
    <section id='mywork' className=' text-gray-400 bg-blue-950 body-font'>
      <div className='container px-10 py-10 max-auto'>
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My Projects</h1>
            <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
              A collection of my creative projects showcasing a range of graphic design skills including branding, illustration, web design, and digital marketing materials. Each project highlights my passion for combining aesthetics with functionality to create impactful visual solutions.
            </p>
            <button type='button' data-aos='fade-up' data-aos-delay='300' className='text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center   ' >
              view all
            </button>
          </div>

        </div>

        <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4 '>
          {
            pro.map((proj, index) => (
              <ProjectCard key={index} {...proj} />
            ))
            
          }

        </div>

      </div>
    </section>
  )
}
