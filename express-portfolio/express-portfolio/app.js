/*File Name: contact.ejs
Student Name: Fazlur Rahman
Student ID: 301342012
Date: 25 September 2024*/


const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse form data
const app = express();
const port = 3000;

// Middleware to serve static files (like images and CSS)
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Define routes for each page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Handle form submission
app.post('/contact', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  
  // Render the Thank You page after form submission
  res.render('thankyou', { title: 'Thank You' });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});