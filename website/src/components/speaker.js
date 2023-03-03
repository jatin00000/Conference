import React from 'react'
import Card from './speaker_card'
import lis from './speaker_data'
export default function Speaker(props) {

    return (
        <>
          <div className="r7">
            <div className="fs-1 r1 text-center m- mt-0">Speakers</div>
          <div className="row ">
            
		{lis.map((e, i) => 
          
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
		<Card id={e.id} name={e['name']} place={e['place']} imag={e['imag']} know={e['know_more']} desc={e['desc']}/></div>
			)}
        
            

          
         
          </div>
            </div>
        </>
    )
}
