const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// MySQL bağlantısını yapılandırın
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '583501',
  database: 'social_media_links'
});

// Bağlantıyı kontrol edin
db.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL bağlantısı başarılı.');
});

app.use(cors());
app.use(bodyParser.json());

// Basit giriş doğrulama
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Şifreyi doğrudan kontrol ediyoruz
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Error fetching user' });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    res.status(200).json({ message: 'Login successful' });
  });
});

// CRUD işlemleri için API uç noktalarını oluşturun
app.get('/api/links', (req, res) => {
  db.query('SELECT * FROM links', (err, results) => {
    if (err) {
      console.error('Error fetching links:', err);
      res.status(500).json({ error: 'Error fetching links' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/links', (req, res) => {
  const { name, url, description } = req.body;
  const query = 'INSERT INTO links (name, url, description) VALUES (?, ?, ?)';
  db.query(query, [name, url, description], (err, results) => {
    if (err) {
      console.error('Error adding link:', err);
      res.status(500).json({ error: 'Error adding link' });
      return;
    }
    res.status(201).json({ id: results.insertId, name, url, description });
  });
});

app.put('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const { name, url, description } = req.body;
  const query = 'UPDATE links SET name = ?, url = ?, description = ? WHERE id = ?';
  db.query(query, [name, url, description, id], (err, results) => {
    if (err) {
      console.error('Error updating link:', err);
      res.status(500).json({ error: 'Error updating link' });
      return;
    }
    res.json({ id, name, url, description });
  });
});

app.delete('/api/links/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM links WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting link:', err);
      res.status(500).json({ error: 'Error deleting link' });
      return;
    }
    res.json({ message: 'Link silindi.' });
  });
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});
