import { ReactiveVar } from 'meteor/reactive-var';

Template.Recipe.onCreated(function editMode(){
	this.editMode = new ReactiveVar(false);
	
	//Lo de arriba es lo mismo que esto 
	//this.editMode= new ReactiveVar();
	//this.editMode.set(false)
	console.log('paso primeron1');
});

Template.Recipes.helpers({
	updateRecipeId: function(){
		return Rthis._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
		console.log('desplegue form');
	}
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function(){
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template){
		Session.set('editMode', !Session.get('editMode'));
		//template.editMode.set(true);
		console.log('segundo');
	}
});