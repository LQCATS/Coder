//全局变量

const parseSearch = (searchStr) => {
    if (!searchStr || searchStr.length <= 1) {
        return {};
    }

    const paramStr = searchStr.substring(1);
    const paramStrSpitArr = paramStr.split('&');
    const params = {};
    for (let i = 0; i < paramStrSpitArr.length; i++) {
        const tempStr = paramStrSpitArr[i];

        const tempStrSplitArr = tempStr.split('=');
        params[tempStrSplitArr[0]] = tempStrSplitArr[1];
    }

    return params;
}

//从网页地址获得电影id
const parseResult = parseSearch(location.search);

const fromType = parseResult.type;
const choiceMovieId = parseResult.id;
// const choiceMovieId = location.search.slice(4);



/**
 * 主函数
 * 
 */
function detailMain() {

    console.log(nowPlaying);
    console.log(upComing);

    filmReader(fromType === '1' ? nowPlaying : upComing);
};
detailMain();

/**
 * 影片详情渲染
 * 
 */
function filmReader(moviesArr) {
    //在数组里找到对应电影对象
    const choiceMovieObj = moviesArr.filter(elemt => elemt.id == choiceMovieId)[0];
    // console.log(choiceMovieObj)
    //渲染头部背景图片
    const choiceMovieSrc = choiceMovieObj.imgSrc;
    $('.big-img').css('backgroundImage',`url(${choiceMovieSrc})`);

    //渲染小图
    $('.sml-img img').attr('src',`${choiceMovieSrc}`)

    //渲染电影名字
    $('.movie-message h4').text(choiceMovieObj.title.split(' ')[0])

    //渲染电影类型
    $(".movie-message p:nth-child(2) em").text(choiceMovieObj.movieType)

    //电影时长
    $(".movie-message p:nth-child(3) em").text(choiceMovieObj.duration)

    //电影评分
    $(".movie-message p:nth-child(4) em").text(choiceMovieObj.score)

    //电影简介
    $('.brief-message p').text(choiceMovieObj.desc)

};
