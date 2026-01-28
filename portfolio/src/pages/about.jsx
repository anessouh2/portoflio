import '../styles/about.css'
import Skills from '../components/skills'
import Infocard from '../components/info'

export default function About() {
    const informations = [
        {id: 1, icon: '👤', title: 'Name', value: 'Ouhemna Mohamed Anes'} ,
        {id: 2, icon: '📍', title: 'Address', value: 'Khemis Milliana, Aindefla'} ,
        {id: 3, icon: '✉️', title: 'Email', value: 'Ouhamnaanes@gmail.com'} ,
        {id: 4, icon: '📱', title: 'Phone', value: '+213 782 712 523'}
    ]

    return(
        <section className='about-section' id="about">
            <div className='about-container'>
                <div className='about-header' data-aos='fade-up' data-aos-duration='1000'>
                    <div className='header-accent'></div>
                    <h1 className='about-title'>About</h1>
                </div>

                <div className='about-content'>
                    <div className='about-text-section' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                        <h2 className='who-title'>Who am I?</h2>
                        <div className='name-highlight'>
                            <span className='name-text'>OUHEMNA Mohamed Anes</span>
                        </div>
                        <div className='about-description'>
                            <p className='description-text'>
                                Hi, I'm Ouhemna Mohamed Anes, a passionate Computer Science student at ESI with a strong interest in web development, Big Data, AI, and problem solving. I enjoy turning ideas into interactive projects and exploring new technologies.
                            </p>
                            <p className='description-text'>
                                My goal is to grow as a developer, contribute to impactful projects, and keep learning every day.
                            </p>
                        </div>
                    </div>

                    <div className='info-cards-grid'>
                        {informations.map((info, index) => (
                            <Infocard 
                                key={info.id} 
                                informations={info}
                                delay={index * 100}
                            /> 
                        ))}
                    </div>
                </div>

                <div className='section-divider' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='400'></div>
            </div>
            <Skills/>
        </section>
    )
}