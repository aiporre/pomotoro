const sqlite3 = require('sqlite3')

var getConn = () => {
  let db = new sqlite3.Database("./.db/task.db", (err) => {
    if (err) {
      return console.error(err.message);
	  }
	  console.log('Connected to the in-memory SQlite database.');
	});
	return db
};

var closeConn = (db) => {
	db.close((err) => {
    if(err){
			return console.error(err.message);
		}
		console.log('Closed the database connection');
	});
}; 


var createTask = (name, description, estimation ) => {
	task = {"name": name, 
		"description": description,
		"efford": 0 }
	let conn = getConn();
	db.run('INSERT INTO tasks(name, description, efford) VALUES(?,?,?)',
		[task.name, task.description, task.efford],
		(err) => {
			if(err){
				return console.error(err.message);
			};
			console.log(`A new task was created" with id ${this.lastID}`);
		}
	);
	closeConn(db);

}
let db = getConn();

db.run('CREATE TABLE tasks(task_id INTEGER PRIMARY KEY, name TEXT, description TEXT, efford INTEGER)', (err) => {
	if(err) {
		return console.error('Error when table created')
	};
	console.log('created table of tasks');
});

createTask("prepare lunch", "turn oven and insert frozen pizza", 10);
closeConn(db);

