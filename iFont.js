/*
[mitm]
hostname = app.ilovechina.tech
[rewrite_local]
^https:\/\/app\.ilovechina\.tech\/api\.php url script-response-body https://raw.githubusercontent.com/Game-2020/Scripts/main/iFont.js
*/

var body=$response.body;
body = body.replace(/"state\":0,'"state":1,');
body = body.replace(/"endtime\":null/g,'"endtime":"2222-12-12"');
$done(body);
