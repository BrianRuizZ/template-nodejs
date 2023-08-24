const { Router } = require('express')
const router = Router();

router.get('/test', (req,res) => {
    const data = {
        "name": "Brian",
        "web": "https://brianruizz.github.io/PortfolioBrianRuiz/"
    }
    res.json(data);
});

module.exports = router;
