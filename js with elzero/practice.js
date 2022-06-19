// Header
let myHeader = document.createElement("header"),
  headerLogo = document.createElement("div"),
  logoContent = document.createTextNode("Elzero"),
  // Header Menu
  menu = document.createElement("ul"),
  headerMenu1 = document.createElement("li"),
  headerMenuContent1 = document.createTextNode("Home"),
  headerMenu2 = document.createElement("li"),
  headerMenuContent2 = document.createTextNode("About"),
  headerMenu3 = document.createElement("li"),
  headerMenuContent3 = document.createTextNode("Service"),
  headerMenu4 = document.createElement("li"),
  headerMenuContent4 = document.createTextNode("Contact");

// Header And Menu Appending to Page
document.body.appendChild(myHeader);
myHeader.appendChild(headerLogo);
headerLogo.appendChild(logoContent);
myHeader.appendChild(menu);
menu.appendChild(headerMenu1);
headerMenu1.appendChild(headerMenuContent1);

menu.appendChild(headerMenu2);
headerMenu2.appendChild(headerMenuContent2);

menu.appendChild(headerMenu3);
headerMenu3.appendChild(headerMenuContent3);

menu.appendChild(headerMenu4);
headerMenu4.appendChild(headerMenuContent4);

// Body And Header And HeaderMenu Style

document.body.style.margin = "0px";
document.body.style.backgroundColor = "rgb(236,236,236)";
document.body.style.fontFamily = "Tahoma, Arial";

myHeader.className = "website-head";
myHeader.style.display = "flex";
myHeader.style.padding = "20px";
myHeader.style.backgroundColor = "rgb(255,255,255)";
myHeader.style.justifyContent = "space-between";
myHeader.style.alignItems = "center";

headerLogo.className = "logo";
headerLogo.title = "Website Logo";
headerLogo.style.fontWeight = "bold";
headerLogo.style.color = "rgb(35,169,110)";
headerLogo.style.fontSize = "26px";

menu.style.padding = "0px";
menu.style.margin = "0px";
menu.style.display = "flex";
menu.style.listStyle = "none";

headerMenu1.style.padding = "0px 10px 0px 10px";
headerMenu2.style.padding = "0px 10px 0px 10px";
headerMenu3.style.padding = "0px 10px 0px 10px";
headerMenu4.style.padding = "0px 10px 0px 10px";

headerMenu1.style.color = "gray";
headerMenu2.style.color = "gray";
headerMenu3.style.color = "gray";
headerMenu4.style.color = "gray";

// Landing

landingContent = document.createElement("div");
document.body.appendChild(landingContent);
landingContent.className = "content";
// Landing Style
landingContent.style.display = "flex";
landingContent.style.padding = "20px";
landingContent.style.flexWrap = "wrap";
landingContent.style.justifyContent = "center";
landingContent.style.gap = "20px";
landingContent.style.minHeight = "calc(100vh-142px)";
landingContent.style.boxSizing = "border-box";

for (let i = 1; i <= 26; i++) {
  (landingProduct = document.createElement("div")),
    (productContent = document.createElement("span")),
    (landingProductcContent = document.createTextNode("Product")),
    (productContentSpan = document.createTextNode(`${i}`));

  landingContent.appendChild(landingProduct);
  landingProduct.appendChild(productContent);
  productContent.appendChild(productContentSpan);
  landingProduct.appendChild(landingProductcContent);

  landingProduct.className = "product";

  // Product Style

  landingProduct.style.padding = "20px";
  landingProduct.style.backgroundColor = "rgb(255,255,255)";
  landingProduct.style.border = "1px solid rgb(221,221,221)";
  landingProduct.style.width = "calc((100% - 40px) / 3 )";
  landingProduct.style.boxSizing = "border-box";
  landingProduct.style.color = "rgb(136,136,136)";
  landingProduct.style.borderRadius = "6px";
  landingProduct.style.textAlign = "center";

  // Span Style

  productContent.style.fontSize = "40px";
  productContent.style.color = "black";
  productContent.style.fontWeight = "normal";
  productContent.style.display = "block";
  productContent.style.marginBottom = "10px";
  productContent.style.marginTop = "10px";
}

let myFooter = document.createElement("footer"),
  myFooterContent = document.createTextNode("Copyright 2021");

myFooter.className = "footer";
myFooter.style.backgroundColor = "rgb(35,169,110)";
myFooter.style.fontSize = "26px";
myFooter.style.textAlign = "center";
myFooter.style.padding = "20px";
myFooter.style.color = "rgb(255,255,255)";

document.body.appendChild(myFooter);
myFooter.appendChild(myFooterContent);
