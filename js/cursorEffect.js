(function fairyDustCursor() {

    var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"]; // 可能的粒子颜色
    var width = window.innerWidth;  // 页面宽度
    var height = window.innerHeight; // 页面高度
    var cursor = { x: width / 2, y: width / 2 }; // 鼠标位置
    var particles = []; // 粒子数组

    // 初始化函数
    function init() {
        bindEvents();
        loop();
    }

    // 绑定事件
    function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);  // 鼠标移动事件
        window.addEventListener('resize', onWindowResize);    // 窗口大小变化事件
    }

    // 处理窗口大小变化
    function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
    }

    // 处理鼠标移动事件
    function onMouseMove(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;

        // 在鼠标位置添加粒子
        addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
    }

    // 添加粒子
    function addParticle(x, y, color) {
        var particle = new Particle();
        particle.init(x, y, color);
        particles.push(particle);
    }

    // 更新粒子
    function updateParticles() {
        // 更新每个粒子的状态
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
        }

        // 删除已经消失的粒子
        for (var i = particles.length - 1; i >= 0; i--) {
            if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }
    }

    // 动画循环
    function loop() {
        requestAnimationFrame(loop);
        updateParticles();
    }

    // 粒子类
    function Particle() {
        this.character = "*"; // 粒子的字符
        this.lifeSpan = 120;  // 粒子生命周期（ms）
        this.initialStyles = {
            "position": "fixed",
            "display": "inline-block",
            "top": "0px",
            "left": "0px",
            "pointerEvents": "none",
            "touch-action": "none",
            "z-index": "10000000",
            "fontSize": "25px",
            "will-change": "transform"
        };

        // 初始化粒子
        this.init = function (x, y, color) {
            this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), // 随机X轴速度
                y: 1 // Y轴速度
            };

            this.position = { x: x + 10, y: y + 10 }; // 粒子初始位置
            this.initialStyles.color = color; // 粒子颜色

            this.element = document.createElement('span');
            this.element.innerHTML = this.character;
            applyProperties(this.element, this.initialStyles); // 应用样式
            this.update();

            // 将粒子添加到页面中
            document.querySelector('.js-cursor-container').appendChild(this.element);
        };

        // 更新粒子位置和生命周期
        this.update = function () {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;

            // 更新粒子的位置和大小
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
        };

        // 删除粒子
        this.die = function () {
            this.element.parentNode.removeChild(this.element);
        };
    }

    // 工具函数：应用CSS样式
    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    // 初始化特效
    if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) {
        init();
    }
})();
