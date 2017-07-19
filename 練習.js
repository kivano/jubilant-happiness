// variable used for getting english answers
// 英語を得るための文字列
var english =["hair dryer","blinker","plastic bottle","laptop","gas station","flip flop"];

// variable used for identifying position in table
// どの列に英語を書くかを判別するための文字列
var ids = ["#hairdryer", "#blinker", "#pet", "#laptop", "#gasstation", "#flipflop"]


// Function used for showing English
// 英語を表示する関数
function showEnglish(x) {
	//document.writeln("Hair Dryer");
  $(ids[x]).html(answer(x))
}
function answer(n){
	var vocab =english[n];
	return vocab;
}
