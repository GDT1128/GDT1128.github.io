function toggleContent(){
    var content = document.getElementById('menuContent');
    content.classList.toggle('active');
}
function toggleContent(){
    var content = document.getElementById('menuConten');
    content.classList.toggle('active');
}


$(document).ready(function () {
    $("#a-faq-faction-q1").click(function () {
        $("#a-faq-faction-a1").slideToggle(1000);
    });

    $("#a-faq-faction-q2").click(function () {
        $("#a-faq-faction-a2").slideToggle(1000);
    });

    $("#a-faq-faction-q3").click(function () {
        $("#a-faq-faction-a3").slideToggle(1000);
    });

    $("#a-faq-faction-q4").click(function () {
        $("#a-faq-faction-a4").slideToggle(1000);
    });

    $("#a-faq-faction-q5").click(function () {
        $("#a-faq-faction-a5").slideToggle(1000);
    });


})

/*AOS的動畫*/
   AOS.init({
        duration: 3000,
    });


// 在網頁載入完畢後或重新整理時，將滾動條位置設定為最頂部
window.onload = function() {
    window.scrollTo(0, 0);
};



 // 顯示相應ul中的文字
 function showSubMenu(element) {
    var subMenu = element.nextElementSibling; // 下一個兄弟元素即為ul
    var spans = subMenu.querySelectorAll('span');

    // 顯示每個span
    spans.forEach(function(span) {
        span.style.display = 'inline-block';
    });
}

// 隱藏相應ul中的文字
function hideSubMenu(element) {
    var subMenu = element.nextElementSibling; // 下一個兄弟元素即為ul
    var spans = subMenu.querySelectorAll('span');

    // 隱藏每個span
    spans.forEach(function(span) {
        span.style.display = 'none';
    });
}

