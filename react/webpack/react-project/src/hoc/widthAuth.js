const widthAuth = (Component) => {
    return (props) => {
        //获取按钮权限
        const { role } = JSON.parse(localStorage.UserInfo || '[]');
        if (role?.name === '超级管理员') {
            return <Component {...props} />
        }
        return <Component disabled={true} {...props} />;
    }
};

export default widthAuth;