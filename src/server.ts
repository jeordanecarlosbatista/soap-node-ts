import express, { Express } from 'express';
const soap = require('soap');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const port = process.env.PORT || 3000;

const app: Express = express();

const myService = {
    BookService: {
        BookServiceSOAP: {
            GetBook: function (args: any) {
                return {
                    ID: args.name,
                    Title: 'Clean Code',
                    Author: 'Robert Cecil Martin',
                };
            }
        }
    }
}

app.listen(port, () => {
    const xml = fs.readFileSync(path.join(__dirname, 'book.wsdl'), 'utf8');
    soap.listen(app, '/wsdl', myService, xml, function () {
        console.log('server initialized');
    });
    console.log(`Server running at http://localhost:${port}`);
})