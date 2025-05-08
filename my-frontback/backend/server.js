const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client', 'dist'))); 

function readJSON(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'data', filePath), 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
}

function writeJSON(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, 'data', filePath), JSON.stringify(content, null, 2), 'utf8', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}


app.get('/api/suppliers', async (req, res) => {
  try {
    const data = await readJSON('suppliers.json');
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Kunde inte läsa suppliers.json' });
  }
});

app.get('/api/bakelse', async (req, res) => {
  try {
    const data = await readJSON('bakelse.json');
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Kunde inte läsa bakelse.json' });
  }
});

app.get('/api/revius', async (req, res) => {
  try {
    const data = await readJSON('revius.json');
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Kunde inte läsa revius.json' });
  }
});

app.post('/api/revius', async (req, res) => {
  try {
    const newItem = req.body;
    const list = await readJSON('revius.json');
    const item = { id: list.length > 0 ? list[list.length - 1].id + 1 : 1, ...newItem };
    list.push(item);
    await writeJSON('revius.json', list);
    res.json(item);
  } catch {
    res.status(500).json({ error: 'Kunde inte spara reviu' });
  }
});

app.delete('/api/revius/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    let list = await readJSON('revius.json');
    list = list.filter(item => item.id !== id);
    await writeJSON('revius.json', list);
    res.sendStatus(200);
  } catch {
    res.status(500).json({ error: 'Kunde inte ta bort reviu' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
