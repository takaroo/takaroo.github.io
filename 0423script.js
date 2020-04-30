let name ="Adam";
let sentence = name + "'S apples";
console.log(name);

//$('selector').action();
$("h2").text("We are having a break!");
$("section").html("ksjgnkjbn");
$("p").toggleClass("blue");
$("ul").append("<li>my name is adaom</li>");
//S$("ul").remove('<li id="speciallistitem">removeable something ffh</li>');
$('#add-button').click(() => {
    $("li").append("<li>my name is adaom</li>");

});
$('#remove-button').click(() => {
    $("li:last-child").remove();

});
 
let addbuttonhandler = () => {
    $("li").append("<li>my name is adaom</li>");

};

$('#add-buttonn').click(addbuttonhandler);

/*if(condition) {

} else{

}
*/

let age =99;

if(age<18){
    console.log("not old enough to drive");

}else{
    console.log(" old enough to drive");

}



let buttonhandler = () => {if (age<18){
    console.log("not old enough to drive");

}else{
    console.log(" old enough to drive");

}};

$('#buttonnn').click(buttonhandler);
