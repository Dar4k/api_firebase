const objT_body=document.getElementById("t_body");

function getDataJson (){
const URI="https://api-rest-a46f2-default-rtdb.firebaseio.com/api/users.json";
fetch(URI).
then( (response)=>response.json()).
then( (data)=>createTable(data)).
catch( (error)=>console.error(error)).
finally( console.log("FINALIZACION FETCH"));
}

function createTable(json){
    objT_body.innerHTML="";
    var row="";
    var actionButton="";
    var actionForm="";

    for(let i=0; i<json.length; i++){
        actionButton='<div class="btn" role="group" aria-label="Basic mixed styles example" >'+
        '<button type="button" onclick="edit('+json[i].id+')" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>'+
        '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>'+
        '<button type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>'+
        '</div>';

        

    row+=
    '<tr>'+
    '<th >'+(i+1)+'</th>'+
    '<td>'+json[i].img+'</td>'+
    '<td>'+json[i].nickname+'</td>'+
    '<td>'+json[i].nombre+'</td>'+
    '<td>'+json[i].valor+'</td>'+
    '<td>'+actionButton+'</td>'+
    '</tr>';
    



    }
    objT_body.innerHTML=row;
}
window.addEventListener("load", ()=>{
    getDataJson ();
})

function edit(id){
    const urlFirebase= "";
    alert(id);
}




















// funcion Modal view//
// function viewUser(id, idUser) {
//     clearData(id);
//     formDisabled(id);
//     showModal();
//     alert("ID USER" + idUser);
// }

// funcion Modal edit//
// function editUser(id, idUser) {
//     clearData(id);
//     formEnable(id);
//     formEnableEdit(id);
//     showModal();
//     alert("ID USER" + idUser);
// }




// funcion Modal delete//

// function deleteUser(id) {
//     let getConfirm = window.confirm("Seguro desea Eliminar?");
//     if (getConfirm) {
//         alert("OK DELETE");
//     } else {
//         alert("ERROR DELETE");
//     }
// }