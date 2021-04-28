# quote-express
## Run dev version
__Build client__
```bash
  npm run clean:static
  npm run build:client
```
__Start server__
```bash
  npm start
```
## Run prod version
__Install pm2 manager first__
```bash
  npm install pm2@latest -g
```
__Remove old artifacts__
```bash
  npm run clean:all
```
__Build client__
```bash
  npm run build:client
```
__Build server__
```bash
  npm run build
```
__Start server__
```bash
  npm run prod
```