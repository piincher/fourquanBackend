import React from 'react';
import University from './University.component';

const UniversitiesList = ({ universities }) => {
	return (
		<React.Fragment>
			{universities.map((university) => <University university={university} key={university._id} />)}
		</React.Fragment>
	);
};

export default UniversitiesList;
