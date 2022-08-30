// Start-change-nav
let onsetNav = document.querySelector(".box-nav .change-nav");
let hideNav = document.querySelector(".box-nav .nav li i");
let navUl = document.querySelector(".box-nav .nav");
//
onsetNav.addEventListener("click", (e) => {
    // NavUl.style.display = "flex";
    navUl.classList.add("active");
});
hideNav.addEventListener("click", (e) => {
    navUl.classList.remove("active");
});

// End-change-nav

// start-change-the-big-img-in-the-pro-details
let smImg = document.querySelectorAll(".image img");
let bigImg = document.querySelector(".big-img img");
//
// loop for smImg

smImg.forEach((img) => {
    img.addEventListener("click", (e) => {
        // save-src-big-img
        let srcBigImg = bigImg.src;
        //
        // save-src-sm-img
        let srcSmImg = img.src;
        //
        // change-src-the-bigImg
        bigImg.src = srcSmImg;
        //
        // change-src-the-smImg-to-bigImg
        img.src = srcBigImg;
    });
});
//end-change-the-big-img-in-the-pro-details

// pro-shop
let boxProduct = document.querySelectorAll(".in-shop .box-product");
boxProduct.forEach((box) => {
    box.addEventListener("click", (e) => {
        // active-1
        if (box.classList.contains("active-1")) {
            window.location.href = "pro-details-1.html";
            // active-2
        } else if (box.classList.contains("active-2")) {
            window.location.href = "pro-details-2.html";
        }
    });
});
// pro-shop

// Start-form

    formInput = document.querySelectorAll(".box-form form input");
    formTextarea = document.querySelector(".box-form form textarea");

    let testName = false;
    let testEmail = false;
    let testSubject = false;
    //
    // loop-formInput

    formInput.forEach((input) => {
        input.addEventListener("keyup", (e) => {
            if (e.target.classList.contains("u-name")) {
                if (e.target.value.length >= 4) {
                    e.target.classList.add("active");
                    e.target.classList.remove("no-active");
                    e.target.parentElement
                        .querySelector("h5")
                        .classList.remove("active");
                    testName = true;
                } else {
                    e.target.classList.remove("active");
                    e.target.classList.add("no-active");
                    e.target.parentElement
                        .querySelector("h5")
                        .classList.add("active");
                    testName = false;
                }
            }
            //

            if (e.target.classList.contains("subject")) {
                if (e.target.value.length >= 4) {
                    e.target.classList.add("active");
                    e.target.classList.remove("no-active");
                    testSubject = true;
                } else {
                    e.target.classList.remove("active");
                    e.target.classList.add("no-active");
                    testSubject = false;
                }
            }
            //

            //

            if (e.target.classList.contains("u-email")) {
                const regEmail =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                //

                if (regEmail.test(e.target.value)) {
                    e.target.classList.add("active");
                    e.target.classList.remove("no-active");
                    e.target.parentElement
                        .querySelector("h5")
                        .classList.remove("active");
                    testEmail = true;
                } else {
                    e.target.classList.remove("active");
                    e.target.classList.add("no-active");
                    e.target.parentElement
                        .querySelector("h5")
                        .classList.add("active");
                    testEmail = false;
                }
            }

            // change-button-attribute
            if (testEmail == true && testName == true&& testSubject==true) {
                input.parentElement.parentElement
                    .querySelector("button")
                    .removeAttribute("disabled");
            } else {
                input.parentElement.parentElement
                    .querySelector("button")
                    .setAttribute("disabled", "");
            }
        });
    });
    //
    // textarea-change

    window.addEventListener("keyup", (e) => {
        if (e.target.classList.contains("message")) {
            formTextarea.addEventListener("keyup", (e) => {
                if (e.target.value.length >= 4) {
                    e.target.classList.add("active");
                    e.target.classList.remove("no-active");
                } else {
                    e.target.classList.remove("active");
                    e.target.classList.add("no-active");
                }
            });
        }
    });

// End-form
// Start-cart-shop
let removePurchase = document.querySelectorAll(".boxes .remove-box button");
// let allBoxPurchase = document.querySelectorAll(".cart-shop .boxes");

let allProducts = document.querySelectorAll(".box-product button");
let allProductsPg1 = document.querySelectorAll(".pg-1 .box-product button");
// loop-removePurchase
removePurchase.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
    });
});
//

// loop-allProducts
allProducts.forEach((button) => {
    button.addEventListener("click", (e) => {
        let imgSrc =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".box-img img"
            ).src;
        let imgTitle =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content h4"
            ).innerText;
        let imgPrice =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content .price"
            ).innerText;
        // append box in the allBoxPurchase
        var boxAppend = [
            `
        <div class="boxes">
        <div class="box">
            <div class="remove-box">
                <button>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
            <div class="img-box">
                <img src="${imgSrc}" alt="" />
            </div>
            <p class="product-p">${imgTitle}</p>
            <div class="price">
                <p>${imgPrice}</p>
            </div>
            <div class="in-form">
                <input type="number" value="1" />
            </div>
            <div class="total-price">
                <p>$118.18</p>
            </div>
        </div>
    </div>

`,
        ];
        window.location = "cart.html";

        button.setAttribute("disabled", "");
    });
});
// End-cart-shop
// export let se = [1, 2];
function parentBox() {
    button.addEventListener("click", (e) => {
        let imgSrc =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".box-img img"
            ).src;
        let imgTitle =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content h4"
            ).innerText;
        let imgPrice =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content .price"
            ).innerText;
        // append box in the allBoxPurchase
        var boxAppend = [
            `
        <div class="boxes">
        <div class="box">
            <div class="remove-box">
                <button>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
            <div class="img-box">
                <img src="${imgSrc}" alt="" />
            </div>
            <p class="product-p">${imgTitle}</p>
            <div class="price">
                <p>${imgPrice}</p>
            </div>
            <div class="in-form">
                <input type="number" value="1" />
            </div>
            <div class="total-price">
                <p>$118.18</p>
            </div>
        </div>
    </div>

`,
        ];
        window.location = "cart.html";

        button.setAttribute("disabled", "");
    });
}
//
allProductsPg1.forEach((button) => {
    button.addEventListener("click", (e) => {
        let imgSrc =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".box-img img"
            ).src;
        let imgTitle =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content h4"
            ).innerText;
        let imgPrice =
            e.target.parentElement.parentElement.parentElement.querySelector(
                ".content .price"
            ).innerText;
        // append box in the allBoxPurchase
        var boxAppend = [
            `
        <div class="boxes">
        <div class="box">
            <div class="remove-box">
                <button>
                    <i class="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
            <div class="img-box">
                <img src="${imgSrc}" alt="" />
            </div>
            <p class="product-p">${imgTitle}</p>
            <div class="price">
                <p>${imgPrice}</p>
            </div>
            <div class="in-form">
                <input type="number" value="1" />
            </div>
            <div class="total-price">
                <p>$118.18</p>
            </div>
        </div>
    </div>

`,
        ];
        window.location.href = "./html/cart.html";

        button.setAttribute("disabled", "");
    });
});
