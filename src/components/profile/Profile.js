import get from 'lodash-es/get';
import './Profile.scss';

export const ProfileImg = ({ profile = {} }) => {
	const imgsrc = get(profile, 'img.src', "");
	return (
		<div className='profile-img'>
			<img src={imgsrc} alt='profile' />
		</div>
	);
};

const ProfileSection = ({ profile = {} }) => {
	const profileName = get(profile, 'name', "User");
	const role = get(profile, 'role', "");
	const email = get(profile, 'contact.email', "");
	const phone = get(profile, 'contact.phone', "");
	const location = get(profile, 'contact.location', "");
	const linkedin = get(profile, 'linkedIn', "");
	const github = get(profile, 'gitHub', "");

	return (
		<div className='profile'>
			<h1 className='profileName'>{profileName.toUpperCase()}</h1>
			<h2 className='tagName'>{role}</h2>
			<span className='linkedin more-info'>
				LinkedIn: {linkedin}
			</span>
			<br />
			<span className='github more-info'>
				GitHub: {github}
			</span>
			<br />
			<span className='email more-info'>
				E-mail:
				&nbsp;{email}
			</span>
			<span className='phone more-info'>
				Phone:
				&nbsp;{phone}
			</span>
			<span className='location more-info'>
				Location:
				&nbsp;{location}
			</span>
		</div>
	);
};

export default ProfileSection;