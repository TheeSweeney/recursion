// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var out = [];
	function search(scope){
		var nodes = scope.childNodes;
		for(var i = 0; i<nodes.length; i++){
			var classList = nodes[i].classList;
			if(classList !== undefined && classList.contains(className)){
				out.push(nodes[i]);
			}
			search(nodes[i])
		}
	}
	search(document);
	return out;
};
