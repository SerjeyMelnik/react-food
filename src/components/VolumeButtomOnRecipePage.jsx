import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

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
	const stopPlay = () => {
		setIsPlaying(!isPlaying)
		stop()
	}
	const startPlay = () => {
		setIsPlaying(!isPlaying)
		play()
	}
	
	if (sound){
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
	else return null;
	
}
 
export default VolumeButtomOnRecipePage;