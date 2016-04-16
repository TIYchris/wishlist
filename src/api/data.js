import api from 'api/api';
import store from 'store';

api.new('http://whispering-lake-27656.herokuapp.com/api/');
// api.new('http://10.68.0.26:8000/api/');

export function login(user, pass) {
  return api.login(user, pass);
}

export function addNewUser(username, password, cb){
	return api.post('users/', {username:username, password:password}).then(function(){
	  api.login(username, password).then(function(){
	     cb();
	  }).catch(function(err){
	    console.log(err);
	  });
	}).catch(function(err){
	  console.log(err);
	});
}

export function getLists() {
	return api.get('lists/')
		.then(function(result) {
			var lists = result.data.results;

			store.dispatch({
				type: "LISTS_UPDATED",
				lists
			});

			return lists;
		});
}

export function getPledges() {
	return api.get('pledges/')
		.then(function(result) {
			var pledges = result.data.results;

			store.dispatch({
				type: "PLEDGES_UPDATED",
				pledges
			});

			return pledges;
		});
}
