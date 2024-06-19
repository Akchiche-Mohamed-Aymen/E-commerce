let featureds = document.getElementById("featureds");
let featured = (src , name = "NIKE JORDAN")=>{
    let div = document.createElement("div");
    let a = document.createElement("a");
    let a1 = document.createElement("a");
    let image = document.createElement("img");
    let h3 = document.createElement("h3");
    let h_3 = document.createElement("h3");
    div.className = "featured";
    a.href = a1.href = "#";
    a.innerHTML = "Sale"
    a1.innerHTML = `Add to card  <i class="fa-solid fa-arrow-right"></i>`
    image.src = src;
    h3.innerHTML = name;
    h_3.innerHTML = "149.99$";
    div.appendChild(a);
    div.appendChild(image);
    div.appendChild(h3);
    div.appendChild(h_3);
    div.appendChild(a1);
    return div;
}

let featurds = (src , name = "NIKE JORDAN")=>{
    let div = document.createElement("div");
    let a1 = document.createElement("a");
    let image = document.createElement("img");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    div.className = "featured";
    image.src = src;
    h3.innerHTML = name;
    p.innerHTML = "New Collection in 2024"
    a1.href = "#";
    a1.innerHTML = `Add to card  <i class="fa-solid fa-arrow-right"></i>`;
    let div2 = document.createElement("div");
    div2.appendChild(h3);
    div2.appendChild(p);
    div2.appendChild(a1);
    div.appendChild(div2);
    div.appendChild(image);
    return div;

}
for( i = 1 ; i < 4 ; i++)
    featureds.appendChild(featured(`IMAGES/featured${i}.png`));
for( i = 1 ; i <3 ; i++)
    featureds.appendChild(featurds(`IMAGES/collection${i}.png`));