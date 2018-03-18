- copy bower.json and package.json into this folder
- open command promt inside this folder
- run >npm install
- run >npm start
- go to localhost:8000 in chrome


Note:
- the angular.js and anglar-route.js file should be pointing to bower_component/angular/angular.js &&
  to bower_component/angular-route/angular-route.js (bower_component is newly created folder)

- inside package.json make sure it is pointing correctly to index.html
	"start": "http-server -a localhost -p 8000 -c-1",    OR
	"start": "http-server -a localhost -p 8000 -c-1 ./app",

