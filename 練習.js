$(function(){
	var english =["hair dryer","blinker","plastic bottle","laptop","gas station","flip flop"];
	english[0] = "hair dryer";
	english[1] = "blinker";
	english[2] = "plastic bottle";
	english[3] = "laptop";
	english[4] = "gas station";
	english[5] = "flip flop";

	$("#getbutton").click(function(){
	//document.writeln("Hair Dryer");
          $("#hairdryer").html(answer(x))
          });
});
function answer(n){
	var vocab =english[n];
	return vocab;
}
