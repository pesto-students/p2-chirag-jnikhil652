class person  {
    name:'',
    teach : (sub)=>{
return `${this.name} is now teaching ${sub}`;

    }
}

let teacher = new person();
teacher.name = 'Nikhil Jadhav';
console.log(teacher.teacher('history'));