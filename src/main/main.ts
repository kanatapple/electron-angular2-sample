'use strict';

const electron = require('electron');
const {app, BrowserWindow} = electron;

// Set the environment
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

let win: Electron.BrowserWindow;

function createWindow(): void {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        transparent: false,
        // titleBarStyle: 'hidden'
    });
    
    // Load the index.html of the app
    win.loadURL(`file://${__dirname}/index.html`);
    
    // Open the DevTools.
    // win.webContents.openDevTools();
    
    win.setAlwaysOnTop(true);
    win.setVisibleOnAllWorkspaces(true);
    // win.setIgnoreMouseEvents(true);
    
    win.on('closed', () => {
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});