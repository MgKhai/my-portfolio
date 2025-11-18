import monkeyimage from '../assets/images/monkey.png';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={monkeyimage} alt='cool monkey' />
        <div>
          <div></div>
          <div>Avaliable for new projects</div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project</p>
        <div>
          <button>
            <span>Explore My Work</span>
      
          </button>
        </div>
      </div>
    </div>
  )
}
