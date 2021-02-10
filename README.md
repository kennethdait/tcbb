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

## reference

### Node.js [docs](https://nodejs.org/api/index.html)


#### [`path` module](https://nodejs.org/api/path.html)

<dl>
<dt><a href="https://nodejs.org/api/path.html#path_path_join_paths">path.join()</a></dt>
<dd>joins given path segments together <em>using the platform-specific separator as a delimiter</em>, then it <em>normalizes</em> the resulting path.</dd>
</dl>

#### [`url` module](https://nodejs.org/api/url.html#url_the_whatwg_url_api)


<dl>
<dt><a href="https://nodejs.org/api/url.html#url_url_pathtofileurl_path">url.pathToFileURL(path)</a></dt>
<dd>joins given path segments together <em>using the platform-specific separator as a delimiter</em>, then it <em>normalizes</em> the resulting path.</dd>
</dl>


### electronjs [docs](https://www.electronjs.org/docs)

<dl>
<dt><a href="https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes">main and renderer processes</a></dt>
<dd>
	<blockquote>The Main process creates web pages by creating BrowserWindow instances. Each BrowserWindow instance runs the web page in its Renderer process. When a BrowserWindow instance is destroyed, the corresponding Renderer process gets terminated as well.</blockquote>
	<blockquote>The Main process manages all web pages and their corresponding Renderer processes.</blockquote>
	<blockquote>The Renderer process manages only the corresponding web page. A crash in one Renderer process does not affect other Renderer processes.</blockquote>
	<blockquote>The Renderer process communicates with the Main process via IPC to perform GUI operations in a web page. Calling native GUI-related APIs from the Renderer process directly is restricted due to security concerns and potential resource leakage.</blockquote>
	<blockquote>The communication between processes is possible via Inter-Process Communication (IPC) modules: ipcMain and ipcRenderer.</blockquote>
</dd>
<dt><a href="https://www.electronjs.org/docs/api/browser-window#class-browserwindow">Class: BrowserWindow</a></dt>
<dd>creates a new BrowserWindow with native properties as set by the options</dd>
</dl>