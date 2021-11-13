const { menubar } = require('menubar');
const path = require("path");


const public_dir = path.join(__dirname, "public");
console.log(`public dir is: ${public_dir}`);

const mb = menubar({
	dir : public_dir,
	icon : path.join(public_dir, "icon.png")
});

mb.on('ready', () => {
  console.log('app is ready');
  // your app code here
});
