import './Experience.scss';

const ExperienceTab = ({ experience = {} }) => {
	const {
		designation,
		company,
		location: loc,
		role,
		responsibilities = [],
		timeline = {}
	} = experience;

	return (
		<div className='experience-item' aria-label='experience tab'>
			<h3 className='designation'>
				{designation}
			</h3>
			,&nbsp;
			<div className='timeline'>
				<span className='started'>{timeline.started}</span>
				&nbsp;-&nbsp;
				<span className='ended'>{timeline.ended}</span>
			</div>
			<div className='company-details'>
				<span className='company-name'>{company},</span>
				&nbsp;
				<span className='location'>{loc}</span>
			</div>
			<div className='roles'>
				<h4>Roles&nbsp;:&nbsp;</h4>
				<span>{role}</span>
			</div>
			<div className='responsibilities'>
				<h4>Responsibilities&nbsp;:&nbsp;</h4>
				<ul className='responsibilities-list'>
					{
						responsibilities.map((item, index) => {
							return (
								<li className='responsibilities-list-item' key={index}>
									{item}
								</li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
};

const ExperienceSection = ({ experienceList = [] }) => {
	return (
		<div className='experience' aria-label='working experience'>
			<h2 className='experienceSectionHeader'>Working Experience</h2>
			<ul className='experiences'>
				{
					experienceList.map((obj, index) => {
						return (
							<li className='experience-item-row' key={index}>
								<ExperienceTab experience={obj} />
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default ExperienceSection;