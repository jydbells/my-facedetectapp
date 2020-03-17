import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className = 'f3'>
				{'This Magic Brain will detect faces in your picture. Give it a try'}
			</p>
			<div className = 'center'>
				<div className = 'form center pa4 br3 shadow-5'>
					<input className = 'f4 pa2 w-70 center' type = 'text' onChange = {onInputChange} />
					<button 
						className = 'f4 link pv2 ph3 grow dib white bg-light-purple w-30 center'
						onClick = {onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
