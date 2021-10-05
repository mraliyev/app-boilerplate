import express from 'express';

const app = express();

app.listen(() => console.log(`Server started in ${process.env.NODE_ENV} mode.`));
