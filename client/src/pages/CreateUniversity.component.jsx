import React, { useState } from 'react';
import FormInput from '../components/FormInput.component';
import CustomButton from '../components/CustomButton.component';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const CreateUniversityPage = ({ history }) => {
	const [ name, setName ] = useState('');
	const [ program, setProgam ] = useState('');
	const [ length, setLength ] = useState(1);
	const [ description, setDescription ] = useState('');
	const [ tuition, setTuition ] = useState(1200);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const { data } = await axios.post('/api/register', {
				name,
				program,
				length,
				description,
				tuition
			});
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success(data.success);
				setName('');
				setProgam('');
				setLength(1);
				setDescription('');
				setTuition(1200);
				history.push('/');
			}
		} catch (error) {
			console.log(error);
			toast.error('try again');
		}
	};
	return (
		<div className="container-fluid">
			<div className="row py-5">
				<div className="col text-center">
					<h1>Add new university</h1>
				</div>
			</div>
			<div className="row py-5">
				<div className="col-md-6 offset-md-3">
					<form onSubmit={handleSubmit}>
						<FormInput
							label="name"
							type="text"
							placeholder="name"
							value={name}
							handleChange={(e) => setName(e.target.value)}
						/>
						<FormInput
							label="program"
							type="text"
							placeholder="program"
							value={program}
							handleChange={(e) => setProgam(e.target.value)}
						/>
						<FormInput
							label="length"
							type="number"
							placeholder="length"
							value={length}
							handleChange={(e) => setLength(e.target.value)}
						/>
						<FormInput
							label="description"
							type="text"
							placeholder="description"
							value={description}
							handleChange={(e) => setDescription(e.target.value)}
						/>
						<FormInput
							label="tuition"
							type="number"
							placeholder="tuition"
							value={tuition}
							handleChange={(e) => setTuition(e.target.value)}
						/>

						<CustomButton disabled={!name || !description || !tuition || !length || !program}>
							create
						</CustomButton>
						<Link to="/"> go to list </Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateUniversityPage;
