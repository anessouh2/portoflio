import '../styles/info.css'

export default function Infocard({informations, delay = 0}){
  return(
     <div 
        data-aos='fade-up' 
        data-aos-duration='1000' 
        data-aos-delay={delay} 
        className='info-card'
     >
        <div className='card-accent-line'></div>
        <div className='card-content-wrapper'>
            <div className='card-icon-wrapper'>
                <span className='card-icon'>{informations.icon}</span>
            </div>
            <div className='card-info'>
                <h3 className='card-label'>
                    {informations.title}
                </h3>
                <p className='card-value'>
                    {informations.value}
                </p>
            </div>
        </div>
     </div>
  )
}