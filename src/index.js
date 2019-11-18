import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let n = 0;
let loadingInterval;

if (context) {
    
    const button = document.querySelector('#canvas-button');
    const favicon = document.querySelector('link[rel*="icon"]');
    const gradient = context.createLinearGradient(0, 0, 32, 32);
    gradient.addColorStop(0, '#c7f0fe');
    gradient.addColorStop(1, '#56d3c9');
    context.strokeStyle = gradient;
    context.linearWidth = 8;

    button.addEventListener('click', () => {
        loadingInterval = setInterval(drawLoader, 60);
    });

    function drawLoader() {
        context.clearRect(0, 0, 32, 32);
        context.beginPath();

            if (n <= 25) {
                context.moveTo(0, 0); 
                context.lineTo((32/25) * n, 0);
            } else if (n <= 50) {
                context.moveTo(0, 0); 
                context.lineTo(32, 0);
                context.moveTo(32, 0); 
                context.lineTo(32, (32/25) * (n-25));
            } else if (n <= 75) {
                context.moveTo(0, 0); 
                context.lineTo(32, 0);
                context.moveTo(32, 0); 
                context.lineTo(32, 32);
                context.moveTo(32, 32); 
                context.lineTo(-((32/25) * (n-75)), 32);
            } else if (n <= 100) {
                context.moveTo(0, 0); 
                context.lineTo(32, 0);
                context.moveTo(32, 0); 
                context.lineTo(32, 32);
                context.moveTo(32, 32); 
                context.lineTo(0, 32);
                context.moveTo(0, 32); 
                context.lineTo(0, -((32/25) * (n-100)));
    
            }
            context.stroke();
            favicon.href = canvas.toDataURL('image/png');

        if (n === 100) return clearInterval(loadingInterval);
        n++;
    }
}
