/*
[mitm]
hostname = app.ilovechina.tech
[rewrite_local]
^https:\/\/app\.ilovechina\.tech\/api\.php? url script-response-body https://raw.githubusercontent.com/Game-2020/Scripts/main/iFont.js
*/

var body=$response.body;
body = body.replace(/"endtime\":"2023-01-14"/g,'"endtime":"2222-12-12"');
body = body.replace(/"state\":"0"/g,'"state":"1"');
$done(body);
