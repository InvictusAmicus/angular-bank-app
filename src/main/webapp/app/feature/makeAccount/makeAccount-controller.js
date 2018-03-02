(function() {

    var MakeAccountController =  function($log, accountService) {
	    
	    var vm = this;	    
	    
	    $log.log("MakeAccountController");
	    
	    vm.submit = function()
	    {
	    	$log.log("Submission Attempt");
	    	$log.log("fName: " + vm.fName);
	    	$log.log("lName: " + vm.lName);
	    	$log.log("AccNo: " + vm.accNo);
	    	accountService.addAccount(vm.fName, vm.lName, vm.accNo)
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
	
	angular.module('accountApp').controller('makeAccountController', ['$log', 'accountService', MakeAccountController]);
}());