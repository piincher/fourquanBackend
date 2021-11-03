import University from '../models/university';
const register = async (req, res) => {
	const { name, program, length, description, tuition } = req.body;
	if (!name || !program || !length || !description || !tuition) {
		return res.json({ error: 'the values should be provide' });
	}
	const exist = await University.findOne({ name });
	if (exist) {
		return res.json({ error: 'already exist' });
	}
	const university = new University({ name, program, length, description, tuition });
	try {
		university.save();
		res.json({ success: 'new university create' });
	} catch (error) {
		console.log(error);
		res.status(400).send('try again');
	}
};

const getUniversities = async (req, res) => {
	const universities = await University.find({});
	res.json(universities);
};

const getSingle = async (req, res) => {
	const university = await University.findById(req.params._id);
	res.json(university);
};

const updateUniversity = async (req, res) => {
	try {
		const update = await University.findByIdAndUpdate(req.params._id, req.body, {
			new: true
		});

		res.json(update);
	} catch (error) {
		console.log(error);
		res.sendStatus('try again ');
	}
};

const deleteUniversity = async (req, res) => {
	await University.findByIdAndDelete(req.params._id);
	res.json({ success: 'university deleted refresh the page' });
};

const searchUser = async (req, res) => {
	const { query } = req.params;
	if (!query) return;
	try {
		const user = await University.find({
			$or: [ { name: { $regex: query, $options: 'i' } }, { program: { $regex: query, $options: 'i' } } ]
		});
		res.json(user);
	} catch (error) {
		console.log(error);
		res.sendStatus('try again ');
	}
};
export { register, getUniversities, getSingle, updateUniversity, deleteUniversity, searchUser };
