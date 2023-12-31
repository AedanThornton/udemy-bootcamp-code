/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Which URL would you like to convert to a QR code?',
    }
]

inquirer
    .prompt(questions)
    .then((answer) => {
        qr.image(answer.url).pipe(fs.createWriteStream('qr_img.png'));
    });