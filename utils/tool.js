export default {
    /**
     * 获取今天的日期，字符串形式。例：2024-04-26
     * @returns 
     */
    getNow() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let date = now.getDate();
        if (date < 10) {
            date = "0" + date;
        }
        let nowDate = year + "-" + month + "-" + date;

        return nowDate;
    },
    /**
     * 获取昨天的日期，字符串形式。例：2024-04-26
     * @returns 
     */
    getYesteday() {
        let now = new Date();
        now.setDate(now.getDate() -1);

        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let date = now.getDate();
        if (date < 10) {
            date = "0" + date;
        }
        let temp = year + "-" + month + "-" + date;
        return temp;
    },
    /**
     * 获取前几天的日期，字符串形式。例：2023-04-01
     * @param {*} dayNum 需要减去的天数
     * @returns 
     */
    getLastDay(dayNum) {
        let preSevenDay = new Date();
        preSevenDay.setDate(preSevenDay.getDate() - dayNum);
        //处理七天前的日期
        let month2 = preSevenDay.getMonth() + 1;
        if (month2 < 10) {
            month2 = "0" + month2;
        }
        let date2 = preSevenDay.getDate();
        if (date2 < 10) {
            date2 = "0" + date2;
        }
        let sevenDate = preSevenDay.getFullYear() + "-" + month2 + "-" + date2;
        return sevenDate;
    }
}