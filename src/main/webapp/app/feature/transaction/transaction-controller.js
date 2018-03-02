(function() {

    var TransactionController =  function() {
    	var vm = this;
    	
    	vm.bestTrainer = "Shafeeq";
    	
    	vm.notBestTrainer = "Tadas";
    };

    angular.module('accountApp').controller('transactionController', [TransactionController]);
}());