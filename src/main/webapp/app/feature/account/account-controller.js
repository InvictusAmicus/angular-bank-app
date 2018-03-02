"use strict";

(function() {

    var AccountController =  function(accountService, $state, $log) {
        
        $log.log("Account Controller Created");
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
       
        vm.updateRecord = function()
        {
        	$log.log("go to update");
        	$state.go('updateAccount');
        };
            
    };

    angular.module('accountApp').controller('accountController',   ['accountService','$state','$log', AccountController]);
}());