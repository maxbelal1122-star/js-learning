// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Order is completed");
//   });
// };

// let promise = getPromise();
// promise.then(() => {
//   console.log("Promise is fulfilled");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//    resolve("success")
//       if (getNextData) {
//         getNextData();
//       }

//       resolve("Success");
//     }, 5000);
//   });
// }

// function asf1(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 3000);
//   });
// }
// function asf2(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 3000);
//   });
// }
// console.log("fetching data1");
function api(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("whether data");
      resolve(200);
    }, 3000);
  });
}
async function getWhether(){
  await api();
}

async function hi(){
console.log("hello");

}

