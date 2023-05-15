import {Person,Student,Employee,Customer,arrPerson} from "../model/OOP.js";

window.onload = ()=>{
    listPerson.getLocalStorage();
    listPerson.renderPerson('#tblSinhVien');
}

let listPerson = new arrPerson();
let listStudent = new Student();
let listEmployee = new Employee();
let listCustomer = new Customer();
document.querySelector('#btnThemSinhVien').onclick =(event)=>{
    event.preventDefault()
    let newPerSon= new Person();
    let arrInput= document.querySelectorAll('#frmSinhVien input,#frmSinhVien select');
    for(let input of arrInput){
        let{id,value}=input;
        newPerSon[id]=value;
    }
    // --------------------- validation------------------
    function duplicated(){
        if(listPerson.arrPerson.length===0){
            return true;
        }else{
            for( let value of listPerson.arrPerson){
                console.log('mã mảng',value.ma)
                console.log('mã mới',newPerSon.ma)
                if(value.ma===newPerSon.ma){
                    document.querySelector('#error-ma').innerHTML=`Trùng mã`;               
                    return false;
                }else{
                    document.querySelector('#error-ma').innerHTML=``;               
                }
            }
        }         
        return true; 
    } 
    
     let valid= true;
    valid = valid&checkEmail(newPerSon.email,'error-regex-email','Email')&checkNumber(newPerSon.ma,'error-only-nunber','Mã')&duplicated()
                &checkRong(newPerSon.hoTen,'error-required-tenSinhVien','Họ và tên')
                &checkRong(newPerSon.diaChi,'error-required-diaChi','Địa chỉ')
    if(!valid){
        return;
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
    document.getElementById("ma").disabled = true;

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
    document.getElementById("ma").disabled = false;
    document.getElementById("frmSinhVien").reset();
}

document.querySelector('#filter').oninput =(e)=>{
    let loai = e.target.value;
    console.log('111',loai)
    let arrBackup = [...listPerson.arrPerson];
    
        listPerson.filterPerson(loai);
    
    console.log('ssassa',listPerson)
    if(loai==='All'){
        listPerson.renderPerson('#tblSinhVien');
    }
    listPerson.arrPerson=arrBackup;
}


