// 响应式窗口适配脚本
function adaptToScreen() {
    const base = document.getElementById('base');
    if (!base) return;
    
    // 获取设备窗口宽高
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // 原始设计尺寸 (从CSS中获取，与CSS保持一致)
    const designWidth = 375;
    const designHeight = 667;
    
    // 设置基础容器的宽高
    document.documentElement.style.width = screenWidth + 'px';
    document.documentElement.style.height = screenHeight + 'px';
    document.body.style.width = screenWidth + 'px';
    document.body.style.height = screenHeight + 'px';
    
    // 计算缩放比例，保持宽高比
    const scaleX = screenWidth / designWidth;
    const scaleY = screenHeight / designHeight;
    const scale = Math.min(scaleX, scaleY);
    
    // 应用缩放和居中
    base.style.width = designWidth + 'px';
    base.style.height = designHeight + 'px';
    base.style.position = 'absolute';
    base.style.top = '50%';
    base.style.left = '50%';
    base.style.transform = `translate(-50%, -50%) scale(${scale})`;
    base.style.transformOrigin = 'center center';
    base.style.zIndex = '1';
}

// 添加防抖函数，避免频繁调整
let resizeTimeout;
function debounceAdapt() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adaptToScreen, 100);
}

// 页面加载完成后适配
window.addEventListener('load', adaptToScreen);

// 窗口大小改变时重新适配
window.addEventListener('resize', debounceAdapt);

// 设备方向改变时重新适配
window.addEventListener('orientationchange', adaptToScreen);

// 导出函数供其他脚本使用
window.adaptToScreen = adaptToScreen;