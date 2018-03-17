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
