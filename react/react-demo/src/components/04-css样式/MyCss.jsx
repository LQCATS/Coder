import React, { Component } from 'react';

import styles from './myCss.module.css';

export default class MyCss extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.bg}>局部样式</h1>
            </div>
        )
    }
}
