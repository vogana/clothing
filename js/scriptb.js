// 获取按钮元素
const changeColorBtn = document.getElementById("changeColorBtn");

// 定义一组适合阅读的背景颜色
const colors = [
    "#CCE8CF", 
    "#C7EDCC", 
    "#6E7B6C", 
	"#E3EDCD" 
];

// 为按钮添加点击事件监听器
changeColorBtn.addEventListener("click", changeBackgroundColor);

// 点击按钮时切换背景颜色
function changeBackgroundColor() {
    // 随机选择颜色数组中的一个索引
    const randomIndex = Math.floor(Math.random() * colors.length);
    // 获取随机选择的颜色
    const randomColor = colors[randomIndex];
    // 将页面的背景颜色设置为随机颜色
    document.body.style.backgroundColor = randomColor;
}
