import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/imagg.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Alwayne Bailey' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
					</span>
					<p><strong>Blockchain Developer</strong></p>
					<p><strong>Full Stack Developer</strong></p>
					<p><strong>Educator</strong></p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					    <a href="https://github.com/baileyalo" target=""><i className='fab fa-github grey-text text-darken-4 social_style'> </i></a>
						<a href="https://linkedin.com/in/alwayne-bailey" target=""><i className='fab fa-linkedin grey-text text-darken-4 social_style'></i></a>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						
					</p>
				</div>
			</div>
		</div>
	);
}
