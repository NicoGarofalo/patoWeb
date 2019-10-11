var dict = {
    "flota" : "D:\\Usuario\\Desktop\\Patoweb\\patoflota.jpg"
};

function create_pic(route){
    console.log("En createpic");
    var pic = document.createElement("IMG");
    pic.setAttribute("src", route);
    pic.setAttribute("width", "1241");
    pic.setAttribute("height", "1221");
    pic.setAttribute("alt", "Patoflota");
    return pic;
}

function create_not_found_header(){
    var header = document.createElement("H1");
    var text = document.createTextNode("No hay pato :(.");
    header.appendChild(text);
    document.getElementById("body").appendChild(header);
}

function duck_in_dict(x){
    var route = dict[x];
    if (!route){
        create_not_found_header();
        console.log("rip");
        return;
    }
    var pic = create_pic(route);
    document.getElementById("body").appendChild(pic);
}

function duck_search() { 
    var input = document.getElementById("input");
    var x = input.value;
    if(x == ""){
        console.log("No hay nada");
    } else {
        console.log(x);
        duck_in_dict(x);  
    }  
}
