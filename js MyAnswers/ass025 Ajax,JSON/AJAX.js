let ajaxObject = new XMLHttpRequest();
ajaxObject.open('GET', './articles.json');
ajaxObject.send();


ajaxObject.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      let mainData = JSON.parse(this.responseText);
      console.log("Data Loaded")
      for (let i = 0; i < mainData.length; i++) {
         mainData[i].section = "All";
         console.log(i, mainData[i])
      }
      let updatedData = JSON.stringify(mainData);
      console.log(updatedData)

      let div = document.createElement("div");
      div.setAttribute = ("id", "data");

      for (let i = 0; i < mainData.length; i++) {
         let subDiv = document.createElement("div");
         let h2 = document.createElement("h2")
         let p1 = document.createElement("p")
         let p2 = document.createElement("p")
         let p3 = document.createElement("p")
         let hr = document.createElement("hr")
         h2.innerText = mainData[i].title;
         p1.innerText = "Contnet : " + mainData[i].content;
         p2.innerText = "Author : " + mainData[i].author;
         p3.innerText = "Catagories : " + mainData[i].section;
         subDiv.append(h2, p1, p2, p3, hr);
         div.append(subDiv);

      }
      document.body.append(div);
   }
}