import toppart from "../components/toppart.js";

let x=document.getElementById("first-top")
    x.innerHTML=toppart();

    import headertwo from "../components/header-2.js";

    let y=document.getElementById("header-2")
        y.innerHTML=headertwo();

        import footer from "../components/footer.js";

        let z=document.getElementById("footer")
            z.innerHTML=footer();



            var cartDta = JSON.parse(localStorage.getItem("beauty"))
             console.log(cartDta)
          let total = cartDta.reduce(function(sum,ele){
                       return sum+ele.price
                       
            },0);
           
            
            var div3=document.createElement("div")
            div3.innerText="₹"+" "+total
            div3.style.color="green"
            var btn3 =document.createElement("button")
            btn3.innerText="Pay"
            btn3.setAttribute("class","btn2")
            btn3.style.marginLeft="20px"
            btn3.style.backgroundColor="skyblue"
            btn3.style.padding="5px 30px"
            btn3.style.border="0px"
            btn3.addEventListener("click", function(){
                pay(total)
          });
            
            
            div3.append(btn3)
         
            document.querySelector(".totalcart").append(div3)
            


            cartDta.map(function(e,i)
            {
                let d1=document.createElement("div")
                d1.style.padding="10px"

                let img=document.createElement("img")
                img.src=e.image
                img.style.width="100%"
                img.style.height="300px"
              

                let p=document.createElement("p")
                p.innerText=e.name

                let p2=document.createElement("p")
                p2.innerText=e.price

              let d2=document.createElement("div")
                
                let btn=document.createElement("button")
                btn.innerText="Pay"
                btn.style.marginLeft="20px"
                btn.style.color="white"
                btn.style.backgroundColor="skyblue"
                btn.style.padding="5px 30px"
                btn.style.border="0px"
                btn.addEventListener("click", function(){
                    pay(e,i)
              });


                let btn2=document.createElement("button")
                btn2.innerText="Remove"
                btn2.style.marginLeft="20px"
                btn2.style.backgroundColor="red"
                btn2.style.color="white"
                btn2.style.padding="5px 30px"
                btn2.style.border="0px"
                btn2.addEventListener("click", function(){
                    removeitem(e.price,i)
              });


                d2.append(btn2,btn)
            d1.append(img,p,p2,d2)
            document.getElementById("middlesec").append(d1)

            });

            function pay(pprice)
            {
                localStorage.setItem("paymentdta",JSON.stringify(pprice))
                window.location.href="payment.html"
            }

            function removeitem(ele,index)
            {
                cartDta.splice(index,1)
                localStorage.setItem("beauty",JSON.stringify(cartDta))
                window.location.reload();
                
            }
        