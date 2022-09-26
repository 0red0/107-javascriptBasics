//ATt1
// const p = new Promise((resolve, reject) => {
//    let r = new XMLHttpRequest();
//    r.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//          resolve(JSON.parse(this.responseText))
//       } else {
//          reject(Error("failed"))
//       }
//    }
//    r.open("GET", "../promiseJSON.json")
//    r.send();
// }).then((res) => {
//    for (let i = 0; i < res.length; i++) {
//       let markUp = `
//       <div>
//       <h3>${res[i].title}</h3>
//       <p>${res[i].description}</P>
//       </div>
//       `;
//       document.body.innerHTML += markUp;
//       document.body.append(
//          document.createElement("hr")
//       )
//    }

// }).catch((rej) => console.log(rej))



//ATt2

// async function data() {
//    try {
//       let d = await fetch("./promiseJSON.json")
//       d = await d.json();

//       for (let i = 0; i < d.length; i++) {
//          let markUp = `
//          <div>
//          <h3>${d[i].title}</h3>
//          <p>${d[i].description}</P>
//          </div>
//          `;
//          document.body.innerHTML += markUp;
//          document.body.append(
//             document.createElement("hr")
//          )
//       }
//    }
//    catch { (rej) => console.log(rej) }
//    finally { console.log("done") }
// }
// data()







//ATt3
//i can add if for rejection and use catch already setup to catch it.

fetch("./promiseJSON.json")
   .then(d => d.json())
   .then(e => {
      for (let i = 0; i < e.length; i++) {
         let markUp = `
         <div>
         <h3>${e[i].title}</h3>
         <p>${e[i].description}</P>
         </div>
         `;
         document.body.innerHTML += markUp;
         document.body.append(
            document.createElement("hr")
         )
      }
   })
   .catch((rej) => console.log(rej))
   .finally(console.log("done"))
