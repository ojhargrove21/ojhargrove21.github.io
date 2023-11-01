var i = 0;
function ItemEnter(){
    var itemIn = document.getElementById("itemSearch").value;
    var list = document.getElementById("insertList");
    var li = document.createElement("li");
    li.class=i;
    var check = document.createElement("input");
    var del = document.createElement("button");
    var amt = document.createElement("input");
    amt.type = "text";
    del.innerText = "Delete";
    del.style.width = "20%";
    del.style.height = "90%";
    del.style.position = "relative";
    del.style.left = "10%";
    amt.position = "relative";
    amt.style.left = "20%";
    amt.style.width="10%";
    del.onclick = function(){
        var ul = this.parentNode.parentNode;
        ul.removeChild(this.parentNode);
    }
    
    li.style.height = "5%";
    li.style.width = "90%";
    check.type = "checkbox";
    del.classList.add("button");
    check.classList.add("checkboc")
    li.appendChild(check);
    li.appendChild(document.createTextNode(itemIn));
    li.appendChild(amt);
    li.appendChild(del);
    list.appendChild(li);
    i++;

}
function Del(v){
    
    
}
function Enter(event){
    if(event.keyCode === 13){
        ItemEnter();
        event.preventDefault();
    }
}