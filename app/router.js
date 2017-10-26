'use strict';

module.exports = app => {

	  const auth = app.middleware.auth();


	  app.get('/', 'home.index');
	  app.get('/find','home.find');
	  app.get('/find2','home.find2');
	  app.get('/findAll','home.findAll');

	  app.post('/create','home.create');
	  app.post('/king','home.king');

	  app.get('/create2','home.create2');
	  app.get('/delete','home.delete');
	  app.get('/update','home.update');
	  app.get('/findNew','home.findNew');


	  app.post('/getDogs','dogs.getDogs');
	  app.post('/addDogs','dogs.addDogs');


	  
};
