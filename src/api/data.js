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
				lists: lists
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
				pledges: pledges
			});

			return pledges;
		});
}

export function addList(title, deadline){
	var payload = {
		title: title,
		deadline: deadline
	};

	return api.post('lists/', payload)
		.then(function() {
			getLists();
		});
}

export function getListDetails(id) {
	return api.get('lists/' + id)
		.then(function(result) {
			var listDetails = result.data;
			return listDetails;
		});
}

export function getItemDetails(id) {
	return api.get('items/' + id)
		.then(function(result) {
			var itemDetails = result.data;
			return itemDetails;
		});
}

export function addItem(){
	var payload = {
		title: title,
		price: price,
		description: description,
		item_url: item_url,
		image_url: image_url,
		visible: visible
	};

	return api.post('lists/' + id, payload)
		.then(function() {
			getItem();
		});
}
