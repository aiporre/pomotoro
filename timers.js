
worktimer = (duration ) => {
	console.log('working...');
	console.log(`for ${duration} mili seconds`);
	return new Promise( (resolve, reject) => {
		setTimeout(() => {resolve('done working.')}, duration);
	});
}

breaktimer = (duration ) => {
	console.log('resting...');
	console.log(`for ${duration} mili seconds`);
	return new Promise( (resolve, reject) => {
		setTimeout(() => {resolve('done resting.')}, duration);
	});
}




worktimer(1000).
	then((x) => { 
		console.log(x);
		return breaktimer(300);
	}).
	then( (x) => { console.log(x); }).
	catch((err) => { console.err(err);})
