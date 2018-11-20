# tfl-telescope
http://dtylam.github.io/tfl-telescope

A simple web app for search by VehicleID on the Transport for London (TfL) network.

Tube lines/ vehicle queries have been well tested.

Limited support for other TfL vehicles/ lines.
For example, queries for bus vehicles (eg. LX58CFV,LX11AZB,LX58CFE) is possible.

## URL param shortcuts
Try these:
```
http://dtylam.github.io/tfl-telescope/?line=central
http://dtylam.github.io/tfl-telescope/?id=1
http://dtylam.github.io/tfl-telescope/?line={lineId}&id={vehicleId}
```

## Built with

TfL Unified API (http://api.tfl.gov.uk/)

Vue.js (http://vuejs.org/)

Vue Material (http://vuematerial.io/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Build and deploy to GitHub pages (a gh-pages branch) with vue-gh-pages https://www.npmjs.com/package/vue-gh-pages
```
npm run deploy
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
