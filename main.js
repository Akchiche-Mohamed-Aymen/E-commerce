let featureds = document.getElementById("featureds");
let women = document.querySelector(".women");
let createLink = ( val , href = "#" )=>{
    let a = document.createElement("a");
    a.href =  href;
    a.innerHTML = val;
    a.style.display = "flex";
    a.style.alignItems = "center";
    a.style.gap = "10px";
    return a;
}
let createImage = (src)=>{
    let image = document.createElement("img");
    image.src = src;
    return image;
}
createH3 =(val)=>{
    let h3 = document.createElement("h3");
    h3.innerHTML = val;
    return h3;
}
let createDiv = (src ,  cl = '' , name = "NIKE JORDAN")=>{
    let div = document.createElement("div");
    div.className = cl;
    div.appendChild(createLink("Sale"));
    div.appendChild(createImage(src));
    div.appendChild(createH3(name));
    div.appendChild(createH3("149.99$"));
    div.appendChild(createLink(`Add to card <i class="fa-solid fa-arrow-right"></i>`));
    return div;
}

let createDiv2 = (src , cl = '' ,  name = "NIKE JORDAN")=>{
    let div = document.createElement("div");
    let p = document.createElement("p");
    let div2 = document.createElement("div");
    div.className = cl ;
    p.innerHTML = "New Collection in 2024"
    div2.appendChild(createH3(name));
    div2.appendChild(p);
    div2.appendChild(createLink(`Add to card  <i class="fa-solid fa-arrow-right"></i>`));
    div.appendChild(div2);
    div.appendChild(createImage(src));
    return div;

}
for( i = 1 ; i < 4 ; i++)
    featureds.appendChild(createDiv(`IMAGES/featured${i}.png` ,  "featured"));
for( i = 1 ; i <3 ; i++)
    featureds.appendChild(createDiv2(`IMAGES/collection${i}.png` , "featured"));
let arr = ["Nike Free TR" , "Nike Free TR" , "Nike GS Pink" , "Nike GET 5" ]
for( i = 1 ; i <= 4 ; i++){
    let el = createDiv(`IMAGES/women${i}.png` , "woman");
    el.querySelector("h3").innerHTML = arr[i-1];
    el.removeChild(el.querySelector("a"));
    women.appendChild(el)
}
