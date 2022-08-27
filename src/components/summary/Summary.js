import './Summary.scss';

const SummarySection = ({ summary = "" }) => {
	return (
		<div className="summary">
			<h2 className='summaryHeader'>Summary</h2>
			<div className='summaryPara'>{summary}</div>
		</div>
	);
};

export default SummarySection;