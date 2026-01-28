import '../styles/footer.css'

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section" data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="footer-title">Get In Touch</h2>
                        <p className="footer-description">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                    </div>
                    
                    <div className="footer-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <h3 className="section-title">Contact Information</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <a href="mailto:Ouhamnaanes@gmail.com" className="contact-link">
                                    Ouhamnaanes@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08V3.08C5.16 3.68 4.68 4.16 4.08 4.16H1.08" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <a href="tel:+213782712523" className="contact-link">
                                    +213 782 712 523
                                </a>
                            </div>
                            <div className="contact-item">
                                <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="contact-text">
                                    Khemis Milliana, Aindefla, Algeria
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <h3 className="section-title">Follow Me</h3>
                        <div className="social-links">
                            <a 
                                href="https://github.com/anessouh2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                            >
                                <svg className="social-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.865 20.335 8.839 21.869C9.339 21.959 9.521 21.641 9.521 21.356C9.521 21.094 9.512 20.268 9.507 19.469C6.726 20.09 6.14 18.13 6.14 18.13C5.685 16.882 5.029 16.578 5.029 16.578C4.121 15.97 5.097 15.985 5.097 15.985C6.101 16.065 6.629 17.035 6.629 17.035C7.521 18.617 8.97 18.177 9.539 17.95C9.631 17.222 9.889 16.714 10.175 16.456C7.954 16.216 5.619 15.31 5.619 11.477C5.619 10.386 6.01 9.494 6.649 8.794C6.546 8.541 6.203 7.5 6.747 6.107C6.747 6.107 7.586 5.819 9.496 7.238C10.294 7.009 11.15 6.895 12 6.891C12.85 6.895 13.706 7.009 14.504 7.238C16.414 5.819 17.253 6.107 17.253 6.107C17.797 7.5 17.454 8.541 17.351 8.794C17.99 9.494 18.381 10.386 18.381 11.477C18.381 15.322 16.04 16.216 13.813 16.456C14.172 16.779 14.493 17.396 14.493 18.378C14.493 19.802 14.481 20.932 14.481 21.356C14.481 21.646 14.661 21.969 15.169 21.869C19.14 20.335 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                                </svg>
                                <span className="social-text">GitHub</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/ouhemna-mohamed-anes-32194a325/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="LinkedIn"
                            >
                                <svg className="social-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="social-text">LinkedIn</span>
                            </a>
                            <a 
                                href="https://www.instagram.com/iamanexs/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <svg className="social-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.908 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47029 10.1584C8.84856 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                                </svg>
                                <span className="social-text">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="footer-line"></div>
                    <p className="copyright">
                        © {new Date().getFullYear()} Ouhemna Mohamed Anes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

