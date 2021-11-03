import React from 'react';

const FormInput = ({ label, handleChange, ...otherprops }) => {
	return (
		<div className="form-group p-2">
			<small>
				{label ? <label className="text-muted">{label}</label> : null}
				<input {...otherprops} className="form-control" onChange={handleChange} />
			</small>
		</div>
	);
};

export default FormInput;
