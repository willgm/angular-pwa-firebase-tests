# Angular PWA with Firebase Commands

## Building App with a Service Worker

ng new my-app --service-worker --routing

## Setup Lazy Load Routes

ng g m personagens --routing

ng g c personagens

## Setup App Shell

ng g universal my-universal

ng generate app-shell my-app-shell --universal-app=my-universal

## Building For SSR

ng build --prod --output-hashing none

ng build --app my-universal --prod --output-hashing none

## SSR on Firebase

### Setup Firebase

npm install -g firebase-tools

firebase login

### Init Hosting

firebase init hosting

```log
? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File dist/index.html already exists. Overwrite? No
```

firebase serve

firebase deploy

### Setup Server with Express

npm i express @angular/platform-server @nguniversal/module-map-ngfactory-loader
