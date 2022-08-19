var chb = document.getElementsByTagName('input');
var span = document.getElementsByTagName('span');
var li = document.getElementsByTagName('li');
var p = document.getElementsByTagName('p');
var beforli;
for (var i in span) {
    (function(n) {
        span[n].onclick = function() {
            if (beforli != undefined) {
                li[beforli].className = "";
            }
            li[n].className = "cyan";
            if (chb[n].checked == false)
                beforli = n;
        }
        var count = 0;
        chb[n].onclick = function() {
            count++;
            if (count % 2) {
                li[n].className = "cyan";
                //beforli = undefined;
            } else {
                li[n].className = "";
            }
        }

    }(i))
}

for (var i in p) {
    p[i].onclick = function() {
        for (var i in li) {
            li[i].className = "";
            //chb[i].checked = false;
        }
    }
}

function hover() {
    var color = "aliceblue",
        beforColor;

    function one() {
        if (this.className != "cyan")
            beforColor = this.className;
        if (this.className == "") {
            this.className = color;
        }
    }

    function two() {
        if (this.className != "cyan") {
            this.className = beforColor;
        }
    }
    return [one, two];
}

var Hover = hover();

for (var i in li) {
    li[i].onmouseover = Hover[0];
    li[i].onmouseout = Hover[1];
}

function add() {
    var li = document.createElement('li');
    var input = document.createElement('input');
    input.setAttribute('type', "checkbox");
    li.appendChild(input);
    var span = document.createElement('span');
    li.appendChild(span);
     var text = document.createTextNode("我的文件");
    span.appendChild(text);
    var div = document.getElementsByClassName('demo')[0];
    div.appendChild(li);
} 