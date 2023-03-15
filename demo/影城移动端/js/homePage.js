/**
 * 主函数
 */
function main() {
    //渲染正在热映的电影
    $('#hot-playing').html(readerHomepage(nowPlaying,1));
    //渲染即将上映的电影
    $('#play-soon').html(readerHomepage(upComing,2));

    // footerRender('ft-items', 1);
    headerReader();
};
main();



/**
 * 首页电影渲染函数
 * @returns 正在热映和即将上映内容的字符串
 */
function readerHomepage(movieData, type) {
    let moviesTotal = movieData.map(elemt => {
        return `
            <div class="card" data-id="${elemt.id}" data-type="${type}">
                <img src="${elemt.imgSrc}" alt="">
                <h4>${elemt.title}</h4>
            </div>
        `
    }).join('');

    return moviesTotal
};



/**
 * 点击电影图片跳转影片详情页
 * 
 */
$('main').on('click', '.card', function () {
    let moviesId = $(this).data('id');
    let type = $(this).data('type');
    location.href = `./detail.html?type=${type}&id=${moviesId}`;
})


/**
 * 底部按钮切换渲染
 */

//底部数据
let tabbarLists = [
    { id: 1, title: '首页', imgSrc: '../images/footer_nav_01_normal.png', imgSrcCheck: '../images/footer_nav_01_select.png', isChoose: true },
    { id: 2, title: '影院', imgSrc: '../images/footer_nav_02_normal.png', imgSrcCheck: '../images/footer_nav_02_select.png', isChoose: false },
    { id: 3, title: '影片', imgSrc: '../images/footer_nav_03_normal.png', imgSrcCheck: '../images/footer_nav_03_select.png', isChoose: false },
    { id: 4, title: '我的', imgSrc: '../images/footer_nav_04_normal.png', imgSrcCheck: '../images/footer_nav_04_select.png', isChoose: false }
];

/**
 * 底部渲染函数
 */

function footerReader() {
    let footerHtml = tabbarLists.map(item => {
        return `
            <div class="ft-item thaeter" data-id="${item.id}">
                <img src="${item.isChoose ? item.imgSrcCheck : item.imgSrc}" alt="">
                <span class="${item.isChoose ? 'ft-click' : ''}">${item.title}</span>
            </div>
        `
    }).join(' ');
    $('.ft-items').html(footerHtml);
};
footerReader();

/**
 * 点击底部图片切换事件
 */
$('.ft-items').on('click', '.ft-item', function () {
    //获取当前点击标签的自定义属性id值
    let _id = $(this).data('id');
    //遍历数据数组，找到被选中的对象
    tabbarLists.forEach(item => {
        //每次循环先默认全部不选中
        item.isChoose = false;

        if (item.id === _id ) {
            item.isChoose = true;
        }
    });
    footerReader(); 
});


/**
 * 头部登录信息渲染
 */
function headerReader() {
    //获取等地登录的信息
    let userLoginSucced = JSON.parse(localStorage.getItem('loginUser'));
    // console.log(userLoginSucced)
    $('.title-box span').text(`您好，${userLoginSucced[0].userName}${userLoginSucced[0].gender}！`)
};