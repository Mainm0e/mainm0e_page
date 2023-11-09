// api/proxy.js

const fetch = require('node-fetch');

module.exports = async(req, res) => {
    try {
        const externalApiResponse = await fetch('https://external-api.com/data');
        const data = await externalApiResponse.json();

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};