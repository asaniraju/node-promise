//var Promise=require('promise')

function getData(val, err){
	return new Promise(function(resolve, reject){
		if(err){
			reject(err)
		}
		resolve(val)
	})
}

getData("uma", "i am the error")
	.then(function(data){
		console.log(data)
	})
	.then(function(newData){
		console.log(newData)
	})
	.catch(function(err){
		console.log("this is error block");
		console.log(err);
	})
/*function service(){
	console.log(" I am a callback")
}

function sample(name){ // callback function
	name();
}

sample(service);*/