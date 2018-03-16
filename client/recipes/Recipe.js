Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
		let v=this.inMenu;
		console.log(v);
	}
});