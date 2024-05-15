const { getConnection } = require('./db');

async function executeQuery(query, params = []) {
    try {
        const pool = await getConnection();
        const request = pool.request();
        params.forEach((param, index) => {
            request.input(`param${index + 1}`, param);
        });
        const result = await request.query(query);
        return result.recordset;
    } catch (err) {
        console.error('SQL error: ', err);
        throw err;
    }
}

module.exports = { executeQuery };
