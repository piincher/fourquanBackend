import mongoose from 'mongoose';

const universityModel = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			unique: true
		},
		program: {
			type: String,
			trim: true,
			required: true
		},
		length: {
			type: Number,
			required: true
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		tuition: {
			type: Number,
			trim: true,
			required: true
		}
	},
	{ timestamps: true }
);
export default mongoose.model('University', universityModel);
