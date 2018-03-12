FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/test', {
	name: 'test',
	action() {
		BlazeLayout.render('MainLayout', {main:'Test'});
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		BlazeLayout.render('MainLayout', {main:'Recipes'});
	}
});