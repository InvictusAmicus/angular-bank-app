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
        	var accounts;
        	accountDal.getAccounts().then(function(result)
			{
        		$log.log(result);
        		accounts = result;
        		var accountId;
            	$log.log("List of Accounts start:");
            	$log.log(accounts);
            	
            	$log.log("List of Accounts end");
            	var i;
            	
            	for (var acc in accounts)
            	{ 
            		$log.log(accounts[acc]);
            		$log.log(accounts[acc].accountNumber);
//        	    	$log.log("ACC.ACCNO: " + acc.accountNumber);
        	    	$log.log("ACCNO: "+accNo);

            		if(accounts[acc].accountNumber === accNo)
            	    {        	    	
            			$log.log("MATCH");
            	    	accountId = accounts[acc].id;
            	    }
            	}
    	        $log.log("AccountService updateAccount");
    	        var jsonString = "{\"id\":\"" + accountId
            	+"\",\"firstName\":\""+fName
            	+"\",\"secondName\":\""+ lName
            	+"\",\"accountNumber\":\""+ accNo
            	+"\",\"transactions\": []}";
    	        $log.log(jsonString);
            	var json = JSON.parse(jsonString);
            	
            	$log.log("account: " + json);
            	return accountDal.updateAccount(json);

			},
			function (error) {
                vm.error = true;
                vm.errorMessage = error;
                $log.log(error);
            }
			);
        };

        this.deleteAccount = function(account)
        {
	        $log.log("AccountService deleteAccount");
        	
        	$log.log("account: " + account);
        	return accountDal.deleteAccount(account);
        };
        
        
    }
    
    angular.module("accountApp").service("accountService", ['$log', '$state', 'accountDal', AccountService]);

}());