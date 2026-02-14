window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const blurImg = document.getElementById('blurImg');
    
    // スクロールするほど背景のボケを強く、暗くする演出
    const blurVal = 20 + (scrollY / 50);
    const brightnessVal = 0.5 - (scrollY / 2000);
    
    blurImg.style.filter = `blur(${blurVal}px) brightness(${brightnessVal})`;
    
    // キャラクターを少しずつ小さくして奥にいくような演出（パララックス）
    const char = document.querySelector('.fixed-char');
    char.style.transform = `scale(${1 - scrollY / 5000})`;
});
