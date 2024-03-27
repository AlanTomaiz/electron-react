const { app, BrowserWindow } = require('electron')
const path = require('path')

const START_URL =
  process.env.ELECTRON_URL || `file://${path.join(__dirname, './index.html')}`

function createWindow() {
  const window = new BrowserWindow({
    // width: 1080,
    width: 1200,
    height: 600,
    // frame: false,
    resizable: false,
    transparent: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, './cura.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL(START_URL)
  window.webContents.openDevTools()
}

app.commandLine.appendSwitch('ignore-gpu-blacklist');
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-gpu-compositing');

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
