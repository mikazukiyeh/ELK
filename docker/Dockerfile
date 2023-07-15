安裝node.js
FROM node  
 
RUN apt-get update && apt-get install -y nodejs

RUN npm install -g npm@latest
#安裝 Node.js & 最新版的npm
RUN apt-get update && apt-get install -y git
#安裝git
WORKDIR /app
#工作路徑
ADD . /app
#儲存路徑
VOLUME /app

RUN npm install -g @angular/cli
# 安装 Angular CLI
CMD bash
#容器啟動
