window.addEventListener("DOMContentLoaded",start);
window.onerror = function(message, source, line, column, error) {

	alert(message);
}


function start(){
	console.log("aaaa")
	alert("c");
	let piyo = 0;

	if(piyo == 0){
		
		throw new Error("えらーですね");
	}

}