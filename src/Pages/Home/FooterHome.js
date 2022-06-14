import React from 'react';
import './FooterHome.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

function FooterHome() {
  return (
    <footer className="footer-section">
        <div className="container  justify-content-around align-content-center">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
    
    
                    <div className="col-xs-8 col-lg-5 mb-30">
                        
                        <div className="single-cta">
                            <div className="cta-text"><h4>Follow us</h4>
                            <a href="https://www.facebook.com/hhfngo.org"> <FacebookIcon className='ficons' color='secondary' fontSize='large'/></a>
                            <a href="https://twitter.com/HHFNGO"><TwitterIcon className='ficons' color='secondary' fontSize='large'/></a>
                            <a href="https://www.instagram.com/hhfngo_official"><InstagramIcon className='ficons' color='secondary' fontSize='large'/></a>
                            <a href="https://www.linkedin.com/company/hhfngo"><LinkedInIcon className='ficons' color='secondary' fontSize='large'/></a>
                            <a href="https://www.youtube.com/channel/UCaZ8gsvPK7biD7M6uHf7O8w"><YouTubeIcon className='ficons' color='secondary' fontSize='large'/></a>
                            <hr/></div></div>

                        <div className="single-cta">
                            <div className="cta-text">
                                <h4>About Us</h4>
                                <span>We are a Mumbai based Multidisciplinary Charitable non-profit organization empowering
                                    and impacting
                                    unprivileged lives vide our thematic verticals aligned to the United Nations SDGs 1 to
                                    5, 8 &amp; 17</span>
                            </div>
                        </div>
                        <hr/>
    
                        <div className="single-cta">
    
                            <div className="cta-text">
                                <h4>Phone</h4>
                                <span>(+91) 9987923843 / 9892757014</span>
                            </div>
    
                        </div>
                        <hr/>
                        <div className="single-cta">
    
    
                            <div className="cta-text">
                                <h4>Admin Address</h4>
                                <span>Helping Hand Foundation <br/>302, Ganesh Society No: 02 CHSL, Off Our Lady of Sea Church
                                    Rd, Uttan, Mira-Bhayander, Tal-Dist, Thane – 401106, Maharashtra, INDIA </span>
                            </div>
                        </div>
                    </div>
    
    
                    <div className="col-xs-8 col-lg-7 mb-30 ifdiv">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.9948802076324!2d72.78520996484586!3d19.28281149335617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b21606ddf59b%3A0x61bf0106d9ebe500!2sDongri%2C%20Uttan%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401106!5e0!3m2!1sen!2sin!4v1653820851991!5m2!1sen!2sin" className='ifr' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-sm-12 col-lg-9 mb-30">
                        <div className="single-cta">
                            <div className="cta-text">
                                <h4>Disclaimer</h4>
                                <span>
                                No third party agency / individual / organization is engaged on our behalf for any recruitment, fundraising, training/s, soliciting for any type of donations/grants, conducting sessions or any other activities or interventions.
                                <br/>
                                If you come across any such individual / organization making a monetary demand or any unwarranted claims in our name or on our behalf, please bring it to our notice immediately at (+91) 9987923843 / hhfngo2011@gmail.com and check with us to get accurate information or assistance.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9 col-lg-3 mb-30 mt-4">
                        <ul>
                            <li><a href="">Terms &amp; Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Cancellation and Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterHome;