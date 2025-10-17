import '../styles/home.css'
import Nav from '../components/nav'
import Hello from '../components/hello'
import Mypic from '../imgs/image.png'
export default function Home(){
    return(
       <section className='first-page'>
          <Nav/>      
         <Hello/> 
         <img data-aos="zoom-in-up" data-aos-duration="1500" className='my-img' src={Mypic} />
          <div className='first-par' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='500' >
                <p>
                     I’m a web developer
                     Full stack developer
                </p>
            </div>
            <div className='second-par' data-aos='fade-left' data-aos-duration='1000'>
                <p>
                    I build modern, responsive, and user-friendly web 
                   interfaces using the latest technologies.Passionate 
                   about creating smooth digital experiences that 
                   bring ideas to life.
                </p>
            </div>
       </section> 
    )
}