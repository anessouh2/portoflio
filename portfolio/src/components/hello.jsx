import '../styles/hello.css' 
import Mypic from '../imgs/image.png'
export default function Hello(){
    return (
        <div className='welcom'>
            <h1 className='hello'>
                <span className='HELLO' data-aos='fade-left' data-aos-duration='1000'>HELLO </span> <span className='world' data-aos='fade-left' data-aos-duration='1000'>WORLD !</span> 
            </h1>
            <div className='span'>
              <h1 data-aos='fade-right' data-aos-duration='1000' className='im'>
                I'M 
              </h1>
              
              <h1 data-aos='fade-left' data-aos-duration='1000' className='anes'>  
                ANES
              </h1>
            </div>
              
        </div>
    )
}