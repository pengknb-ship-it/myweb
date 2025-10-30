// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏汉堡菜单交互
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // 切换汉堡图标和关闭图标
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // 点击导航链接后关闭菜单
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 图片懒加载功能
    const lazyImages = document.querySelectorAll('img');
    
    const lazyLoad = function() {
        lazyImages.forEach(img => {
            const imgRect = img.getBoundingClientRect();
            const isVisible = (imgRect.top <= window.innerHeight && imgRect.bottom >= 0);
            
            if (isVisible && !img.classList.contains('loaded')) {
                // 模拟图片加载
                setTimeout(() => {
                    img.classList.add('loaded');
                    img.classList.remove('loading');
                }, 300);
            }
        });
    };

    // 初始加载和滚动时检查
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });

    // 页面加载动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.post-card, .about-content, .tag-cloud');
        
        elements.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            const isVisible = (elementRect.top <= window.innerHeight - 100);
            
            if (isVisible && !element.classList.contains('fadeInUp')) {
                element.classList.add('fadeInUp');
            }
        });
    };

    // 初始检查和滚动时触发动画
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // 模拟表单提交
            submitBtn.disabled = true;
            submitBtn.textContent = '发送中...';
            
            setTimeout(() => {
                // 重置表单
                this.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = '发送成功！';
                
                // 恢复按钮文本
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                }, 2000);
            }, 1500);
        });
    }

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.padding = '0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '';
            navbar.style.backgroundColor = 'white';
        }
        
        lastScrollTop = scrollTop;
    });

    // 返回顶部按钮
    const scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 标签点击效果
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加标签筛选逻辑
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 文章卡片鼠标悬停效果增强
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 页面访问统计（模拟）
    const updateVisitCount = function() {
        const visitCount = localStorage.getItem('visitCount') || 0;
        const newCount = parseInt(visitCount) + 1;
        localStorage.setItem('visitCount', newCount);
        
        // 可以在控制台查看访问次数
        console.log(`页面访问次数: ${newCount}`);
    };

    updateVisitCount();
});

// 页面加载完成后的额外处理
window.addEventListener('load', function() {
    // 隐藏加载状态
    document.body.classList.add('loaded');
    
    // 预加载下一页图片
    const nextPageLinks = document.querySelectorAll('a[href^="posts/"]');
    nextPageLinks.forEach(link => {
        if (link.querySelector('img')) {
            const imgUrl = link.querySelector('img').src;
            const preloadImg = new Image();
            preloadImg.src = imgUrl.replace('images/', 'images/');
        }
    });
});

// 离线状态检测
window.addEventListener('online', function() {
    console.log('网络连接已恢复');
});

window.addEventListener('offline', function() {
    console.log('网络连接已断开');
    // 可以显示离线提示
});

// 浏览器兼容性检测
const checkBrowserCompatibility = function() {
    const features = {
        'CSS Grid': 'grid' in document.documentElement.style,
        'Flexbox': 'flex' in document.documentElement.style,
        'Fetch API': 'fetch' in window,
        'ES6': typeof Promise !== 'undefined'
    };
    
    console.log('浏览器特性支持情况:', features);
};

checkBrowserCompatibility();