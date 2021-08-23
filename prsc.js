var myArr = [{id:'a'},{id:'myid'},{id:'c'}];
var index = myArr.findIndex(function(o){
     return o.id === 'myid';
})
if (index !== -1) myArr.splice(index, 1);
console.log(myArr);
