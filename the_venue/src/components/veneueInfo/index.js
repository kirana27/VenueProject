import React from 'react';
import Zoom from 'react-reveal/Zoom'; // Content should go here.
// the import below is to get the named images from their corresponding folder.
import brad from '../../resources/images/players/brad.jpg' 
import chloe from '../../resources/images/players/chloe.jpg'
import hanyu from '../../resources/images/players/hanyu.jpg'
import mikaela from '../../resources/images/players/mikaela.jpg'
import suzanne from '../../resources/images/players/suzanne.jpg'
const VunueNfo = () => {
    return (
        <div className="bck_black">
            <h1>SOME OF THE PLAYERS</h1>
            <div className="center_wrapper"> {/* to put the header at the center */}
                <div className="vn_wrapper">
                    <Zoom duration={500}>  {/* zooming animation that reveals text inside the tag */}
                        <div className="vn_item">
                            <div className="vn_outer"> 
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {brad} alt="" className="Players_pic" 
                                        style={{width:"100%", 
                                        height: "auto", 
                                        textAlign: "center"}}/> 
                                    <div className="vn_title"> 
                                        Brad Gushue 
                                    </div>
                                    <div className="vn_desc"> 
                                        Curling Player
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}> 
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {chloe} alt="" className="Players_pic" 
                                        style={{width:"100%", 
                                        height: "auto", 
                                        textAlign: "center"}}/>
                                    <div className="vn_title"> 
                                        Chloe Kim
                                    </div>
                                    <div className="vn_desc"> 
                                       Snowboarder
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500}> 
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {hanyu} alt="" className="Players_pic" 
                                        style={{width:"100%", 
                                        height: "auto", 
                                        textAlign: "center"}}/>
                                    <div className="vn_title"> 
                                    Hanyu Yuzuru
                                    </div>
                                    <div className="vn_desc"> 
                                        Skater
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500}> 
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {mikaela} alt="" className="Players_pic" 
                                        style={{width:"100%", 
                                        height: "auto", 
                                        textAlign: "center"}}/>          
                                    <div className="vn_title"> 
                                    Mikaela Shiffrin
                                    </div>
                                    <div className="vn_desc"> 
                                        Alpine Skier
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                        <Zoom duration={500}> 
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_brown"></div>
                                    <img src= {suzanne} alt="" className="Players_pic"  
                                        style={{width:"100%", 
                                        height: "auto", 
                                        textAlign: "center"}}/> 
                                    <div className="vn_title"> 
                                    suzanne Schulting
                                    </div>
                                    <div className="vn_desc"> 
                                        Speed Skater
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                </div>
            </div>
        </div>
    );
};
export default VunueNfo;