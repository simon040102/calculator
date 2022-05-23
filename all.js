let formula = document.querySelector('#formula');
let result = document.querySelector('#result');
let number = document.querySelector('.calculator');
let arycount = [];
let arynow = [];
var count = '';
result.innerHTML = '0.0';
number.addEventListener('click', calculator);
function calculator(e) {
    e.preventDefault();
    let num = e.target.dataset.num;
    var str = '';
    if (e.target.nodeName !== "A") { return }
    if (num == 'remove') {
        arycount = [];
        arynow = [];
        count = '';
        str = '';
        result.innerHTML = '0.0';
        formula.innerHTML = '';
        return
    }
    result.innerHTML = '';
    arynow.push(num)
    console.log(arynow);
    for (let i = 0; i < arynow.length; i++) {
        str += arynow[i];
        console.log(str);
        result.innerHTML = str;
    }
    arrange(num)
}
function arrange(x) {
    let a = '';
    if (x == "=") {
        arycount.push(Number(count));
        formula.innerHTML = result.innerHTML;
        console.log(arycount);
        for (let i = 0; i < arycount.length; i++) {
            if (arycount[i] === "*") {
                a = (arycount[i - 1]) * (arycount[i + 1]);
                arycount[i + 1] = a;
                result.innerHTML = a;
            }
            if (arycount[i] === "/") {
                a = (arycount[i - 1]) / (arycount[i + 1]);
                if (a%1>0 ){
                    a=a.toFixed(4)
                    console.log(a);
                  }                  
                arycount[i + 1] = Number(a);
                result.innerHTML = Number(a);
            }
            if (arycount[i] === "+") {
                a = (arycount[i - 1]) + (arycount[i + 1]);
                arycount[i + 1] = a;
                result.innerHTML = a;
            }
            if (arycount[i] === "-") {
                a = (arycount[i - 1]) - (arycount[i + 1]);
                arycount[i + 1] = a;
                result.innerHTML = a;
            }
        }
        arynow=[];
        arycount=[];
        console.log(arynow,arycount);
        arynow.push(Number(a))
        arycount.push(Number(a))
        console.log(arynow,arycount);
        count=a;
        return
    }
    if (x == "x") {
        arycount.push(Number(count));
        arycount.push("*");
        count = '';
        console.log(arycount);
        return
    }
    if (x == "÷") {
        arycount.push(Number(count));
        arycount.push("/");
        count = '';
        console.log(arycount);
        return
    }
    if (x == "+") {
        arycount.push(Number(count));
        arycount.push("+");
        count = '';
        console.log(arycount);
        return
    }
    if (x == "-") {
        arycount.push(Number(count));
        arycount.push("-");
        count = '';
        console.log(arycount);
        return
    }
    count += x;
    console.log(count);
}