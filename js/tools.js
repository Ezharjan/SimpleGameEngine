//使用怪物手册
function handbook() {
    var handbook = document.getElementById("handbook");
    //显示怪物手册
    handbook.style.display = 'block';

    //按ENTER隐藏怪物手册
    window.addEventListener("keydown", function (event) {
        if (handbook.style.display == 'block' && event.which == 13) {   //ENTER
            handbook.style.display = 'none';
        }
    })
}