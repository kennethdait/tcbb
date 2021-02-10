# tcbb

> an node.js app built with electron, for the Seton Transfer Center & Bed Board

## app flow

Electron apps start with one `main` process.

This process loads multiple `BrowserWindow` instances that themselves are run by each their own `renderer` process.

1. entry point: `main.js`
	- should create the main app window as a `BrowserWindow` instance
	- this window can load in HTML web pages
	- this code file should also:
		- know to quit app when all windows have been closed
2. `main.js` loads the `mainWindow`, a `BrowserWindow` instance that will load in an HTML document that we'll create
3. create HTML web page (and assets)
	- `mainWindow.html`
	- `mainWindowStyles.css`
	- `mainWindowScripts.js`

