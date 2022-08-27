import './Works.scss';
import cn from 'classnames';

const WorkTabItem = ({ work = {} }) => {
	const {
		name,
		about,
		roles = []
	} = work;

	return (
		<div className='work-details'>
			<h3 className='name' >{name}</h3>
			<div className='about'>{about}</div>
			<div className='roles'>
				{
					roles.map((item, index) => {
						return (
							<span className={cn(['role', 'role-tagname', `role-list-item${index}`])} key={`role-list-item${index}`}>
								{item}
							</span>
						);
					})
				}
			</div>
		</div>
	);
};

const WorksSection = ({ worksList = [] }) => {
	return (
		<div className='works'>
			<h2 className='works-section-header'>Projects</h2>
			<ul className='works-list'>
				{
					worksList.map((item, index) => {
						return (
							<li className='works-list-item' key={index}>
								<WorkTabItem work={item} />
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default WorksSection;