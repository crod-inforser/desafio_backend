## Desafio walmart backend

### Installation

```
make database-up
make populate-db
npm i
```

### Test

```
npm run test
```

### Run develop

```
npm run dev
```

### Run build

```
npm run build
```
### Deploy heroku

```
heroku stack:set container -a NOMBRE_PROYECTO
heroku container:push web -a NOMBRE_PROYECTO
heroku container:release web -a NOMBRE_PROYECTO
```

