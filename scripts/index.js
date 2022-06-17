import toppart from "../components/toppart.js";

let x=document.getElementById("first-top")
    x.innerHTML=toppart();

    import headertwo from "../components/header-2.js";

    let y=document.getElementById("header-2")
        y.innerHTML=headertwo();

        import footer from "../components/footer.js";

        let z=document.getElementById("footer")
            z.innerHTML=footer();

          /*  import footertwo from "../components/footertwo.js";

            let k=document.getElementById("footer-2")
                k.innerHTML=footertwo();
                */

/*
const targetDiv = document.getElementById("div1");
const btn = document.getElementById("p");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
const targetDiv1 = document.getElementById("div2");
const btn1 = document.getElementById("q");
btn1.onclick = function () {
    targetDiv1.style.display="none"
};

*/
let arr=JSON.parse(localStorage.getItem("beauty"))|| []
let beutydata=[
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",
    name:"Miss Claire Eyelash Glue - Clear Tone",
    price:322.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg",
    name:"Maybelline New York Fit Me Primer - Dewy+Smooth",
    price:521.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg",
    name:"L'oreal Paris Infallible Full Wear Concealer",
    price:735.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",
    name:"Faces Canada Ultime Pro Matte Play Eyeliner",
    price:604.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/c/bcf6c6c8904052434726__2_.jpg",
    name:"Colorbar Intensify Liquid Gel Eyeliner - Arabian Nights",
    price:699.00
  },

  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/618a4rcg7il._sl1500_.jpg",
    name:"Nyx Professional Makeup Pore Filler",
    price:1378.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/r/artboard_1_5.jpg",
    name:"Mamaearth Naturally Matte Lip Serum - Matte Liquid Lipstick With Vitamin C & E",
    price:539.00
  },

  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904052409748-2.jpg",
    name:"Colorbar Infinite 24hrs Eyeliner",
    price:651.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/0/800897828363_02.jpg",
    name:"Nyx Professional Makeup Butter Gloss - Angel Food Cake",
    price:495.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/7/a74edf0nypac00001337m1.jpg",
    name:"Pac Makeup Blender Foundation",
    price:675.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/7/57180618906087776895_rose__6_.jpg",
    name:"Mamaearth Rose Tinted 100% Natural Lip Balm",
    price:299.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/f/2ff90618906087776918__6_.jpg",
    name:"Mamaearth Ubtan Tinted 100% Natural Lip Balm For Lightening Dark Lips",
    price:299.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/0/a0c40618906087776895_vitc__6_.jpg",
    name:"Mamaearth Vitamin C Tinted 100% Natural Lip Balm For Lip Lightening",
    price:299.00
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/_/3_126.jpg",
    name:"Faces Canada Ultimepro Twist Eye Kajal Liner",
    price:"539.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/_/5_91.jpg",
    name:"Miss Claire Mineral Blusher Kit - 3716-4-04",
    price:"338.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/_/3_125_1.jpg",
    name:"Nyx Professional Makeup The Marshmellow Primer",
    price:"1,425.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_210_13.jpg",
    name:"Blue Heaven 12-In-1 Bling Eyeshadow Palette - Cocktail Fever - (Pack Of 2)",
    price:"1,425.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/1/21_12_6.jpg",
    name:"Faces Canada Ultime Pro Eye Shadow Palette - Nude 01",
    price:"999.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/0/20_12_5.jpg",
    name:"Nyx Professional Makeup Epic Ink Liner - Black",
    price:"759.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/8/58.jpg",
    name:"Pac Transparent Mascara",
    price:"325.00"
  },
  {
    image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/6/56_2.jpg",
    name:"Colorbar Lash Illusion Mascara Lengthening Lash & Volumising Mascara",
    price:"446.00 "
  },
]

beutydata.map(function(ele,i,arr){

  var div1=document.createElement("div"); 
  div1.style.height="400px";

   var image = document.createElement("img")
    image.src = ele.image;
    image.style.width="100%";
    image.style.height="250px"
   // image.setAttribute("class","kfcimage")

var item = document.createElement("p")
item.textContent=ele.name;
item.style.height="30px";
item.style.color="#DD0285;"
   
// var redimg = document.createElement("img")
// image.src = ele.red_img

var nonveg = document.createElement("p")
nonveg.textContent ="₹"+" "+ele.price;
nonveg.style.marginTop="10px"
nonveg.style.height="15px";

var btn1 = document.createElement("button")
btn1.innerHTML="Add to cart "
btn1.setAttribute("id","btn1");
btn1.style.color="white"
btn1.style.fontSize="14px"
btn1.style.padding="10px 20px"
btn1.style.backgroundColor="#DD0285"
btn1.style.border="0px"
btn1.style.marginLeft="20px"
   btn1.addEventListener("click",function()
   {
           addtocart(ele)
   });

div1.append(image,item,nonveg,btn1)
document.querySelector("#right-side").append(div1)
});

function addtocart(ele)
{
  arr.push(ele)
 // console.log(cartdata)
   localStorage.setItem("beauty",JSON.stringify(arr))
}




/*       */