// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'tester',
	DBPASSWORD: 'testing',
	DBHOST: 'ds054298.mlab.com:54298',
	DBNAME: 'kanban',
	SERVERNAME: 'dev-server'
}
// mongodb://<dbuser>:<dbpassword>@ds054298.mlab.com:54298/kanban

// MAPS env TO ACTUAL ENVIRONMENT
if (process.env.NODE_ENV == 'development') {
	Object.keys(env).forEach(v => {
		env[v] = process.env[v] || env[v]
	})
} else {
	Object.keys(env).forEach(v => {
		process.env[v] = env[v]
	})
}

// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env