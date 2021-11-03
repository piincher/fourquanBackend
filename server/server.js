import express from 'express';
import colors from 'colors';
import path from 'path';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import universitiesRoute from './routes/university.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const __dirname = path.resolve();

//readdirSync('./').map((r) => app.use('/api', require(`./routes/${r}`)));
app.use('/api', universitiesRoute);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`server is running in port ${PORT}`.cyan.bold.underline);
});
