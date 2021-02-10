/**
 * /main.js
 * tcbb
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

app.on('loaded', () -> {
  mainWindow = new BrowserWindow({width:800,height:600});
}

