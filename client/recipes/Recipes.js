Template.Recipes.onCreated(function(){
	var self = this;
	self.autorun(function(){
		//suscribe class 'recipe' que esta en 'Recipes.html', (para que muestre las recetas)
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});