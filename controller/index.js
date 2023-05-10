import { Person } from "../model/Person.js";
let arrPerson = [];

document.querySelector('#loai').onchange=()=>{
    let typePerSon= document.querySelector('#loai').value;
    console.log('sss',typePerSon)
    
   switch(typePerSon) {
        case "Student":
        document.querySelector('#soNgayLamViec').disabled = true;
        document.querySelector('#luongTheoNgay').disabled = true;
        document.querySelector('#tenCongTy').disabled = true;
        document.querySelector('#triGiaHoaDon').disabled = true;
        document.querySelector('#danhGia').disabled = true;
        break;
        case "Employee":
        document.querySelector('#diemToan').disabled = true;
        document.querySelector('#diemLy').disabled = true;
        document.querySelector('#diemHoa').disabled = true;
        document.querySelector('#tenCongTy').disabled = true;
        document.querySelector('#triGiaHoaDon').disabled = true;
        document.querySelector('#danhGia').disabled = true;
        break;
        case "Customer":
        document.querySelector('#diemToan').disabled = true;
        document.querySelector('#diemLy').disabled = true;
        document.querySelector('#diemHoa').disabled = true;
        document.querySelector('#soNgayLamViec').disabled = true;
        document.querySelector('#luongTheoNgay').disabled = true;
        break;
        case "Person Type":
        document.querySelector('#diemToan').disabled = false;
        document.querySelector('#diemLy').disabled = false;
        document.querySelector('#diemHoa').disabled = false;
        document.querySelector('#soNgayLamViec').disabled = false;
        document.querySelector('#luongTheoNgay').disabled = false;
        document.querySelector('#tenCongTy').disabled = false;
        document.querySelector('#triGiaHoaDon').disabled = false;
        document.querySelector('#danhGia').disabled = false;
        break;
   }
}
document.querySelector('#btnThemSinhVien').onclick =(event)=>{
    event.preventDefault()
    let newPerSon= new Person();
    let arrInput= document.querySelectorAll('#frmSinhVien input,#frmSinhVien select');
    for(let input of arrInput){
        let{id,value}=input;
        newPerSon[id]=value;
}
console.log(newPerSon)

    let strNewPerson=`
    <tr>
        <td>${newPerSon.ma}</td>
        <td>${newPerSon.hoTen}</td>
        <td>${newPerSon.diaChi}</td>
        <td>${newPerSon.email}</td>
        <td><button class="btn btn-danger">Xóa</button>
    </tr>

    `

    document.querySelector('#tblSinhVien').innerHTML+=strNewPerson;
    arrPerson.push(newPerSon);
    saveLocalStorage();
}


// Savelocalstorage
let saveLocalStorage =function(){
    let data =JSON.stringify(arrPerson);
    localStorage.setItem('ARR_PERSON',data);
}
window.renderPerson =function (arrInfo){
    let strperson =''
for(let person of arrInfo){
     strperson+=`
<tr>
    <td>${person.ma}</td>
    <td>${person.hoTen}</td>
    <td>${person.diaChi}</td>
    <td>${person.email}</td>
    <td><button class="btn btn-danger">Xóa</button>
</tr>

`
}
document.querySelector('#tblSinhVien').innerHTML=strperson;
}
// Getlocalstorage
let getLocalStorage =function(){
    let arrPerson = [];
    if(localStorage.getItem('ARR_PERSON')){
   let data = localStorage.getItem('ARR_PERSON');
     arrPerson =JSON.parse(data);}     
    renderPerson(arrPerson);
}
getLocalStorage();



