/**
 * 主函数
 */
function main() {
    //渲染正在热映的电影
    $('#hot-playing').html(readerHomepage(nowPlaying, 1));
    //渲染即将上映的电影
    $('#play-soon').html(readerHomepage(upComing, 2));

    footerRender('ft-items', 1);
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
 * 跳转页面
 * 
 */
$('main').on('click','.card',function () {
    let moviesId = $(this).data('id');
    let type = $(this).data('type');
    location.href = `./detail.html?type=${type}&id=${moviesId}`;
})

