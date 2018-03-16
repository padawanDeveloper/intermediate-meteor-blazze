Template.RecipeSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		
		let id=FlowRouter.getParam('id');
		//suscribe class 'recipe' que esta en 'Recipes.html', (para que muestre las recetas enviando el id a publish.js)
		//al singleRecipe
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	//Nombre de la funcion para buscar por el id a la coleccion Recipes.js
	recipe: ()=> {
		let id=FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});