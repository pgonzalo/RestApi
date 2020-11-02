const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Gon",
        "website": "Gon.com"
    };
    res.json(data);
});

module.exports = router;