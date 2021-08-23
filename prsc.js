// var myArr = [{id:'a'},{id:'myid'},{id:'c'}];
// var index = myArr.findIndex(function(o){
//      return o.id === 'myid';
// })
// if (index !== -1) myArr.splice(index, 1);
// console.log(myArr);
var a=7;
var promise = new Promise(function(resolve, reject) {
     // do a thing, possibly async, then…
   
     if (a==7) {
       resolve("Stuff worked!");
     }
     else {
       reject(Error("It broke"));
     }
   });
   
   async function f() {
   let result= await promise;
   console.log(result);
   }

f();

//    promise.then(function(result) {
//      console.log(result); // "Stuff worked!"
//    }, function(err) {
//      console.log(err); // Error: "It broke"
//    });

// async function logFetch(url) {
//      try {
//        const response = await fetch(url);
//        console.log(await response.text());
//      }
//      catch (err) {
//        console.log('fetch failed', err);
//      }
//    }