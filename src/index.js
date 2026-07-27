const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'cloud-cost-optimizer-nodejs-express-v2026-10',
        category: 'Cloud Cost & Infrastructure Monitor',
        tech: 'JavaScript / Node.js Express API',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[cloud-cost-optimizer-nodejs-express-v2026-10] Service listening on port ${PORT}`);
});
