
var NinjaController = function ($http , getNinjasData){
    this.name = "Manish sharma";
    console.log(1, getNinjasData)
    this.ninjas = getNinjasData;

    this.removeNinja = function(ninja){
        var removedNinja = this.ninjas.indexOf(ninja);
        this.ninjas.splice(removedNinja, 1);
    };

    this.addNinja = function(){
        this.ninjas.push({
            name: this.newninja.name,
            belt: this.newninja.belt,
            rate: parseInt(this.newninja.rate),
            available: true
        });
            this.newninja.name = "",
            this.newninja.belt = "",
            this.newninja.rate = ""
    };
          
 

    this.removeAll = function(){
                this.ninjas = [];
    };        
    
 

   


//console.log(angular.toJson($scope.ninjas));
};

app2.controller('NinjaController',['$http','getNinjasData', NinjaController]);