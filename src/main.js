/**
 * /main.js
 * tcbb
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function openMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      contextIsolation: true
    }
  });

  let mainUrl = url.pathToFileURL(path.join(__dirname,'mainWindow.html'));
  mainWindow.loadURL(mainUrl.href);

  // open devtools
  mainWindow.webContents.openDevTools();

  // quit app when main window closes
  mainWindow.on('closed', () => {
    win = null;
    app.quit();
  });
}

app.on('ready', openMainWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
  // check if user is on mac
  // - on mac the app stays active until explicitly quit
  if(process.platform !== 'darwin') {
    // not mac, just quit
    app.quit();
  }
});