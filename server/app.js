import express from 'express'
import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(compression())
}

app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.send('responseText')
})

export default app