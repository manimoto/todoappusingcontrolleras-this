

var messageService =  function($q){
    
            return { 
                getMessage : function(){
                return $q.when("Hello World!");
            }
        };
       
    }


app2.factory("messageService",messageService);    