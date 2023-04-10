let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('我最喜欢巧克力冰激淋了。');
// } else {
//     alert('但是巧克力才是我的最爱呀……');
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// alert(multiply(4, 7));
console.log(multiply(4, 7));


// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });
//箭头函数 使用 () => 代替 function ()
document.querySelector('html').addEventListener('click', () => {
    // alert('别戳我，我怕疼。');
    // document.write('别戳我，我怕疼。');
    console.log('别戳我，我怕疼。');
});

let myImage = document.querySelector('img');


myImage.onclick = function () {
    //getAttribute() 返回元素上指定的属性值，  
    //返回images的src的值
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        //setAttribute() 设置元素上指定的属性值，  
        myImage.setAttribute('src', 'images/css-declaration-small.png');
    } else {
        myImage.setAttribute('src', 'images/jiantouhanshu.png');
    }
}


let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     //prompt()弹出一个文本输入对话框
//     let myName = prompt('请输入你的名字。');
//     //Storage 接口的 setItem() 方法，接受一个键名和值作为参数，将会把键名添加到给定的 Storage 对象中，如果键名已存在，则更新其对应的值
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，，，，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}