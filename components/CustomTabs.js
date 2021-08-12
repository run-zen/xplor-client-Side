import React from 'react';
import styles from '../styles/_CustomTabs.module.css';
import { Tabs } from 'antd';
import Account from './Account/Account';
import MyBookings from './Account/MyBookings';
import MyReviews from './Account/MyReviews';
import Billings from './Account/Billings';

const { TabPane } = Tabs;

export default function CustomTabs(props) {
    function callback(key) {
        console.log(key);
    }

    const tabName = (title) => {
        return <div className={styles.title}>{title}</div>;
    };

    return (
        <div className={`${styles.layout} card-container`}>
            <Tabs
                defaultActiveKey="1"
                onChange={callback}
                className={styles.rc_tabs_mytabs}
            >
                <TabPane tab={tabName('Account')} key="1">
                    <Account />
                </TabPane>
                <TabPane tab={tabName('Bookings')} key="2">
                    <MyBookings />
                </TabPane>
                <TabPane tab={tabName('Reviews')} key="3">
                    <MyReviews />
                </TabPane>
                <TabPane tab={tabName('Billings')} key="4">
                    <Billings />
                </TabPane>
            </Tabs>
        </div>
    );
}
