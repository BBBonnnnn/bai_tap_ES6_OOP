class Person {
    loai='';
    hoTen='';
    diaChi='';
    ma='';
    email='';
    diemToan=0;
    diemLy=0;
    diemHoa=0;
    soNgayLamViec=0;
    luongTheoNgay=0;
    tenCongTy='';
    triGiaHoaDon=0;
    danhGia='';
    averageScore=()=>{
        let Score = (this.toan+this.ly+this.hoa)/3;
        return Score;
    };
    grossSalary=()=>{
        let grossSalary= (this.daysonjob * this.salary);
        return grossSalary;
    };  
}

// class Student extends Person{
//     toan=0;
//     ly=0;
//     hoa=0;
//     averageScore(){
//         let Score = (this.toan+this.ly+this.hoa)/3;
//         return Score;
//     }
// }

// class Employee extends Person{
//     daysonjob=0;
//     salary=0;
//     grossSalary(){
//         let grossSalary= (this.daysonjob * this.salary);
//         return grossSalary;
//     }
// }

// class Customer extends Person{
//     tenCongTy='';
//     giaTriGiaHoaDon=0;
//     danhGia='';
// }

// class ListPerson{
//     arrList=[];

//     addPerson(newperson){
//         this.arrList.push(newperson);
//         return this.arrList
//     }
//  SetListPerson = ()=>{
//     if(ARR_LIST_PERSON){
//         let arrListPerson=JSON.parse(localStorage.getItem('ARR_LIST_PERSON'))
//         this.arrListPerson=this.List;
//     }
//  }
// }

export {Person}
// export {Person,Student,Employee,Customer,ListPerson}