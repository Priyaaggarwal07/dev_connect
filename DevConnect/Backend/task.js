// 1. Print each element
const arr = [10, 20, 30, 40];

for (let val of arr) {
  console.log(val);
}
// 2. Sum of array
const arr = [1,2,3,4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
console.log(arr.reduce((a,b)=>a+b,0));
// 3. Maximum value
const arr = [5,1,9,3];
let max = arr[0];

for (let num of arr) {
  if (num > max) max = num;
}
console.log(max);
// 4. Minimum using reduce
const arr = [7,3,9,0];
const min = arr.reduce((m,v)=> v < m ? v : m, Infinity);
console.log(min);
// 5. Reverse array (manual)
const arr = [1,2,3];
let res = [];

for (let i = arr.length-1; i >= 0; i--) {
  res.push(arr[i]);
}
console.log(res);
// 6. Remove duplicates
const arr = [1,2,2,3,1];
let unique = [];

for (let val of arr) {
  if (!unique.includes(val)) {
    unique.push(val);
  }
}
console.log(unique);
// 7. Frequency count
const arr = ['a','b','a','c'];

const freq = arr.reduce((acc,val)=>{
  acc[val] = (acc[val] || 0) + 1;
  return acc;
},{});

console.log(freq);
// 8. Flatten array
const arr = [1,[2,3],4];

const flat = arr.reduce((acc,val)=>{
  return acc.concat(val);
},[]);

console.log(flat);
// 9. Rotate array
const arr = [1,2,3,4];
let k = 1;

k = k % arr.length;

const res = [...arr.slice(-k), ...arr.slice(0,-k)];
console.log(res);
// 10. Chunk array
const arr = [1,2,3,4,5];
let n = 2;

let res = [];
for (let i = 0; i < arr.length; i += n) {
  res.push(arr.slice(i, i+n));
}
console.log(res);
// 11. Remove falsy
const arr = [0,1,false,2,'',3,null];
console.log(arr.filter(Boolean));
// 12. indexOf manually
const arr = ['a','b','c'];
let target = 'b';

let index = -1;

for (let i=0;i<arr.length;i++){
  if(arr[i]===target){
    index = i;
    break;
  }
}
console.log(index);
// 13. Merge arrays
const a = [1,2];
const b = [3,4];

const res = [...a, ...b];
console.log(res);
// 14. Interleave
const a = [1,2];
const b = [10,20];

let res = [];
let max = Math.max(a.length,b.length);

for(let i=0;i<max;i++){
  if(a[i]!==undefined) res.push(a[i]);
  if(b[i]!==undefined) res.push(b[i]);
}

console.log(res);
// 15. Sliding window
const arr = [1,2,3,4];
let k = 2;

let sum = 0;
let res = [];

for(let i=0;i<k;i++) sum+=arr[i];

res.push(sum);

for(let i=k;i<arr.length;i++){
  sum += arr[i] - arr[i-k];
  res.push(sum);
}

console.log(res);
// 16. Range array
function range(start,end){
  let res=[];
  for(let i=start;i<=end;i++){
    res.push(i);
  }
  return res;
}
console.log(range(3,6));
// 17. Remove index
const arr = [1,2,3];
let i = 1;

const res = [...arr.slice(0,i), ...arr.slice(i+1)];
console.log(res);
// 18. Count condition
const arr = [5,12,8,20];

const count = arr.filter(x=>x>10).length;
console.log(count);
// 19. Unique sorted
const arr = [3,1,2,3,2];

const res = [...new Set(arr)].sort((a,b)=>a-b);
console.log(res);
// 20. Index map
const arr = ['a','b'];

const obj = arr.reduce((acc,val,i)=>{
  acc[i]=val;
  return acc;
},{});

console.log(obj);

// 21
const obj = {name:'Aman',age:22};
for(let key in obj){
  console.log(key, obj[key]);
}
// 22
const obj = {name:'Aman'};
const newObj = {...obj, role:'admin'};
// 23
const user = {name:'A', password:'x'};
const {password, ...rest} = user;
console.log(rest);
// 24
const res = {...a, ...b};
// 25
const obj = {a:1,b:2};

const res = Object.entries(obj).reduce((acc,[k,v])=>{
  acc[v]=k;
  return acc;
},{});
// 26
const clone = JSON.parse(JSON.stringify(obj));
// 27
Object.keys(obj).length;
// 28
const {name, role='user'} = obj;
// 29
function pick(obj, keys){
  return keys.reduce((acc,k)=>{
    acc[k]=obj[k];
    return acc;
  },{});
}
// 30
const {password, ...rest} = obj;
// 31
const newUser = {
  ...user,
  address: {...user.address, city:'New'}
};
// 32
const {fullName, ...rest} = obj;
const newObj = {name: fullName, ...rest};
// 33
const res = {...defaults, ...config};
// 34
Object.keys(obj).length === 0;

// 35 Total spending
const res = orders.reduce((acc,o)=>{
  acc[o.userId] = (acc[o.userId]||0) + o.total;
  return acc;
},{});
// 36 Filter completed
orders.filter(o=>o.status==='completed');
// 37 Join users
const userMap = Object.fromEntries(users.map(u=>[u.id,u]));

const res = orders.map(o=>({
  ...o,
  userName: userMap[o.userId]?.name || null
}));
// 38 Group orders
const res = orders.reduce((acc,o)=>{
  if(!acc[o.userId]) acc[o.userId]=[];
  acc[o.userId].push(o);
  return acc;
},{});
// 39 Top N
const res = [...orders]
.sort((a,b)=>b.total-a.total)
.slice(0,2);


// 40 Average per user
const temp = {};

orders.forEach(o=>{
  if(!temp[o.userId]) temp[o.userId]={sum:0,count:0};
  temp[o.userId].sum += o.total;
  temp[o.userId].count++;
});

const avg = {};
for(let id in temp){
  avg[id] = temp[id].sum / temp[id].count;
}

