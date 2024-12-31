// poem
const words = [
    '伤心桥下春波绿', '曾是惊鸿照影来', '当年明月在', '曾照彩云归', '真堪偕隐', '画船听雨眠',
    '柳絮空缱绻', '南风知不知', '我见青山多妩媚', '料青山见我也应如是', '今夜何夕', '见此良人',
    '若有知音见采', '不辞唱遍阳春', '休言半纸无多重', '万斛离愁尽耐担', '夜月一帘幽梦', '和光同尘',
    '杳霭流玉', '月落星沉', '霞姿月韵', '喜上眉梢', '醉后不知天在水', '满船星梦压星河',
    '落花人独立', '微雨燕双飞', '掬水月在手', '弄花香满衣', '夜深忽梦少年事', '唯梦闲人不梦君',
    '垆边人似月', '皓腕凝霜雪', '若非群玉山头见', '会向瑶台月下逢', '沉鱼落雁鸟惊喧', '羞花闭月花愁颤',
    '解释春风无限恨', '沉香亭北倚阑干', '闲看庭前花开花落', '漫随天上云卷云舒', '青山一道同云雨', '明月何曾是两乡',
    '锦瑟无端五十弦', '一弦一柱思华年','云千重，水千重','身在千重云水中','疏影横斜水清浅', '暗香浮动月黄昏',
    '露从今夜白', '月是故乡明','最是人间留不住','朱颜辞镜花辞树'
];

function randomNum(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2); // 保持原有功能
}

function createWordElement(word) {
    const wordBox = document.createElement('div');
    const wordElement = document.createElement('div');

    wordElement.innerText = word;
    wordElement.classList.add('word');
    wordElement.style.color = '#BAABDA';
    wordElement.style.fontFamily = '楷体';
    wordElement.style.fontSize = '20px';

    wordBox.classList.add('word-box');
    wordBox.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
    wordBox.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
    wordBox.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
    wordBox.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

    wordBox.addEventListener('mouseenter', () => {
        wordBox.style.animationPlayState = 'paused';
    });

    wordBox.addEventListener('mouseleave', () => {
        wordBox.style.animationPlayState = 'running';
    });

    wordBox.appendChild(wordElement);
    return wordBox;
}

function init() {
    const container = document.querySelector('.container');
    const fragment = document.createDocumentFragment(); // 使用 DocumentFragment 来减少 DOM 更新

    words.forEach(word => {
        const wordBox = createWordElement(word);
        fragment.appendChild(wordBox);
    });

    container.appendChild(fragment); // 一次性将所有元素插入到 DOM
}

window.addEventListener('load', init);

// 处理 textone, texttwo, textthree 动画更新
const textone = document.querySelector('.textone h1');
const texttwo = document.querySelector('.texttwo h1');
const textthree = document.querySelector('.textthree h1');

setTimeout(() => {
    textone.innerHTML = '今晚，整片星空将为你一人闪烁';
    textone.style.color = '#E8F9FD';
    textone.style.fontFamily = '楷体';
    texttwo.style.color = '#E8F9FD';
    texttwo.style.fontFamily = '楷体';
    textthree.style.color = '#E8F9FD';
    textthree.style.fontFamily = '楷体';
    texttwo.innerHTML = '';
}, 28000);

setTimeout(() => {
    textone.innerHTML = '愿你三冬暖';
    texttwo.innerHTML = '愿你春不寒';
    textthree.innerHTML = '愿你平安快乐，幸福健康';
}, 112500);
