//========================设置参数========================
//设置nodejs端口
global.port = process.env.PORT || 3000;
//设置xr-ay路径
global.vmms = process.env.VPATH || 's300';
//设置xr-ay端口
global.vmmport = process.env.VPORT || '8001';
//设置ne-zha参数
global.nezhaser = process.env.NEZHA_SERVER || 'data.xuexi365.eu.org';
global.nezhaKey = process.env.NEZHA_KEY || 'fKUCSunMiZSBRlP2gA';
global.nezport = process.env.NEZHA_PORT || '443';
global.neztls = process.env.NEZHA_TLS || '--tls';
//设置ar-go的token
global.argoKey = process.env.TOK;
//设置文件下载路径
global.fpath = process.env.F_PATH || './app';
//设置xr-ay下载链接
global.url_amd = process.env.URL_BOT || 'https://github.com/dsadsadsss/d/releases/download/sd/c2-amd64';
global.url_arm = process.env.URL_BOT2 || 'https://github.com/dsadsadsss/d/releases/download/sd/c2-arm64';
