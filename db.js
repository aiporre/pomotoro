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

let db = getConn()
closeConn(db)
