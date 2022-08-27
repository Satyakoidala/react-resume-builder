import './Certifications.scss';

const CertificationsSection = ({ certificationsList = [] }) => {
	return (
		<div className='certifications'>
			<h2 className='certificationsSectionHeader'>Certifications</h2>
			<ul className='certifications-list' aria-label='certifications'>
				{
					certificationsList.map((item, index) => {
						return (
							<li className="row certifications-list-item" key={index}>
								{item}
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default CertificationsSection;