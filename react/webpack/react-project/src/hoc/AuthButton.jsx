import { Button } from 'antd';
import React from 'react';
import widthAuth from './widthAuth';

const AuthButton = (props) => {
    return (
        <Button {...props}>{props.children}</Button>
    )
}

export default widthAuth(AuthButton);