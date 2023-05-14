import {Person,Student,Employee,Customer} from "../model/OOP.js";

window.onload = ()=>{
    listPerson.getLocalStorage();
    listPerson.renderPerson('#tblSinhVien');
}

let listPerson = new Person();
console.log('sss',listPerson)
document.querySelector('#btnThemSinhVien').onclick =(event)=>{
    event.preventDefault()
    let newPerSon= new Person();
    let arrInput= document.querySelectorAll('#frmSinhVien input,#frmSinhVien select');
    for(let input of arrInput){
        let{id,value}=input;
        newPerSon[id]=value;
    }
    listPerson.addPerson(newPerSon);
    listPerson.renderPerson('#tblSinhVien');
    listPerson.saveLocalStorage();
    document.getElementById("frmSinhVien").reset();
}

window.deletePerson=(idPerson)=>{
    if(listPerson.deletePerson(idPerson)){
        listPerson.renderPerson('#tblSinhVien');
        listPerson.saveLocalStorage();
    }
}

window.chinhSua =(ma)=>{
    let  updatePerson = listPerson.getInfo(ma);
    if( updatePerson ){
        let arrInput= document.querySelectorAll('#frmSinhVien input,#frmSinhVien select');
        for(let input of arrInput){
            let{id}=input;
            input.value=updatePerson[id];
        }
    }
    document.getElementById("btnThemSinhVien").disabled = true;

}

document.querySelector('#btnCapNhat').onclick=(event)=>{
    event.preventDefault();
    let updatePerSon= new Person();
    let arrInput= document.querySelectorAll('#frmSinhVien input,#frmSinhVien select');
    for(let input of arrInput){
        let{id,value}=input;
        updatePerSon[id]=value;
}
    listPerson.capNhat(updatePerSon.ma,updatePerSon);
    listPerson.renderPerson('#tblSinhVien');
    document.getElementById("btnThemSinhVien").disabled = false;
    document.getElementById("frmSinhVien").reset();
    
}

document.querySelector('#filter').oninput =(e)=>{
    let loai = e.target.value;
    console.log('111',loai)
    let arrBackup = [...listPerson.arrPerson];
    
        listPerson.filterPerson(loai);
    
    console.log('ssassa',listPerson)
    listPerson.renderPerson('#tblSinhVien');
    listPerson.arrPerson=arrBackup;
}


