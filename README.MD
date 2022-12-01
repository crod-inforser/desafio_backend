deploy on heroku

heroku stack:set container -a desafio-backend-crod
heroku container:push web -a desafio-backend-crod
heroku container:release web -a desafio-backend-crod

deploy on dev

make database-up && make populate-db
npm i && npm run dev