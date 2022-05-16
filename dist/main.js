"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const platform_express_1 = require("@nestjs/platform-express");
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const httpsOptions = {
    key: fs.readFileSync('./secrets/private-key.pem'),
    cert: fs.readFileSync('./secrets/public-certificate.pem'),
};
const server = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    await app.init();
}
bootstrap();
http.createServer(server).listen(3000);
https.createServer(httpsOptions, server).listen(443);
//# sourceMappingURL=main.js.map