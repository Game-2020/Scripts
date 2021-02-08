/*
# 手机硬件管家 (By Alex0510)
http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/sjyjgj.js
*/



const path1 = "/3.6.8/uicommon/getuser";
const path2 = "/1.0/uiforum/downloadwallpaper";


let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
    obj.data.expireTime = 7666655555,
    obj.data.isVip = true,
    obj.data.expExpireTime = 7666655555,
    obj.data.score = 999
}
if ($request.url.indexOf(path2) != -1){
obj = {
  "errno": 0,
  "errmsg": "OK",
  "data": "aXVNbR5r7cLe0FSpoXFuPw=="
}
}
$done({body: JSON.stringify(obj)});
