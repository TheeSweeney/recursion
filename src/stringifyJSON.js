// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var  stringifyJSON = function(obj) {
  // your code goes here
  var stringed = ["{"];
  var size = function(obj){
  	var out = 0, key;
  	for(key in obj){
  		out++;
  	}
  	return out;
  };
  if(Array.isArray(obj)){
  	var out = "";
  	if(obj.length){
  		for(var i=0; i<obj.length;i++){
  			if(i == (obj.length-1)){
  				out = out + stringifyJSON(obj[i]);
  			}
  			else{
  			out = out + stringifyJSON(obj[i]) + ",";
  		}
  		}
  		return '['+out+']';
  	}
  	else{
  	return '[]';
  }
  }
  if(typeof obj == "string"){
    return '"' + obj.toString() +'"';}
  if(typeof obj == "boolean"){
    return obj;}
  if(typeof obj == "number"){
    return "'" + obj + "'" ;}
  if(typeof obj === "object"){
    if(size(obj) === 0){return "{}"};
    var recursion = function(obj){
      if(size(obj) === 0){
        stringed = stringed.slice(0, stringed.length-1);
        stringed.push("}");
        stringed = stringed.join("");
        return stringed;
      }
      for( var key in obj){
        stringed.push('"' + key + '":');
        if(typeof obj[key] == "number"){
          stringed.push(obj[key], ",")
        }else{
        	stringed.push('"' + obj[key] + '"', ",");
        }
        delete obj[key];
        return recursion(obj);
    
      }
    };
    recursion(obj);
    return stringed;
  }
};



