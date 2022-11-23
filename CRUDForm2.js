let array = [
  {id:"1", name:"Mike", telephone:"09118525"},
  {id:"2", name:"Emmy", telephone:"5054543"},
  {id:"3", name:"James", telephone:"345245"},
  {id:"4", name:"Cristian", telephone:"0572727"},
  {id:"5", name:"Sarah", telephone:"724521"},
  {id:"6", name:"Sam", telephone:"45252210"},
  {id:"7", name:"Camelia", telephone:"27876"},
  {id:"8", name:"Kevin", telephone:"877274"},
  {id:"9", name:"JJ", telephone:"9742240"},
  {id:"10", name:"Simon", telephone:"07587"},
  {id:"11", name:"Tobi", telephone:"052787"},
  {id:"12", name:"Vik", telephone:"785334"},
  {id:"13", name:"Harry", telephone:"05451"},
  {id:"14", name:"Josh", telephone:"0254236"},
  {id:"15", name:"Ethan", telephone:"0123987"},
  {id:"16", name:"Elon", telephone:"091263"},
  {id:"17", name:"Talia", telephone:"3333"},
  {id:"18", name:"Stephen", telephone:"66666"},
  {id:"19", name:"Mat", telephone:"145287"},
  {id:"20", name:"Tina", telephone:"9876325"},
  ];


let buildTable = ()=>{
  let table = document.getElementById('tablearray')
  table.innerHTML = "";
  for (let i in array){
    let row =`<tr id="tr-${array[i].id}">
               <td>${+i+1}</td>
               <td>${array[i].name}</td>
               <td>${array[i].telephone}</td>
               <td>
               <button class="col-sm-4 btn btn-class" onClick="onEdit(this, ${array[i].id})" data-bs-toggle="modal" data-bs-target="#static" id="edit-button">
                   Edit</button><br>
               <button class="col-sm-4 btn button-class mt-2" onClick="onDelete(this, ${array[i].id})">
                   Delete</button>
               </td>
              </tr>`

    table.innerHTML += row
  };
};

  buildTable();


array.forEach(arrayupdate);

function arrayupdate(phoneNumber, name) {
  for(let item of array) {
    if(item.telephone == phoneNumber){
      item.name = name;
      break;
    };
  };
};

let addToArray = (pdi, phone, name)=> {
  array.push({"id": pdi, "name": name, "telephone": phone});
};

$("#save-edit").on("click", function(){
  let phone = $("#edit-phone").val();
  let name = $("#edit-name").val();
  let rowId = $("#edit-rowId").val();

  arrayupdate(phone, name);
  updateRow(rowId, name);
});

let updateRow = (rowId, name)=> {
  
  let tr = $("#tablearray > #tr-" + rowId);
  let tds = $(tr).children();
  tds[1].innerHTML = name;
};

let index = array.length +1;

function append(){

  let esm = $("#name").val();
  let mobile = $("#mobile").val();
 
  let htm = `<tr id="tr-${index}">`;
  htm += `<td>${index}</td>`;
  htm += `<td>${esm}</td>`;
  htm += `<td>${mobile}</td>`;
  htm += `<td>
            <button class="col-sm-4 btn btn-class" onClick="onEdit(this, ${index})" data-bs-toggle="modal" data-bs-target="#static" id="editData">
                Edit</button><br>
            <button class="col-sm-4 btn button-class mt-2" onClick="onDelete(this, ${index})">
                Delete</button>
         </td>`;
  htm += "</tr>";

  addToArray(index, mobile, esm);

  index ++;

  $("#formlist > tbody").append(htm);
  closeModal();
};

closeModal = () => {
  $("#staticBackdrop").modal('hide');
  $("#name").val("");
  $("#mobile").val("");
};