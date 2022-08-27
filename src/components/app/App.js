import { useEffect, useState } from 'react';
import get from 'lodash-es/get';
import cn from 'classnames';
import './App.scss';
import ProfileSection, { ProfileImg } from '../profile/Profile';
import SummarySection from '../summary/Summary';
import EducationSection from '../education/Education';
import SkillTabSection from '../skills/SkillTab';
import CertificationsSection from '../certifications/Certifications';
import ExperienceSection from '../experience/Experience';
import WorksSection from '../projectWorks/Works';

const getBootstrap = async (updateBootstrap) => {
	await fetch('resume_template.json')
		.then(res => res.json())
		.then(data => updateBootstrap(data))
		.catch(err => console.log(err));
};

const ColumnLayout = ({ children, classList = [] }) => {
	return (
		<div className={cn('column', ...classList)}>
			{children}
		</div>
	);
};

function App() {
	const [bootstrap, setBootstrap] = useState({});
	const profile = get(bootstrap, 'profile', {});
	const summary = get(bootstrap, 'summary', '');
	const educationList = get(bootstrap, 'education', []);
	const skillList = get(bootstrap, 'skills', []);
	const cerificationsList = get(bootstrap, 'certifications', []);
	const experienceList = get(bootstrap, 'experience', []);
	const worksList = get(bootstrap, 'works', []);

	useEffect(() => {
		getBootstrap(setBootstrap);
	}, []);

	return (
		<div className='layout'>
			<div className='flex-row'>
				<ProfileSection profile={profile} />
				<ProfileImg profile={profile} />
			</div>
			<SummarySection summary={summary} />
			<div className='flex-row'>
				<ColumnLayout classList={['leftLayout']}>
					<EducationSection educationList={educationList} />
					<SkillTabSection skillList={skillList} />
					<CertificationsSection certificationsList={cerificationsList} />
				</ColumnLayout>
				<ColumnLayout classList={['rightLayout']}>
					<ExperienceSection experienceList={experienceList} />
					<WorksSection worksList={worksList} />
				</ColumnLayout>
			</div>
		</div>
	);
}

export default App;
