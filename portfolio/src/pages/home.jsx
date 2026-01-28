import '../styles/home.css'
import Nav from '../components/nav'
import Hello from '../components/hello'
import Mypic from '../imgs/image.png'

export default function Home(){
    return(
       <section className='home-section'>
          <Nav/>      
          
          <div className='home-content'>
            <div className='home-left'>
              <Hello/>
              
              <div 
                className='role-badge' 
                data-aos='fade-up' 
                data-aos-duration='1000' 
                data-aos-delay='200'
              >
                <span className='role-text'>AI Enthusiast</span>
                <span className='role-separator'>•</span>
                <span className='role-text'>Full Stack Developer</span>
              </div>

              <div 
                className='description-text' 
                data-aos='fade-up' 
                data-aos-duration='1000' 
                data-aos-delay='300'
              >
                <p>
                  I'm passionate about Artificial Intelligence and dedicated to creating complete AI-powered platforms. From machine learning models to intelligent agents with RAG technology, I build innovative solutions that leverage AI to solve real-world problems and deliver transformative digital experiences.
                </p>
              </div>
            </div>

            <div className='home-right'>
              <div 
                className='image-container'
                data-aos="zoom-in" 
                data-aos-duration="1500" 
                data-aos-easing="ease-out-cubic"
              >
                <div className='image-frame'>
                  <img 
                    className='profile-image' 
                    src={Mypic}
                    alt="Ouhemna Mohamed Anes" 
                  />
                  <div className='image-glow'></div>
                </div>
              </div>
            </div>
          </div>
       </section> 
    )
}