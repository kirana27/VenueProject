/* import { grey } from '@material-ui/core/colors'; */
import '../../index.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Tooltip } from '@material-ui/core';

/*Image added */
import mountain_img from '../../resources/images/img_mountain.png';

const Footer = () => {
    return (
        /* style edited */
        <footer className = "bck_grey">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    <Tooltip title="Check out our Github!">
                
                    
                    <a href = "https://github.com/SimronJ/Team2VenuProject"
                    style ={{
                        /*color changed*/
                        color: "#0057a7"
                        
                        }}
                    >Olympics Countdown
                    </a>
                </Tooltip>
                </div>
                <br></br>
                <div className="footer_copyright">JJAY TTP, Team 2. All rights reserved ©</div>
                <div className="footer_copyright">

                       <div className="team-container" style={{background:`url(${mountain_img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%'}}>
                       <div className="team-window">
                            <h4 className="team-title">Team leaders</h4>
                            <div className="members">
                                <p>Syeda</p>
                                <p>Ege</p>
                                <p>Hilal</p>
                            </div>
                        </div>
                        <div className="team-window">
                            <h4 className="team-title">Team Members</h4>
                            <div className="members" style={{display:'flex', justifyContent:'center'}}>
                            
                                <div class="item">Robert<br></br>
                                Christopher<br></br>
                                Ankit<br></br>
                                </div>
                                
                                <div class="item">
                                Kirana<br></br>
                                Humayun<br></br>
                                Jeryel<br></br>
                                </div>
                                <div class="item">
                                Chelsea<br></br>
                                Gabriel<br></br>
                                Nanami<br></br>
                                </div>
                                <div class="item">
                                Michael<br></br>
                                Md<br></br>
                                Cenk<br></br>
                                </div>

                                
                            </div>
                        </div>
                       </div>

                </div>
            </Fade>
        </footer>
    );
};

export default Footer;