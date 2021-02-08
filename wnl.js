/*
Unlocks by Cuttlefish 公众号：墨鱼手记

# 万年历 解锁会员权限 出门看下黄历今天是个好日子（20201028）
Qx.
https://r.51wnl-cq.com/Api/User/GetExtInfo url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnl.js

[mitm]
r.51wnl-cq.com
*/

var body = $response.body.replace(/\u006D\u0065\u006D\u0062\u0065\u0072\u0054\u0079\u0070\u0065\u0022\u003A\u0030/g, '\u006D\u0065\u006D\u0062\u0065\u0072\u0054\u0079\u0070\u0065\u0022\u003A\u0031').replace(/\u006D\u0065\u006D\u0062\u0065\u0072\u0044\u0061\u0074\u0065\u0022\u003A\u0022\u0031\u0039\u0037\u0030/g, '\u006D\u0065\u006D\u0062\u0065\u0072\u0044\u0061\u0074\u0065\u0022\u003A\u0022\u0032\u0030\u0032\u0039')
$done({ body });
