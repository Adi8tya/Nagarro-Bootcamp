let addNote = document.querySelector("#addNote");
let submit = document.querySelector(".btn");
let allitems = document.querySelector(".allitems");
let count = 0;
var empty = true;
let check=()=>{
    if(allitems.innerHTML.trim()!==""){
        document.querySelector(".mainlynone").classList.add("hidden")
    }
    else
    document.querySelector(".mainlynone").classList.remove("hidden")
    
}
check()
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let value = addNote.value;
  if (value === "") alert("Note is Empty!");
  else {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.id = `item${++count}`;
    li.innerHTML = `<div id="notesdiv${count}" class="w-75"><p id="todo${count}" class="pt-2">${value}</p></div><div class="icon-set" id="allicons${count}"><i class="far fa-edit icon" id="edit${count}" onclick="edit(this.id)"></i> <i class="fas fa-trash-alt icon" id="delete${count}" onclick="deleteNote(this.id)"></i></div>`;
    addNote.value = "";
    allitems.appendChild(li);
    empty = false;
    check()
  }
});

 let edit=(id)=> {
  let counts = id[id.length - 1];
  let target = document.querySelector(`#todo${counts}`);
  let inputedit = document.createElement("input");
  inputedit.className = "form-control";
  inputedit.id = "inputedit${count}";
  inputedit.setAttribute("type", "text");
  inputedit.setAttribute("autofocus", "true");
  inputedit.value = target.innerHTML;
  target.replaceWith(inputedit);
  let edit=document.querySelector(`#edit${counts}`)
  let save=document.createElement(`i`)
  save.className="fas fa-save icon"
  save.id=`save${counts}`
  edit.replaceWith(save)
  save.addEventListener("click",()=>{
    let p=document.createElement("p")
    p.id=`todo${counts}`
    p.innerText=inputedit.value
    inputedit.replaceWith(p)
    save.replaceWith(edit)
  })

}

let deleteNote=(id)=>{
    let count = id[id.length - 1];
  let target = document.querySelector(`#item${count}`);
  target.remove()
  check()
}