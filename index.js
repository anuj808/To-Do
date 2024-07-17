let mylist =[];
function addinto(){
    const todoElement= document.querySelector('.Todo');
    let todoname = todoElement.value;
    console.log(todoname);
    mylist.push(todoname);
    console.log(mylist);
    document.querySelector('.result').innerHTML=mylist
    console.log(mylist);
    todoElement.value='';
 }

 function deletefrom(){
    mylist.splice(0,1);
    console.log(mylist);
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = mylist.join('<br>');
 }