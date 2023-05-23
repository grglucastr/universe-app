FROM node:slim 

RUN npm install -g angular-http-server -y
RUN npm install -g @angular/cli -y

COPY . /usr/src/universe-app

WORKDIR /usr/src/universe-app

RUN ng build --configuration production

WORKDIR /usr/src/universe-app/dist/universe-app

EXPOSE 8889
 
CMD ["angular-http-server", "-p 8889"]

