const sql = require('mssql');

const config = {
    user: 'admin_convee',
    password: 'Mila2@@2',
    server: 'convee.database.windows.net', 
    database: 'convee',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (err) {
        console.error('Database connection failed: ', err);
        throw err;
    }
}

module.exports = { getConnection, sql };
