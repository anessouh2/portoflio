import '../styles/about.css'
import Skills from '../components/skills'
import Infocard from '../components/info'

export default function About() {
    const inforamtions = [
        {id:1 , title1: 'Name' , title2: 'Ouhemna Mohames Anes'} ,
        {id:2 , title1: 'Address ', title2: 'Khemis Milliana ,Aindefla'} ,
        {id:3 , title1 : 'Email' , title2: 'Ouhamnaanes@gmailcom '} ,
        {id:4 , title1 : 'Phonenumber' , title2:'0782712523'  }
    ]
    return(
        <section className='second-page'>
            <div className='text'>
                <h1  className='about' data-aos='fade-right' data-aos-duration='1000'>
                    About
                </h1>
                <h1 className='who' data-aos='zoom-in' data-aos-duration='1000'>
                    Who am i ?
                </h1>
                <h4 data-aos='fade-right' data-aos-duration='1000' data-aos-delay='100'
                >OUHEMNA Mohamed Anes</h4>
                    <div className='line'></div>
                <div className='all-paragraphes'>
                    <p className='top' data-aos='fade-left' data-aos-duration='1000'>
                    Hi, I’m Ouhemna Mohamed Anes, a passionate Computer Science student at ESI with 
                    <br/>
                    a strong interest in web development, Big Data, AI, and problem solving.
                    <br/> 
                    I enjoy turning ideas into interactive projects and exploring new 
                    <br/>
                    technologies.
                </p>
                <p className='under' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='150'>
                    My goal is to grow as a developer, contribute to impactful projects, 
                    <br/>
                    and keep learning every day.
                </p>
                </div>
                
            </div>
            <div className='inofrmations'>
               {inforamtions.map((info) => (<Infocard key={info.id} inforamtions={info} />)) } 
            </div>
            <div className='tri2'></div>
            <Skills/>
           
        </section>
    )
}