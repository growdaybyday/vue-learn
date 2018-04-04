//메인배너 
$(document).ready(function () {
    var timeonoff; // 타이머 동작/중지
    var imageCount = 4; // 이미지 개수
    var cnt = 1; // 이미지 카운트
    var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때
    $('.btn1').css('background', 'url(images/onbtn.png)');
    $('.gallery .link1').fadeIn('slow');

    function moveg() {
        cnt++;
        for (var i = 1; i <= imageCount; i++) {
            $('.gallery .link' + i).hide();
        }
        $('.gallery .link' + cnt).fadeIn('slow');
        for (var i = 1; i <= imageCount; i++) {
            $('.btn' + i).css('background', 'url(images/btn.png)');
        }
        $('.btn' + cnt).css('background', 'url(images/onbtn.png)');
        if (cnt == imageCount) cnt = 0; // 카운트 초기화
    }
    timeonoff = setInterval(moveg, 2500);
    $('.mbutton').click(function (event) {
        var $target = $(event.target);
        clearInterval(timeonoff);
        for (var i = 1; i <= imageCount; i++) {
            $('.gallery .link' + i).hide();
        }
        if ($target.is('.btn1')) {
            cnt = 1;
        }
        else if ($target.is('.btn2')) {
            cnt = 2;
        }
        else if ($target.is('.btn3')) {
            cnt = 3;
        }
        else if ($target.is('.btn4')) {
            cnt = 4;
        }
        $('.gallery .link' + cnt).fadeIn('slow');
        for (var i = 1; i <= imageCount; i++) {
            $('.btn' + i).css('background', 'url(images/btn.png)');
        }
        $('.btn' + cnt).css('background', 'url(images/onbtn.png)');
        if (cnt == imageCount) cnt = 0; // 이미지 카운트 초기화
        timeonoff = setInterval(moveg, 2500); // 타이머 재 동작
        if (onoff == false) {
            onoff = true;
            $('.ps').css('background', 'url(images/stop.png)');
        }
    });
    // stop/play 버튼 클릭시 타이머 동작/중지
    $('.ps').click(function () {
        if (onoff == true) {
            clearInterval(timeonoff); // stop버튼 클릭시
            $(this).css('background', 'url(images/play.png)');
            onoff = false;
        }
        else {
            timeonoff = setInterval(moveg, 2500); // play버튼 클릭시
            $(this).css('background', 'url(images/stop.png)');
            onoff = true;
        }
    });
});
//이미지 슬라이드 갤러리
$(document).ready(function () {
    var position = 0; //최초위치
    var movesize = 320; //이미지 하나의 너비
    
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());
    //슬라이드 갤러리를 한번 복제
   
    $('.button').click(function (event) {
        var $target = $(event.target);
        var parentDivId = "#" + $target.closest(".slide_gallery_box").attr("id");
        
        position = Number($target.parent().prevAll(".slide_gallery").css('left').replace('px',''));
//        console.log("position:"+position);
        
        if ($target.is(parentDivId + ' .menu1')) {
            if (position <= -1280) {
                $(parentDivId + ' .slide_gallery').css('left', 0);
                position = 0;
            }
            position -= movesize; // 320씩 감소
            $(parentDivId + ' .slide_gallery').stop().animate({left: position}, 'fast', function () {
                if (position <= -1280) {
                    $(parentDivId + ' .slide_gallery').css('left', 0);
                    position = 0;
                }
            });
        }
        else if ($target.is(parentDivId + ' .menu2')) {
            if (position >= 0) {
                $(parentDivId + ' .slide_gallery').css('left', -1280);
                position = -1280;
            }
            position += movesize; // 320씩 증가
            $(parentDivId + ' .slide_gallery').stop().animate({left: position}, 'fast', function () {
                if (position >= 0) {
                    $(parentDivId + ' .slide_gallery').css('left', -1280);
                    position = -1280;
                }
            });
        }
    });
});