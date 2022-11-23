function update(){

    let formData = readFormData();
    if(selectedRow != null){

      updateRecord(formData);
      resetForm();
    };
};

let readFormData = ()=>{
  let formData={};
    formData["edit-name"]=document.getElementById('edit-name').value;
    formData["edit-phone"]=document.getElementById('edit-phone').value;
      return formData;
};

let resetForm = ()=>{
  document.getElementById("edit-name").value = "";
  document.getElementById("edit-phone").value = "";
    selectedRow = null;

};

function onEdit(td, rowId){
  selectedRow=td.parentElement.parentElement;
  document.getElementById("edit-name").value=selectedRow.cells[1].innerHTML;
  document.getElementById("edit-phone").value=selectedRow.cells[2].innerHTML;
  document.getElementById("edit-rowId").value=rowId;
};

let edit = () => {
  let name = document.getElementById('edit-name').value;
  let phone = document.getElementById('edit-phone').value;

  let contact = array.filter(f=>f.telephone === phone);
  console.log("contact:", contact);
};

let updataRecord = ()=>{
  selectedRow.cells[1].innerHTML = document.querySelector(".edit-name").value;
  selectedRow.cells[2].innerHTML = document.querySelector(".edit-phone").value;
};

let id = array.length +1;

function onDelete(td, rec){
  
  if(confirm("Are You Sure?")){
      row = td.parentElement.parentElement;
      document.getElementById("formlist").deleteRow(row.rowIndex);  
    
        let filter = array.filter((a,i)=>{
          if(rec == a.id){
            array.splice(i,1);
            buildTable();
          };
        });
      };
    };