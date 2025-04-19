// パララックス・ヒーロー背景（PC・スマホ両対応）
function updateHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if(heroBg) {
    const offset = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    // 縦方向だけ動くパララックス
    heroBg.style.backgroundPosition = `center calc(50% + ${offset * 0.22}px)`;
  }
}
window.addEventListener('scroll', updateHeroParallax, { passive: true });
window.addEventListener('touchmove', updateHeroParallax, { passive: true });

// ハンバーガーメニュー開閉
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // ナビリンク押したら自動で閉じる
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// FAQアコーディオン展開
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', function() {
      const a = this.nextElementSibling;
      if(a.style.display === 'block') {
        a.style.display = 'none';
      } else {
        a.style.display = 'block';
      }
    });
    // 初期状態は閉じる
    const a = q.nextElementSibling;
    if(a) a.style.display = 'none';
  });
});
