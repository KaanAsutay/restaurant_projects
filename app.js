import data from "./data.js"

const productDiv = document.querySelectorAll(".product")
const urunKodGirisi = document.getElementById("urunKodu")
const masaKodGirisi = document.getElementById("masaKodu")
const sipButton = document.getElementById(".siparisButton")
const masaNo = document.querySelectorAll(".masa")
const hesabiKapatLink = document.querySelectorAll(".hesapKapat a")

let urunKodu = 0;
let masaKodu = 0;

productDiv.forEach((urun) => {

    urun.addEventListener("click", function(e) {
        e.preventDefault()
        const pElement = urun.querySelector("p")
        // console.log(pElement)

        if (pElement) {
        const pElementIcerigi = pElement.textContent
        // console.log(pElementIcerigi)
        urunKodGirisi.value = pElementIcerigi
        // console.log(pElementIcerigi)
        urunKodu = urunKodGirisi.value
        }
    })
})

masaNo.forEach((masa) => {
    masa.addEventListener("click", function(e) {
    e.preventDefault()
        const pMasa = masa.querySelector("p")
    // console.log(pMasa)
        const masaKodu = pMasa.textContent
    masaKodGirisi.value = masaKodu
        
    })
})

sipButton.addEventListener("click", function(e) {
    e.preventDefault()

    if (masaKodGirisi.value === "" || urunKodGirisi === ""){
        const hataMesajı =
        masaKodGirisi.value === "" && urunKodGirisi.value ?
        (uyariSiparisOlustur.innerHTML = "Masa ve Urun Kodu Girin") :
        urunKodGirisi.value === "" 
        ? uyariUrunKodu.innerHTML= "Urun Kodu Girin" :
        uyariMasaKodu.innerHTML = "Masa Kodu Girin"

        setTimeout(()=>{
            uyariUrunKodu.innerHTML = "";
            uyariMasaKodu.innerHTML = "";
            uyariSiparisOlustur.innerHTML = ""
        },3000)
    }

        const masaNoList = document.querySelectorAll(".masaNo p")
    // console.log(masaNoList)
    masaNoList.forEach((masaBilgi) => {
        const masaNumarasi = masaBilgi.textContent.trim()
        const masaSiparisAlani = masaBilgi.parentElement.nextElementSibling
    // console.log(masaNumarasi)

        if (masaNumarasi === masaKodu) {
            data.forEach((x) => {
                // console.log(x.title)
                if (x.id === urunKodu) {
                    // // console.log("ürünlere erisim sagladik")
                    // const div = document.createElement("div")
                    // div.classList.add(".SiparisEdilmisUrun")
                    // // template literal = backtick
                    // div.innerHTML = `
                    // <img src=${x.icon} width="40px" alt="urun" />
                    // <p>${x.title}</p>
                    // <p>${x.price}TL</p>
                    // <a href="" id=del"><i class="fa-solid fa-trash"></i></a>
                    // `
                    // masaSip.appedChild(div)

                    const siparisAlani = `
                        <div class="SiparisEdilmisUrun">
                        <img src=${x.icon} width="40px" alt="urun" />
                        <p>${x.title}</p>
                        <p>${x.price}TL</p>
                        <a href="" id=del"><i class="fa-solid fa-trash"></i></a>
                        </div>
                     `;
                     masaSiparisAlani.innerHTML += siparisAlani
                    

                }
            })
            masaKodGirisi.value = ""
            urunKodGirisi.value = ""
        }
        masaSiparisAlani.addEventListener("click", function(e) {
            // console.log(e)
            if (e.target.classList.contains("fa-trash")) {
                const silinecekEleman = e.target.closest(".SiparisEdilmisUrun")
                if (silinecekEleman){
                    silinecekEleman.remove()
                }
            }
        })
    })
})
hesabiKapatLink.forEach((link) => {
    link.addEventListener("click", function(e){
        e.preventDefault()

        const parentDiv = link.closest(".masa")

        if (parentDiv){
            const masaSipDiv = parentDiv.querySelector(".masaSip");
            masaSipDiv.innerHTML = ""
        }
    })
})
