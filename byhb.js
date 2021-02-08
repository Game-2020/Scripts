/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 伴鱼绘本
https://picturebook.ipalfish.com/pfapi(/profile/picturebook/get|/base/growthsystem/user/vip/equity/get) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/byhb.js

[mitm]
hostname = picturebook.ipalfish.com
*/
var body = $response.body.replace(/\u0076\u0069\u0070\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0076\u0069\u0070\u0022\u003A\u0031').replace(/\u0063\u0061\u0074\u0065\u0022\u003A\u0030/g, '\u0063\u0061\u0074\u0065\u0022\u003A\u0031').replace(/\u0065\u0078\u0070\u0069\u0072\u0079\u0022\u003A\u0030/g, '\u0065\u0078\u0070\u0069\u0072\u0079\u0022\u003A\u0031')
$done({ body });
