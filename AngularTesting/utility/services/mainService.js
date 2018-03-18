app.service('myService', ['$http',function ($http) {
    
    this.mode = 'service';

    this.getUserData = function getEmails() {
        return $http.get('https://jsonplaceholder.typicode.com/posts/1');
      };

    this.getUserData().then(function (response) {
        // use response
        console.log(response);
      });
      
}]);