//从网页地址获得电影id
const choiceMovieId = location.search.slice(4);

function filmReader(moviesArr) {
    //在数组里找到对应电影对象
    let choiceMovieObj = moviesArr.filter(elemt => elemt.id == choiceMovieId)[0];
    // console.log(choiceMovieObj)
    //渲染头部背景图片
    // console.log(choiceMovieObj.imgSrc)
    // let choiceMovieSrc = choiceMovieObj.imgSrc;
    // $('.big-img').css('backgroundImage','url(${choiceMovieSrc})');

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
filmReader(nowPlaying)