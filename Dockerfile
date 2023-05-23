FROM node:slim 

RUN npm install -g http-server -y
RUN npm install -g @angular/cli -y

COPY . /usr/src/planets-app

WORKDIR /usr/src/planets-app

RUN ng build --configuration production

EXPOSE 8889

CMD [ "http-server", "./dist/universe-app/", "-p 8889" ]

