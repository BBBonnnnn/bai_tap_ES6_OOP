class Person {
    loai='';
    arrPerson = [];
    hoTen='';
    diaChi='';
    ma='';
    email='';
    addPerson(newPerSon){
        this.arrPerson.push(newPerSon);
        return this.arrPerson;
    }
    renderPerson(selector){
        let strNewPerson = '';
        for(let person of this.arrPerson){
            // let{id,value}=person;
            // person[id]=value;
    
         strNewPerson+=`
        <tr>
            <td>${person.loai}</td>
            <td>${person.ma}</td>
            <td>${person.hoTen}</td>
            <td>${person.diaChi}</td>
            <td>${person.email}</td>
            <td><button class="btn btn-danger" onclick="deletePerson('${person.ma}')">Xóa</button>
                 <button class="btn btn-success" onclick="chinhSua('${person.ma}')">Sửa</button>
            </td>
        </tr>
        `;

    }
    document.querySelector(selector).innerHTML = strNewPerson;
    return strNewPerson;}
    saveLocalStorage(){
        let data =JSON.stringify(this.arrPerson);
        localStorage.setItem('ARR_PERSON',data);
    }

    getLocalStorage(){
        if(localStorage.getItem('ARR_PERSON')){
            let arrPerson = JSON.parse(localStorage.getItem('ARR_PERSON'));
            this.arrPerson = arrPerson;
        }
    }

    deletePerson(ma){
        let indexDel = this.arrPerson.findIndex(perSon =>perSon.ma == ma);
        if(indexDel !==-1){
            this.arrPerson.splice(indexDel,1);

            console.log(this.arrPerson);
            return true;
        }
        return false;
    }

    getInfo(ma){
        let updatePerson =this.arrPerson.find(person =>person.ma==ma);
        return updatePerson;
    }

    capNhat(maPerson,updatePerson){
        let personOfarr = this.getInfo(maPerson);
        if(personOfarr){
            for(let key in personOfarr){
                personOfarr[key] = updatePerson[key];
            }
            return true;
        }
        return false;
    }
    filterPerson(value){
        if(value!== 'All'){
            this.arrPerson = this.arrPerson.filter(person=>person.loai===value)
        }
        return this.arrPerson;
       }    
}
class Student extends Person{
    toan=0;
    ly=0;
    hoa=0;
    tinhDiemTrungBinh = function(){
        let DiemTrungBinh = (this.toan+this.ly+this.hoa)/3;
        return DiemTrungBinh;
    } 
}

class Employee extends Person{
    soNgayLamViec=0;
    luongTheoNgay=0;
    tinhLuong = function(){
        let tongLuong= (this.soNgayLamViec * this.luongTheoNgay);
        return tongLuong;
    }
}

class Customer extends Person{
    tenCongTy='';
    giaTriGiaHoaDon=0;
    danhGia='';
}

export {Person,Student,Employee,Customer}