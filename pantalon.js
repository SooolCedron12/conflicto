var pantalon = {
    color : "negro",
    talle : 36,
    corto : false    
}

if (pantalon.talle>34) {

switch (pantalon.corto) {
    case false:
        console.log("me compro este pantalon");
        break;

    default:
        console.log("prefiero un pantalón largo");
        break; 
}


console.log("si es chico");

}
    

console.log(pantalon);
