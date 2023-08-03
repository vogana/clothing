
// 获取切换按钮和面板元素
const toggleBtn = document.getElementById('toggleBtn');
const panel = document.getElementById('panel');

// 添加按钮点击事件监听器
toggleBtn.addEventListener('click', () => {
  // 切换面板的显示状态
  if (panel.style.display === 'none') {
    panel.style.display = 'block'; // 显示面板
   
  } else {
    panel.style.display = 'none'; // 隐藏面板
    
  }
});