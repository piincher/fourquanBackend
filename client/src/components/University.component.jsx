import React from 'react';
import { withRouter } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const University = ({ university, history }) => {
	const handleDelete = async () => {
		try {
			const { data } = await axios.delete(`http://localhost:8000/api/university/${university._id}`);

			toast.error(data.success);
		} catch (error) {}
	};
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">name</th>
					<th scope="col">program</th>
					<th scope="col">description</th>
					<th scope="col">tuition</th>
					<th scope="col">length</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						{university.name}
						<EditOutlined
							onClick={() => history.push(`/edit/${university._id}`)}
							className="text-blue pt-2 h5 px-2 mx-auto"
						/>
						<DeleteOutlined className="text-danger pt-2 h5 px-2" onClick={() => handleDelete(university)} />
					</td>
					<td>{university.program}</td>
					<td>{university.description}</td>
					<td>{university.tuition}</td>
					<td>{university.length}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default withRouter(University);
