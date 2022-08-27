import './Education.scss';


const Education = ({ educationDetails = {} }) => {
	const {
		institute,
		course,
		specialization,
		location,
		timeline,
		gpa
	} = educationDetails;

	return (
		<div className='education-list-item'>
			<h3 className='institute-name' aria-label='institute-name'>{institute}</h3>
			<div className='generic-details' >
				<span className='gpa' aria-label='gpa'>{gpa}&nbsp;CGPA</span>
				,&nbsp;
				<span className='specialization' aria-label='specialization'>{specialization}</span>
				,&nbsp;
				<span className='timeline' aria-label='timeline'>{timeline}</span>
			</div>
			<div className='course' aria-label='course-name'>{course},</div>
			<div className='location' aria-label='institute-location'>{location}.</div>
		</div>
	);
};

const EducationSection = ({ educationList = [] }) => {
	return (
		<div className="education">
			<h2 className="educationHeader">Education</h2>
			<ul className='education-details'>
				{
					educationList.map((obj, index) => {
						return (
							<li className="row" key={index}>
								<Education educationDetails={obj} />
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default EducationSection;