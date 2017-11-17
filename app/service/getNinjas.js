var getNinjas = function($http){
    
    
  this.allNinja =  $http.get('app/data/data.json').then(onSuccess,onError);
    function onSuccess(response){
      console.log(12 , response.data)
      return response.data;
     
    };

    function onError(response){
        alert("Error");
    };

}

app2.service('getNinjas' , ['$http' , getNinjas])