(function () {
    angular.module("FarmJunction", [])
            .controller('ListController', function () {

                this.farmJunction = new Array();

                this.addItem = function () {

                    this.farmJunction.push({
                        listItem: this.data.itemToAdd,
                        completed: false
                    });
                    this.data.itemToAdd = '';

                    this.completeIt = function (veggies) {
                        veggies.completed = true;
                    };
                };
            });
})();


