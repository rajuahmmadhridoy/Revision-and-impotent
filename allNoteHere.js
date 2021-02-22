1, function
1.2: CallBack function
1.3: Arguments
2, Arrow function
3, String
4, speed operetor , concatenate multiLine multiple Array, arrau ,max 
5, class
6, Inheritance , extends class , super method
7, Destructure
8, map, filter, find
9, Closure
10, Array slice, splice, array join
11,break continue in a for loop
12,difference between bind, call and apply



/*******************************
        1,function
*******************************/

// function all note
// Function এ যদি দুইটা value  recive করে কিন্তু function call করছে একটি value দিয়ে তখন error ঠিক করতে হলে ২ য় যে recive করবে তাকে কিছু কাজ করে নিতে হবে
function add(num1, num2){
    num2 = Number  || 0 //akhane ami 0 disi akhane jekono value deya jabe jeta amar dorkar jodi value na pai tahole undefined dekhabe
    return num1 + num2;
}
or 
  function add(num1, num2 = 20){
      return num1 + num2;
  }

  const total = add(10)
  

  /*******************************
        1.2: CallBack function
*******************************/

function all(name,age,task) {
    console.log(name)
    console.log(age)
    task()
}

function handWash() {
    console.log('handWash')
}
function shawor() {
    console.log('shawor')
}

const rahim = all('rahim',20,shawor);
const kamal = all('kamal',50, handWash)


  /*******************************
        1.3: Arguments
*******************************/

function plus(num1,num2) {
    // console.log(arguments)
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        
        sum = sum + element;
    }
    console.log(sum)
}

plus(10,20,30)


/*******************************
        2, Arrow function
*******************************/
  
  * veriable use kore function
  
  const doubleIt = function muFun(num){
      return num * 5;
  }

  * Arrow function use veryable
   const doubleIt = nums => num * 2;

  * Arrow 2+ input hole 
  const add = (x, y) => x + y;
  
  *const give5 = () => 5;

  * Arrow multiline hole
  const arrrowMultiline = (x,y,z) =>{
      return x + y + z;
  }

/*******************************
            3, String
*******************************/
  
  const firstName = 'raju';
  const lastName = 'Hridoy';
  const fullName = firstName + " " + lastName + " " is a good cele;
  or
   const fullName2 = `${firstName} ${lastName} ${10+20+30} is a good cele`

   const multiLine = "I love you\n"
   +"I miss you\n"
   +"I need you\n"

   const multiLine2 = `I love you
        I miss you
        No i need you
   `
   console.log()


   /*******************************
4, spread operetor , concatenate multiLine multiple Array, arrau ,max 
*******************************/

const ages = [11, 12, 13, 14, 15, 16]
const ages2 = [17, 18, 19, 20]
const ages3 = [18, 19, 20, 21]

### using concat akadik array ke ak sathe ana
const allAges = ages.concat(ages2).concat(ages2).concat([5]).concat(ages3)

### using speed operetor last a 10 add kore disi
const allAges2 = [...ages,...ages2,...ages3,10]

### Array max
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business,minister,sochib)

### use soread operator
const takaPoisha = [650, 450, 250]
const maximum = Math.max(...takaPoisha);



   /*******************************
            5, class
*******************************/
class, constructor, create object from class

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.scholl = "amar school";
    }
}

const student1 = new Student(12, "raju ahmmad")
const student2 = new Student(1, "meheraj")



/*******************************
6, Inheritance , extends class , super method
*******************************/

class parent{
    constructor(){
        this.fatherName = "School Name"
    }
}

class child extends parent{
    constructor(sId, sName){
        super()
        this.id = sId;
        this.name = sName;
        this.scholl = "amar school";
    }
}

const baby1 = new Student(12, "raju ahmmad")
const baby2 = new Student(1, "meheraj")


#####################################
### jodi class a function use 

class parent{
    constructor(){
        this.fatherName = "School Name"
    }
}

class child extends parent{
    constructor(sId, sName){
        super()
        this.id = sId;
        this.name = sName;
        this.scholl = "amar school";
        getFullName(){
            return this.name + " " + this.fatherName;
        }
    }
}

const baby1 = new Student(12, "raju ahmmad")
const baby2 = new Student(1, "meheraj")



/*******************************
       7, Destructure
*******************************/
#### useing object

const person = {name:"raju ahmmad", age: 17, job:"facebook",address:"noakhali",
phone: '01879028959', friends:['meheraj','nabil'] }
const {phone, friends,name, age} = person;
console.log(phone)
// const gfName = person.friends;
// const phone1 = person.phone;

#### useing array
const friends = ['Meheraj','nabil','tareq','omar','masum']
const [first,second,thaird,...ses] = friends;




/*******************************
      8, map, filter, find
*******************************/

// number.map(function(element){
//     console.log(element * element)
// })

// const num = number.map(function(element){
//     return element * element;
// })
// console.log(num)

const number = [10, 20, 30, 40, 50, 60]

const result = number.map(x => x * x);
console.log(result)

// filter array dibe map o array dibe
const res = number.filter(x => x > 40)
//find sudu element dibe
const res2 = number.find(x => x > 40)
console.log(res)

const student = [
    {id: 21, name: 'omar sunny'},
    {id: 1, name: 'Mannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 2, name: 'Deepjol'}
];

// const pushValue = []
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     // console.log(element.name)
//     pushValue.push(element.name)
    
// }
// console.log(pushValue)

const res = student.map(x => x.name)
const Ids = student.map(x => x.id)
const bigger = student.filter(x => x.id > 20)
const bigger2 = student.find(x => x.id > 20)
console.log(bigger2)


/*******************************
      9, Closure
*******************************/
a video te akta question bole dise
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const result = stopWatch()
console.log(result())
console.log(result())
 const result2 = stopWatch()

 console.log(result2())
 console.log(result2())
 console.log(result2())
 console.log(result2())

console.log(result())
console.log(result())

/*******************************
10, Array slice, splice, array join
*******************************/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// akhane konta theke knta remove hobe seta 
// const part = nums.slice(2, 6)
// akahne index count kore kaj kore jemon 5 ar index 6 tai se 6 theke remove korse ar akta remove korbe tai 1 disi ar 50 60 70 agula notun kore add hobe
const remove = nums.splice(5,1, 50, 60, 70)
console.log(remove)
console.log(nums)

// join a ami caile (,) comma pull stop or je kono lekha add korte parbo
const together = nums.join(" ")
console.log(together)


/*******************************
11,break continue in a for loop
*******************************/
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 6) {
        break
    }
    console.log(element)
}

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element < 0) {
        continue
    }
    console.log(element)
}


/*******************************
12,difference between bind, call and apply
*******************************/
const normalPerson = {
    firstName: 'raju',
    lastName: 'ahmmad',
    salary: 10000,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// const res = normalPerson.chargeBill(1230)
// console.log(res)


const heroperson = {
    firstName: 'meheraj',
    lastName: 'ahmmad',
    salary: '15000'
}
//use bind
// const heroChargeBill = normalPerson.chargeBill.bind(heroperson)
// heroChargeBill(1500)
// heroChargeBill(100)
// console.log(heroperson.salary)

//call
// const heroChargeBill2 = normalPerson.chargeBill.call(heroperson, 1500, 200, 510)
// console.log(heroperson)

//apply
const herroChargeBill3 = normalPerson.chargeBill.apply(heroperson,[1200,100, 300])
console.log(heroperson)
// console.log(normalPerson)