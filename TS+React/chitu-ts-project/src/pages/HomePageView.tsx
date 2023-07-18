import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { getHomeInfoAPI } from '../apis/usersAPI';


const HomePageView = () => {

    useEffect(() => {
        homeInfo();
    }, []);

    //访问量数据
    const [lastVisitCount, setLastVisitCount] = useState<any>({});
    console.log(lastVisitCount);
    //获取用户信息
    const { avatar, username, deptName, roleName, lastLoginTime } = JSON.parse(localStorage.User || '{}');
    //获取用户首页需要的数据
    const homeInfo = async () => {
        const res = await getHomeInfoAPI();
        setLastVisitCount(res.data)
    }
    return (
        <>
            <Card style={{ width: '100%', marginTop: '20px' }}>
                <div className='home_top_warp'>
                    <div className='home_top_user_Info_warp'>
                        <img src={`http://xawn.f3322.net:8002/distremote/static/avatar/${avatar}`} alt="" />
                        <div>
                            <p>下午好，{username}，今天在群里吹水了吗</p>
                            <p>{deptName} | {roleName}</p>
                            <p>上次登录时间：{lastLoginTime}</p>
                        </div>
                    </div>
                    <div className='home_top_visit_warp'>
                        <div>
                            <p>今日IP</p>
                            <span>{lastVisitCount.todayIp}</span>
                        </div>
                        <div>
                            <p>今日访问</p>
                            <span>{lastVisitCount.todayVisitCount}</span>
                        </div>
                        <div>
                            <p>总访问量</p>
                            <span>{lastVisitCount.totalVisitCount}</span>
                        </div>
                    </div>
                </div>

            </Card>
            <Card style={{ width: '50%', marginTop: '20px' }}>

            </Card>
        </>
    )
}

export default HomePageView