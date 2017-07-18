"use strict";

angular.module('app')
    .component('algo', {
        templateUrl : 'js/components/algo/algo.html',
        controller : Algo
    })

    function Algo($scope, $location) {
        this.page = "Algo";
        
    }
function friend(friends){
  var MyFriends = [];
  for(i=0; i<friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      MyFriends.push(friends[i]);
    }
  }
  
  return MyFriends
}    