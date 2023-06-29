import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const breadCrumb = [
    { path: '/home', titleData: [{ title: <a href="/home">首页</a> }] },
    { path: '/users', titleData: [{ title: <a href="/home">首页</a> }, { title: '用户管理' }] },
    { path: '/roles', titleData: [{ title: <a href="/home">首页</a> }, { title: '角色管理' }] },
    { path: '/goodsList', titleData: [{ title: <a href="/home">首页</a> }, { title: '商品列表' }] },
    { path: '/goodsType', titleData: [{ title: <a href="/home">首页</a> }, { title: '商品分类' }] },
    { path: '/add/goods', titleData: [{ title: <a href="/home">首页</a> }, { title: '商品列表' }, { title: '新增商品' }] },
    { path: '/update/goods', titleData: [{ title: <a href="/home">首页</a> }, { title: '商品列表' }, { title: '修改商品' }] },
    { path: '/shops', titleData: [{ title: <a href="/home">首页</a> }, { title: '店铺管理' }] },
    { path: '/sales', titleData: [{ title: <a href="/home">首页</a> }, { title: '数据统计' }, { title: '销售金额' }] },
    { path: '/expend', titleData: [{ title: <a href="/home">首页</a> }, { title: '数据统计' }, { title: '支出流水' }] },
];
const IndexBreadCrumb = () => {
    //获取当前路由路径
    const { pathname } = useLocation();

    //计算属性
    const filterBreadCrumb = useMemo(() => {
        return breadCrumb.find(item => pathname.includes(item.path))?.titleData
    }, [pathname])
    return (
        <Breadcrumb
            items={filterBreadCrumb} separator=">" />
    )
}

export default IndexBreadCrumb;