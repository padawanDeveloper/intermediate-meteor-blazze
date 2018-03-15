import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc){
		return !!userId
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
  	},
  	'ingredients.$': {
    	type: Object
  	},
  	'ingredients.$.name': {
    	type: String
  	},
  	'ingredients.$.amount': {
    	type: String
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

Recipes.attachSchema(RecipesSchema);