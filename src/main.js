let html = document.querySelector('#html');
let style = document.querySelector('#style');
let div = document.querySelector('#div1');
let string = `/*你好，我是River
*接下来我展示一下我的前端技能
*首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我会把 div 变成一个八卦图
*注意看好了
*首先，把div变成一个○
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦阴阳表示万物互生*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 阴阳鱼其实表示白天与黑夜
* 阴鱼带阳眼
* 阳鱼带阴眼
*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`//汉字会影响CSS，加注释使下面代码成功生效
string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if(string[n] === '\n'){
            string2 += '<br>';//改回车
        }else if(string[n] === " "){//改空格
            string2 += "&nbsp;";//HTML里空格用 &nbsp; 来表示
        }else{string2 += string[n];
        } 
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n < string.length - 1){
            n += 1
            step();
        }
    },50);
};

step();

