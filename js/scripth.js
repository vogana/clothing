// 导入模块的函数
function loadModule(url, targetId) {
    const targetElement = document.getElementById(targetId);
    fetch(url)
        .then(response => response.text())
        .then(data => {
            targetElement.innerHTML = data;
        });
}

// 加载各个模块
document.addEventListener("DOMContentLoaded", function() {
loadModule('modules/navbar.html', 'navbarModule');
loadModule('modules/content.html', 'contentModule');
loadModule('modules/footer.html', 'footerModule');
loadModule('modules/seo.html', 'seoModule');
loadModule('modules/shipin.html', 'shipinModule');
loadModule('modules/tupian.html', 'tupianModule');
});