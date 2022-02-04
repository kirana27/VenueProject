import React, { Component } from 'react'
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
import '../../resources/styles.css';


// importing images from sports folder
import alpine_skiing from '../../resources/images/sports/alpine_skiing.jfif';
import biathlon from '../../resources/images/sports/biathlon.jfif';
import bobsleigh from '../../resources/images/sports/bobsleigh.jpg';
import cross_country_skiing from '../../resources/images/sports/crosscountryskiing.jfif';
import curling from '../../resources/images/sports/curling.jfif';
import figure_skating from '../../resources/images/sports/figureskating.jfif';
import freestyle_skiing from '../../resources/images/sports/freestyleskiing.jfif';
import ice_hockey from '../../resources/images/sports/icehockey.jfif';
import luge from '../../resources/images/sports/luge.jfif';
import nordic_combined from '../../resources/images/sports/nordic-combined.jfif';
import short_track_speed_skating from '../../resources/images/sports/stsskating.jfif';
import skeleton from '../../resources/images/sports/skeleton.jfif';
import snowboard from '../../resources/images/sports/snowboard.jfif';
import speed_skating from '../../resources/images/sports/speedskating.jfif';
import ski_jumping from '../../resources/images/sports/skijumping.jfif';



class Sports extends Component{
    state={
        prices:[alpine_skiing, biathlon, bobsleigh, cross_country_skiing,
            curling, figure_skating, freestyle_skiing,
            ice_hockey, luge, nordic_combined, short_track_speed_skating, 
            skeleton, ski_jumping, snowboard, speed_skating],
        
        positions:['Alpine Skiing', 'Biathlon', 'Bobsleigh', 'Cross Country Skiing',
        'Curling', 'Figure Skating', 'Freestyle Skiing',
        'Ice Hockey', 'Luge', 'Nordic Combined', 'Short Track Speed Skating', 
        'Skeleton', 'Ski Jumping', 'Snowboard', 'Speed Skating'],
        
        linkto:[
            'https://olympics.com/en/beijing-2022/schedule-by-sport/alpine-skiing/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/biathlon/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/bobsleigh/',
            'https://olympics.com/en/beijing-2022/sports/cross-country-skiing/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/curling/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/figure-skating/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/freestyle-skiing/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/ice-hockey/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/luge/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/nordic-combined/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/short-track-speed-skating/',
            'https://olympics.com/en/beijing-2022/sports/skeleton/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/ski-jumping/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/snowboard/',
            'https://olympics.com/en/beijing-2022/schedule-by-sport/speed-skating/',
        ],
        
        delay:[500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500]

    }

    showBoxes = () =>(
        this.state.prices.map((_box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className = "pricing_item">
                    <div className = "pricing_inner_wrapper">
                        <div className = "image_title">
                            <img src= {this.state.prices[i]} alt=""/>
                            <div className="overlay">
                                <h2>{this.state.positions[i]}</h2>
                            </div>
                        </div>
                        
                        <div className = "pricing_buttons">
                            <MyButton 
                                text = "See Schedule"
                                bck = "#ffa800"
                                color = "#ffffff"
                                link = {this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div> 
            </Zoom>
        ))
    )

    render(){
        return(
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Sports</h2>
                    <p>Click a sport to learn more about when and where it takes place</p>
                    <div className = "pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sports;