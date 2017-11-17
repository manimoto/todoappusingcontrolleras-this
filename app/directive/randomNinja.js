var randomNinja = function(){
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '@'
        },
        templateUrl: 'app/templates/random.html',
        transclude: true,
        replace: true,
        controller: function(){
            this.random = Math.floor(Math.random()*4);
            console.log(this.random)
        },
        controllerAs: 'dir',
        bindToController: true
    };
    
    }
    
app2.directive('randomNinja',randomNinja);