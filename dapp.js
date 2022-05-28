const { menubar } = require('menubar');
const path = require("path");


const code_dir = path.join(__dirname, "src");
console.log(`public dir is: ${code_dir}`);

const mb = menubar({
	dir : code_dir,
	icon : path.join(code_dir, "icon.png")
});

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});

mb.on('show', () => {
  console.log('window has been showed');
});

