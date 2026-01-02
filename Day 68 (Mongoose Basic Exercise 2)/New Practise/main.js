import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { pet as Pet } from './models/pet.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await mongoose.connect('mongodb://localhost:27017/petDB');

const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post("/pets", async (req, res) => {
  console.log(req.body);
  await Pet.create(req.body);
  res.redirect("/"); 
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
