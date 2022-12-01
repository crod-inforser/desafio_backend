FROM mongo:3.6.8

RUN rm /etc/apt/sources.list.d/mongodb-org.list
RUN apt-get update -y

RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -

RUN apt install nodejs -y

WORKDIR /app

COPY . .
RUN mongod | bash /app/populate/credentials.sh 
RUN npm i
RUN npm run build

CMD ["/bin/bash", "-c", "mongod | node /app/lib/app.js"]
