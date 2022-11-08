const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'vvgjbllslmybmw',
        password:'b9472777314a894b9220488d7577541a17e686bf3a20dc215c1a11ba5924b02e',
        host:'ec2-52-5-110-35.compute-1.amazonaws.com',
        database:'d279ogvakn8t5b',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;