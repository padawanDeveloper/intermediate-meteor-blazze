Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		//suscribe class 'recipe' que esta en 'Recipes.html', (para que muestre las recetas)
		self.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	}
});