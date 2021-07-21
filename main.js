student_names=[];
function submit(){
  display_students= [];
for(var j=1;j<=4;j++){
    student_names.push(document.getElementById("student-"+j).value);
}
console.log(student_names);
for(var k=0;k<student_names.length ;k++){
    display_students.push("<h4>Name-"+student_names[k]+"</h4>");
document.getElementById("display_names_commas").innerHTML=display_students;
var remove_comma=display_students.join(" ");
document.getElementById("display_names_no_commas").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none"; 
document.getElementById("sort_button").style.display="inline-block";

}
}
function sorting(){
student_names.sort();
document.getElementById("display_names").innerHTML=student_names; 
}