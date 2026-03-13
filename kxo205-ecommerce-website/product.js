var img = 1;
window.onloadstart = ppt_start();
function ppt_start() {
    self.setInterval("ppt_right()", 2000);
    

}
function ppt_left() {
    img--;
    if (img <= 0) {
        img = 5;
    }
    change_img();
    change_dot(img);
}
function ppt_right() {
    img++;
    if (img >= 6) {
        img = 1;
    }
    change_img();
    change_dot(img);
}
function change_dot(img) {
    var a = document.getElementById("navli1");
    var b = document.getElementById("navli2");
    var c = document.getElementById("navli3");
    var d = document.getElementById("navli4");
    var e = document.getElementById("navli5");

    switch (img) {
        case 1:
            a.style.backgroundImage = "url(images/dotY.png)";
            b.style.backgroundImage = "url(images/dotN.png)";
            c.style.backgroundImage = "url(images/dotN.png)";
            d.style.backgroundImage = "url(images/dotN.png)";
            e.style.backgroundImage = "url(images/dotN.png)";
            break;
        case 2:
            a.style.backgroundImage = "url(images/dotN.png)";
            b.style.backgroundImage = "url(images/dotY.png)";
            c.style.backgroundImage = "url(images/dotN.png)";
            d.style.backgroundImage = "url(images/dotN.png)";
            e.style.backgroundImage = "url(images/dotN.png)";
            break;
        case 3:
            a.style.backgroundImage = "url(images/dotN.png)";
            b.style.backgroundImage = "url(images/dotN.png)";
            c.style.backgroundImage = "url(images/dotY.png)";
            d.style.backgroundImage = "url(images/dotN.png)";
            e.style.backgroundImage = "url(images/dotN.png)";
            break;
        case 4:
            a.style.backgroundImage = "url(images/dotN.png)";
            b.style.backgroundImage = "url(images/dotN.png)";
            c.style.backgroundImage = "url(images/dotN.png)";
            d.style.backgroundImage = "url(images/dotY.png)";
            e.style.backgroundImage = "url(images/dotN.png)";
            break;
        case 5:
            a.style.backgroundImage = "url(images/dotN.png)";
            b.style.backgroundImage = "url(images/dotN.png)";
            c.style.backgroundImage = "url(images/dotN.png)";
            d.style.backgroundImage = "url(images/dotN.png)";
            e.style.backgroundImage = "url(images/dotY.png)";
            break;
    }
}
function change_img() {
    var a = document.getElementById("banner1");
    a.style.backgroundImage = "url(images/lunbo"+img+".png)";
}
function click_dot1() {
    img = 1;
    change_img();
    change_dot(img);
}
function click_dot2() {
    img = 2;
    change_img();
    change_dot(img);
}
function click_dot3() {
    img = 3;
    change_img();
    change_dot(img);
}
function click_dot4() {
    img = 4;
    change_img();
    change_dot(img);
}
function click_dot5() {
    img = 5;
    change_img();
    change_dot(img);
}
