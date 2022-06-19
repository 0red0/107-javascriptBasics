document.body.style = "box-sizing:border-box;";
document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.fontFamily = "Arial";
//wrapper
let wrapper = document.createElement("div");
wrapper.style.cssTest = "margin: 0; padding: 0;";
wrapper.style = "box-sizing:border-box;";

document.body.append(wrapper);

//nav bar "top"
let navigation = document.createElement("nav");
let logo = document.createElement("h1");
let list = document.createElement("li");

list.textContent = `${`Home  |  About  | Service  |  Contacts`}`;
list.style.cssText = "font-weight:bold; font-size:18px; list-style:none;";
logo.textContent = "Elzero";
logo.style.cssText = "font-weight:bold; color:green;";
navigation.style = "box-sizing:border-box;";

navigation.append(logo, list);
wrapper.append(navigation);

navigation.style.cssText =
  "background-color: #F6E3C5;display:flex;justify-content:space-between;padding:0 30px;align-items:center;";

//content "middle"
let content = document.createElement("div");

for (let i = 0; i < 15; i++) {
  let sProducts = document.createElement("div");
  content.append(sProducts);
  sProducts.style.cssText =
    "background: #1f2937; border-radius:8px;display:flex;flex-direction:column;justify-content:center;align-items:center;word-spacing: 100vw;";

  let sNum = document.createElement("span");
  let myText = document.createTextNode(`${[i + 1]}`);
  sNum.style.cssText = "font-size:38px;white;color: #f9faf8;text-size:33px;";
  sNum.appendChild(myText);
  sProducts.appendChild(sNum);

  let sProduct = document.createElement("span");
  sProduct.textContent = "Product";
  sProduct.style.cssText = "white;color: #f9faf8;font-size:22px;opacity:.7";
  sProducts.appendChild(sProduct);

  content.appendChild(sProducts);
}
wrapper.appendChild(content);

content.style.cssText =
  "background-color:#E7AB79;display:grid;grid-gap:10px;grid-template-columns:repeat(3,1fr);height: 100vh;padding:10px";

//footer
let footer = document.createElement("footer");
footer.textContent = "Copyrights 2021";
footer.style = "box-sizing:border-box;";

footer.style.cssText =
  "font-size:22px;color:white;background-color:green;text-align:center;height:8vh;padding-top:20px;";
wrapper.appendChild(footer);
