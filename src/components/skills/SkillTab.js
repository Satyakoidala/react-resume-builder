import './SkillTab.scss';

const SkillTabSection = ({ skillList = [] }) => {
	return (
		<div className='skillset' aria-label='skills'>
			<h2 className='skillTabSectionHeader'>Skills</h2>
			<div className='skills'>
				{
					skillList.map((skill, index) => {
						return (
							<span className='skillTag' key={index}>{skill}</span>
						);
					})
				}
			</div>
		</div>
	);
};

export default SkillTabSection;