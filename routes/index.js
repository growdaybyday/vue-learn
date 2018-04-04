var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*.html', function(req, res, next) {

	var url = req.url.substring(1,req.url.indexOf('.html'));

	res.render(url,{title:'하이뉴카', bodyId:url, js:url+'.js'});

});

module.exports = router;
