import React, { useState } from 'react';
import axios from 'axios';

import University from './University.component';
import FormInput from './FormInput.component';
import CustomButton from './CustomButton.component';
const Search = () => {
	const [ query, setQuery ] = useState('');
	const [ result, setResult ] = useState([]);
	const searchUser = async (e) => {
		e.preventDefault();
		const { data } = await axios.get(`http://localhost:8000/api/search-user/${query}`);
		setResult(data);
	};
	return (
		<React.Fragment>
			<form className="form-inline row">
				<div className="col-8">
					<FormInput
						value={query}
						handleChange={(e) => {
							setQuery(e.target.value);
							setResult([]);
						}}
						type="search"
						placeholder="search"
						className="form-control"
					/>
				</div>
				<div className="col-4">
					<CustomButton handleSubmit={searchUser}>search</CustomButton>
				</div>
			</form>

			{result && result.map((university) => <University university={university} key={university._id} />)}
		</React.Fragment>
	);
};

export default Search;
