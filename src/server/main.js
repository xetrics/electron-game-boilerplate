const { app, BrowserWindow } = require("electron");
const path = require("path");
const { isDev } = require("./util");

require("dotenv").config();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            devTools: !isDev()
        }
    });

    win.loadFile(path.resolve(process.cwd(), "build/index.html"));
    win.removeMenu();
};

app.whenReady().then(() => {
    createWindow();
});