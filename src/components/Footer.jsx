import React from 'react'

// fontawesomeicon
import { FacebookRounded, Twitter, Instagram, YouTube } from '@mui/icons-material';

// style file
import '../style/footer.css'

function Footer() {
  return (
    <>
    
    <div className="footer-container">

        <div className="footer">

            <div className="footer-1">

                <div className="f-1-head f-head">
                    <h3>About Company</h3>
                </div>

                <div className="f-1-text f-text">
                    <h4>Address:</h4>
                    <p>Melbourne’s GPO 434 VIC 3074, Australia.</p>

                    <div className="icons">
                        <FacebookRounded fontSize='large' htmlColor='blue'/>
                        <Twitter fontSize='large' htmlColor='lightblue'/>
                        <Instagram fontSize='large' htmlColor='pink'/>
                        <YouTube fontSize='large' htmlColor='red'/>
                    </div>

                </div>

            </div>

            <div className="footer-2">

                <div className="f-2-head f-head">
                    <h3>Services</h3>
                </div>

                <div className="f-2-text f-text">
                    <ul>
                        <li>Web design</li>
                        <li>Digital marketing</li>
                        <li>It Management</li>
                        <li>Cloud services</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
                
            </div>

            <div className="footer-3">

                <div className="f-3-head f-head">
                    <h3>Useful Link</h3>
                </div>

                <div className="f-3-text f-text">
                    <ul>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Portfolio</li>
                        <li>Service</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>

            <div className="footer-4">

                <div className="f-4-head f-head">
                    <h3>Contact Us</h3>
                </div>

                <div className="f-4-text f-text">
                    <input type="email" placeholder='Your Email'/>
                    <div className="f-4-sub">
                        <p>Subscribe Our Newsletter</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

    </>
  )
}

export default Footer;