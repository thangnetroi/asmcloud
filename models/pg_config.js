const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'dcuntjebhmtihn',
        password:'e5c658c386baea2ce78e66558121e53fe738845b832f4dcb5bbebd74bc555c5b',
        host:'ec2-44-199-22-207.compute-1.amazonaws.com',
        database:'d359iumajlk77i',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;