const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 🔥 Connessione Mongo
mongoose.connect('mongodb://my-mongo:27017/test')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 📦 Schema utente
const User = mongoose.model('User', {
  name: String,
  age: Number,
  role: String
});

// ➜ CREA utente
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// ➜ CANCELA utente
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.send({ message: 'Utente eliminato' })
  } catch (err) {
    res.status(500).send(err)
  }
})

// ➜ MODIFICA utente
app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.send(updatedUser)
  } catch (err) {
    res.status(500).send(err)
  }
})

// ➜ LEGGI utenti
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 🚀 Avvio server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
