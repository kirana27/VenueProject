//importing all the picture for upcoming games

import React from 'react';
import brisbane from '../../resources/images/logos/brisbane.png'
import la from '../../resources/images/logos/la.png'
import paris from '../../resources/images/logos/paris.png'
import milano from '../../resources/images/logos/milano.png'




//fixed identifier
const olympicsGamesNext = () => {
    return (
        <div>
      
            <h2 id='nextOlympicsH2'>Upcoming Olympics Game</h2>
        
      
        <section id="next_olympics">
                <a class='nol' href="https://olympics.com/en/olympic-games/paris-2024" target="_blank" > <img  className='olicn' src={paris} ></img></a>                 
                <a class='nol' href="hhttps://olympics.com/en/olympic-games/milano-cortina-2026" target="_blank" > <img className='olicn' src={milano}></img></a>
                <a class='nol' href="https://olympics.com/en/olympic-games/los-angeles-2028" target="_blank" > <img className='olicn' src={la} ></img></a> 
                <a class='nol' href="https://olympics.com/en/olympic-games/brisbane-2032" target="_blank" > <img className='olicn' src={brisbane} ></img></a> 
        </section>
        </div>
    )
};

//exporting olympicsGamesNext
export default olympicsGamesNext;