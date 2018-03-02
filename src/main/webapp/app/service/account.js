"use strict";

(function () {

    
    function AccountService ($log, $state, accountDal) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.addAccount = function(fName, lName, accNo)
        {
        	$log.log("AccountService addAccount");
        	var json = JSON.parse("{\"firstName\":\""+fName
        	+"\",\"secondName\":\""+ lName
        	+"\",\"accountNumber\":\""+ accNo
        	+"\",\"transactions\": []}");
        	
        	$log.log("account: " + json);
        	
        	return accountDal.saveAccount(json);
        };
        
        this.updateAccount = function(fName, lName, accNo)
        {
	        $log.log("AccountService updateAccount");
        	var json = JSON.parse("{\"firstName\":\""+fName
        	+"\",\"secondName\":\""+ lName
        	+"\",\"accountNumber\":\""+ accNo
        	+"\",\"transactions\": []}");
        	
        	$log.log("account: " + json);
        	return accountDal.updateAccount(json);
        };
        
        
    }
    
    angular.module("accountApp").service("accountService", ['$log', '$state', 'accountDal', AccountService]);

}());