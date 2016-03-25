// Wrapping my JS in a closure

(function(){

	var app = angular.module('store', []);

	// Controller names should always end in 'Controller'
	app.controller('StoreController', function(){

		// Contains what will be executed when our controller is called

		this.products = gem;

	});
		var gem = [{
					name: 'Dodecahedron',
					price: 2.95,
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ducimus at, debitis quas molestiae deserunt animi veritatis, explicabo maiores beatae, officia molestias corporis. Voluptatum dolor laborum maiores, aspernatur obcaecati aut!',
					canPurchase:true,
					soldOut:false
				},{
					name: 'Zentagonal Gem',
					price: 7.95,
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ducimus at, debitis quas molestiae deserunt animi veritatis, explicabo maiores beatae, officia molestias corporis. Voluptatum dolor laborum maiores, aspernatur obcaecati aut!',
					canPurchase:true,
					soldOut:false
				}]
			/*{
			name: 'Pentagonal',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ducimus at, debitis quas molestiae deserunt animi veritatis, explicabo maiores beatae, officia molestias corporis. Voluptatum dolor laborum maiores, aspernatur obcaecati aut!',
			canPurchase:true,
			soldOut:false
		}}*/


})();
