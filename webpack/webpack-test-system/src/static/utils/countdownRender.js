export function countdownRender(totalTime) {

    let hour = 0;//时
    let minute = 0;//分
    let second = totalTime;//秒
    if (second > 60) {
        //如果秒数大于60，将秒速换成整数
        //获取分钟，秒数除以60取整，得到整除分钟
        minute = parseInt(second / 60);
        //获取秒数，秒数60取余，得到整数秒数
        second = parseInt(second % 60);
        //如果分钟数大于60，将分钟数换成整数
        if (minute > 60) {
            //获取小时，分钟除以60取整，得到整数小时
            hour = parseInt(minute / 60);
            //获取分钟，分钟60取余，得到整数分钟
            minute = parseInt(minute % 60);
        }
    }
    return `${hour = String(hour).padStart(2, '0')}:${minute = String(minute).padStart(2, '0')}:${second = String(second).padStart(2, '0')}`
}