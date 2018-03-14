import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc){
		return !!userId
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