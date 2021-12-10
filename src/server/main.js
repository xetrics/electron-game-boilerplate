const { app, BrowserWindow } = require("electron");
const path = require("path");
const { isDev } = require("./util");

require("dotenv").config();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            devTools: isDev()
        }
    });

    win.loadFile(path.resolve(process.cwd(), "build/index.html"));

    if(!isDev()) {
        win.removeMenu();
    } else {
        win.autoHideMenuBar = true;
        win.webContents.openDevTools();
    }
};

app.whenReady().then(() => {
    createWindow();
});