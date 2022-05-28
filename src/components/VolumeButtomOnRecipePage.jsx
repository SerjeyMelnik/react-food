import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Italiano from '../sounds/Italiano.mp3'
import { italiano } from '../sounds/sounds.js';
const VolumeButtomOnRecipePage = ({sound}) => {
	const [soundVolume,setSoundVolume] = useState(0);
	const [isPlaying,setIsPlaying] = useState(false);
	const [play,{stop}] = useSound(sound,{
		volume: soundVolume
		
	});
	
	const buttonHandle = () => {
		
		setIsPlaying(true)
		if (soundVolume >= 0.4)
		{
			setSoundVolume(0);
			stop()
			setIsPlaying(false)

		}
		else {
			setSoundVolume(soundVolume + 0.2);
			if (!isPlaying){
				play() 
			}
			
		}
	}
	// const stopPlay = () => {
	// 	setIsPlaying(!isPlaying)
	// 	stop()
	// }
	// const startPlay = () => {
	// 	setIsPlaying(!isPlaying)
	// 	play()
	// }
	// useEffect(()=>{
	// 	startPlay();

	// 	return stopPlay()
	// },[])
	return ( 
			<div className="volume_button" onClick={buttonHandle}>
			<i className='material-icons'>
				{
					soundVolume === 0.2 ?
					'volume_down' :
					soundVolume === 0.4 ?
					'volume_up' :
					'volume_off'
				}
				</i>
		</div>
		
	
		
	 );
}
 
export default VolumeButtomOnRecipePage;