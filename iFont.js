/*
[mitm]
hostname = app.ilovechina.tech
[rewrite_local]
^https:\/\/app\.ilovechina\.tech\/api\.php url script-response-body https://raw.githubusercontent.com/Game-2020/Scripts/main/iFont.js
*/

var obj = JSON.parse($response.body);
    obj.state= "2222-12-12";
    $done({body: JSON.stringify(obj)});