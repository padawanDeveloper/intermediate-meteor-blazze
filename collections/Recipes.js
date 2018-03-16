import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

IngredientSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Nombre"
	},
	amount: {
		type: String
	}
});


RecipesSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Nombre"
	},
	desc: {
		type: String,
		label: "Descripción"
	},ingredients: {
    	type: Array,
    	label: "Ingrese los ingredientes"
  	},
  	'ingredients.$': {
    	type: Object,
    	label:"ingrediente"
  	},
  	'ingredients.$.name': {
    	type: String,
    	label: "Nombre"
  	},
  	'ingredients.$.amount': {
    	type: String,
    	label:"cantidad"
  	},
  	inMenu:{
  		type: Boolean,
  		defaultValue: false,
  		optional: true,
  		autoform:{
  			type: "hidden"
  		}
  	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type:"hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type:"hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Recipes.update(id,{
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipesSchema);














