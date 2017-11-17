var MessageController =  function(message){
    console.log(message);
        this.message = message;
}

app2.controller('MessageController',['message', MessageController]);