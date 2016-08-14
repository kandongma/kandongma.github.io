




























/*
var maUL = document.getElementById('maUL'),
    lis = document.getElementsByTagName('li'),
    len =lis.length;

for(var i=0; i<len; i++){
    lis[i].onclick = (function(n){
        return function(){
            alert(n+1);
        }
    })(i);
}
*/

/*





 */

/*
function order(){
    var obj =[];
    for(var i=1; i<=10; i++){
        obj[i] = (i+1);
    }
    return obj;
}
var r = order();
console.log(r);

*/





















function order(className){
    var $target = $(className);
    $target.each(function(i, obj){
        var $obj = $(obj),
            $lis = $obj.find('ul>li'),
            $divs = $obj.find('div>div'),
            evt,
            isMouseover = false,
            timer;

        if($obj.hasClass('mover')){
            evt = 'mouseover';
            isMouseover = true;
        } else{
            evt = 'click';
        }
        $lis.on(evt, function(){
            var $this = $(this),
                index = $this.index();
            /*if(isMouseover){
                /!*if(timer){
                    clearTimeout(timer);
                }*!/
                timer = setInterval(function() {
                    $this.addClass('on').siblings('.on').removeClass('on');
                    $divs.eq(index).show().siblings().hide();
                },500);
            }*/
            $this.addClass('on').siblings('.on').removeClass('on');
            $divs.eq(index).show().siblings().hide();
        })
    })
}
order('.tab');














/*
function order(className){
    var $target = $(className),
        $lis = $target.find('ul>li'),
        $divs = $target.find('div>div');
    $lis.on('click', function(){
        var $this = $(this),
            index = $this.index();
        $this.addClass('on').siblings('.on').removeClass('on');
        $divs.eq(index).show().siblings().hide();
    })
}
order('.tab');
order('.tab2');

*/









/*!function(window, document, $, undefined){
    $('button').on('click', function(){
        var obj = {
            'marginLeft':'1000px',
            'width':'100px',
            'height':'100px',
            'border-radius':'50px'
        };
        $('.red-div').animate(obj, 1000, function(){
            var $this = $(this);
            $this.css({
                'background':'blue',
                'width':'200px',
                'height':'200px'
            });
            $this.animate({'marginLeft': 0},500)
        });*/


        /*if($('.red-div:hidden').length>0){
            $('.red-div').show(1000);
        } else{
            $('.red-div').hide(1000);
        }*/
        /*$('.red-div').hide('show', function(){
            alert('动画执行完毕');
        });*/
/*
    })
}(window, document, jQuery);
*/






























