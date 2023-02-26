import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
const PORT = 7032;

const DB_URL = `mongodb+srv://user:user@cluster0.aw78iun.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('????' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
