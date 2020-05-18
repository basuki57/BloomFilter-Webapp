var items = [];

function add(){
    items.push(document.getElementById("AddInput").value);
    document.getElementById("AddInput").value = "";
    alert('Added!');
}

function myFunction() {
    var x = document.getElementById("searchText").value, f = 0, i = 0;
     // window.alert(typeof(items[0]));
     // window.alert(typeof(x));
    for(i = 0; i < items.length; i++) {
        if(x == items[i]){
        window.alert("Voila ELement Found!");
        f = 10;
    }
}
    if(f == 0) window.alert("Not Found. Please insert the element.");
            // window.alert(document.getElementById("searchText").value + items[2]);
    document.getElementById("searchText").value = "";    
}