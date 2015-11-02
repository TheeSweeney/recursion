// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var  stringifyJSON = function(obj) {
  // your code goes here
  var size = function(obj){
  	var out = 0, key;
  	for(key in obj){
  		out++;
  	}
  	return out;
  };
  if(typeof obj === "number"){return obj.toString();} //numbers
  else if(obj === null){return 'null';} //null
  else if(obj === true ){return 'true';}
  else if(obj === false ){return 'false';}//bools
  else if(typeof obj === "string"){return '"' + obj + '"';} //strings
  else if(Array.isArray(obj) === true){
  	var out = "";
  	if(obj.length){
  		for(var i=0; i<obj.length;i++){
  			if(i == (obj.length-1)){
  				out = out + stringifyJSON(obj[i]);
  			}else{
  			  out = out + stringifyJSON(obj[i]) + ",";
  			}
  		}
  		return '['+out+']';
  		}
  	else{
  	  return '[]';
  	}
  }
  else{
  	if(size(obj) === 0){return '{}'}
    var output = [];
    for(var key in obj){
      if (obj[key]!==undefined && typeof obj[key]!=="function"){
        output.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
  	}
  	output = output.join(",");
      return "{"+output+"}";
  }
};

