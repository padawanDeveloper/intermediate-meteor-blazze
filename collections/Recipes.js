Recipes = new Meteor.Collection('recipes');

RecipesSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Nombre"
	},
	desc: {
		type: String,
		label: "Descripción"
	},
	author: {
		type: String,
    	label: "Author",
		autoValue: function(){
			return this.userId
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		}
	}
});

Recipes.attachSchema(RecipesSchema);