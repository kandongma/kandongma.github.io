/*

var arr = [2, 4, 5, 66, 3, 12, 5, 4, 4, 6, 32, 3, 12];

function order(tmparr){
    var emparr = [];
    for(var i=0; i<tmparr.length; i++){
        if(emparr.indexOf(tmparr[i]) <0){
            emparr.push(tmparr[i]);
        }
    }
    return emparr;
}
var obj = order(arr);
console.log(obj);

*/





















/*
var arr = [2, 4, 5, 66, 3, 4, 78, 23, 12, 5, 4, 4, 6, 32, 3, 12];


function optio(Arr){
    var empArr = [];
    for(var i=0; i<Arr.length; i++){
        if(empArr.indexOf(Arr[i]) < 0){
            empArr.push(Arr[i]);
        }
    }
    return empArr;
}

var obj = optio(arr);
console.log(obj);


*/



















function order(){
    var $text = $('.text'),
        $h1 = $text.find('h1');
    $h1.on('click', function(){
    var $this = $(this);
        $ul = $this.parent().find('ul');
        $ul.toggle();
        $this.parent().siblings().find('ul').hide();
    })
}
order();
















