document.getElementById("form").onsubmit = function(evt){
    localStorage.clear();
    evt.preventDefault();
    console.log(evt);
    let object = {};
    for (let i = 0; i < 7; i++) {
        object[evt.target[i].name] = evt.target[i].value;
    }
    localStorage.setItem("data", JSON.stringify(object));
}
window.onload =function(){
    if(localStorage.getItem("data")){
        let object = JSON.parse(this.localStorage.getItem("data"));
        let arr = ["name","secondname","fathername","email","password","date","gender"];
        arr.forEach(element => {
            if(document.getElementById(element))
            document.getElementById(element).value = object[element];
        });
    }
}
document.getElementById("name").onkeydown = function(evt){
    let regEx = /[A-Z]\w{3,7}/;
    if (!regEx.test(evt.target.value)){
        console.log(evt);
        console.log(evt.target.validity.valid);
        evt.target.validity.valid=false;
        document
        .getElementById("error")
        .innerHTML
    } else {
        evt.target.validity.valid = true;
        document
        .getElementById("error")
        .innerHTML=""
        console.log(evt.target.validity.valid);
    }
}