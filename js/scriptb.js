// 当文档加载完成时执行
document.addEventListener("DOMContentLoaded", function () {
    // 获取切换颜色按钮和文档主体元素
    const changeColorBtn = document.getElementById("changeColorBtn");
    const body = document.body;

    // 添加点击事件监听器，切换背景颜色
    changeColorBtn.addEventListener("click", changeBackgroundColor);

    // 切换背景颜色函数
    function changeBackgroundColor() {
        // 定义一组颜色
        const colors = [
            "#CCE8CF", 
            "#C7EDCC", 
            "#6E7B6C", 
            "#E3EDCD" 
        ];
        // 随机选择一个颜色
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        // 设置文档主体的背景颜色
        body.style.backgroundColor = randomColor;
    }
});
