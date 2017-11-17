var ContactController = function ($location){
    var vm = this;
    vm.a = 10;
    vm.sendMessage = function(){
        $location.path('/contact-success');
    }

};

app2.controller('ContactController', ['$location' , ContactController])