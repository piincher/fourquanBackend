import React from 'react';

const CustomButton = ({ children, otherProps, handleSubmit }) => {
	return (
		<div className="form-group p-2">
			<button {...otherProps} className="btn btn-primary" onClick={handleSubmit}>
				{children}
			</button>
		</div>
	);
};

export default CustomButton;
