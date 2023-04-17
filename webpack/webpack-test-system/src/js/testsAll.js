import '../sass/testsAll.scss';
import '../static/utils/auto-size';

import './header';

//引入获取路劲传参的工具函数
import { getUrlData } from '../static/utils/getUrlData';
//引入向后端发送请求的工具函数
import { http } from '../static/utils/http';

//获取考试类型的id
const typeId = getUrlData().typeId;
console.log(typeId);

/**
 * 渲染页面数据
 */
testsAllRender();
async function testsAllRender() {
    const testsArr = await http({
        url: '/tests/getIdByType',
        data: {
            typeId
        }
    });
    console.log(testsArr);

};

