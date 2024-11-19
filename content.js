// 添加提示框的样式
const style = document.createElement('style');
style.textContent = `
    #notificationBox {
        position: fixed;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        padding: 20px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all 0.5s ease;
        z-index: 9999;
    }
    #notificationBox h3 {
        color: #fff;
    }
    #notificationBox.show {
        bottom: 20px;
        opacity: 1;
    }
    .BiliAnalysisButton {
        z-index: 999;
        width: 45px;
        height: 45px;
        color: #fff;
        background: #00aeec;
        border: 1px solid #f1f2f3;
        border-radius: 6px;
        font-size: 14px;
        position: fixed;
        cursor: pointer;
    }
    #BiliAnalysis6 {
        top: 900px;
        right: 0px;
    }
    #BiliAnalysis7 {
        top: 200px;
        left: 0px;
    }
`;
document.head.appendChild(style);

// 创建提示框
const notificationBox = document.createElement('div');
notificationBox.id = 'notificationBox';
notificationBox.innerHTML = `
    <img src="https://i.ouo.chat/api/img/DLC3.gif" alt="图片" style="width: 50px; height: 50px;">
    <h3>解析成功</h3>
    <p>链接已复制到剪贴板</p>
`;
document.body.appendChild(notificationBox);

// 添加解析按钮
const button6 = document.createElement('button');
button6.id = 'BiliAnalysis6';
button6.className = 'BiliAnalysisButton';
button6.innerHTML = '云端</br>解析ya';
document.body.appendChild(button6);

const button7 = document.createElement('button');
button7.id = 'BiliAnalysis7';
button7.className = 'BiliAnalysisButton';
button7.innerHTML = '云端</br>解析ya';
document.body.appendChild(button7);

// 绑定事件
function clickButton() {
    const url = window.location.href;
    navigator.clipboard.writeText(`https://bil.ouo.chat/player/?url=${url}`).then(() => {
        notificationBox.classList.add('show');
        setTimeout(() => {
            notificationBox.classList.remove('show');
        }, 10000);
    }).catch(e => console.error(e));
}
button6.addEventListener('click', clickButton);
button7.addEventListener('click', clickButton);
