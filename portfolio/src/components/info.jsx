import '../styles/info.css'

export default function Infocard({inforamtions}){
  return(
     <div data-aos='fade-right' data-aos-duration='1000' data-aos-delay='250' className='card'>
        <div className='tri'></div>
        <div className='informations'>
            <h1 className='title'>
                {inforamtions.title1}
            </h1>
            <h3 className='second-title'>
                {inforamtions.title2}
            </h3>
        </div>
     </div>
  )
}