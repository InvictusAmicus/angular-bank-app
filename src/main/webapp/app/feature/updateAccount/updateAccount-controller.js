(function() {

    var UpdateAccountController =  function($log, accountService) {
	    
	    var vm = this;	    
	    
	    $log.log("updateAccountController");
	    
	    vm.submit = function()
	    {
	    	$log.log("Update Attempt");
	    	$log.log("fName: " + vm.fName);
	    	$log.log("lName: " + vm.lName);
	    	$log.log("AccNo: " + vm.accNo);
	    	accountService.updateAccount(vm.fName, vm.lName, vm.accNo)
	    	.then(function(results)
	    	{
	    		$log.log("Works?:" + results);
	    	},
	    	function (error)
	    	 {
                vm.error = true;
                vm.errorMessage = error;
                $log.log("Fails: ");
                $log.log(vm.errorMessage);
            }
	    	);
	    };
	};
	
	angular.module('accountApp').controller('updateAccountController', ['$log', 'accountService', UpdateAccountController]);
}());