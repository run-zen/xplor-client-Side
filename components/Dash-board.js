import React, { useState } from 'react';
import Image from 'next/image';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeFilled,
    CalendarFilled,
} from '@ant-design/icons';
import styles from '../styles/_dashboard.module.css';

const { Header, Sider, Content } = Layout;

export default function DashBoard(props) {
    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapse() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={styles.dashBoard_layout}>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        zIndex: 101,
                    }}
                >
                    <div className="trigger">
                        <div className="trigger-icon" onClick={toggleCollapse}>
                            {collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )}
                        </div>
                    </div>

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className={styles.menu}
                    >
                        <Menu.Item key="1" icon={<HomeFilled />}>
                            <Link href="/" passHref>
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link href="/me" passHref>
                                My Account
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CalendarFilled />}>
                            <Link href="/me/bookings" passHref>
                                My Bookings
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className={'site-layout-background ' + styles.header}
                        style={{
                            padding: 0,
                            position: 'fixed',
                        }}
                    >
                        <div style={{ flex: 1 }}></div>
                        <div className={styles.brand}>
                            <Link
                                href="http://localhost:3000/"
                                replace
                                passHref
                            >
                                <Image
                                    src="/logo-red.png"
                                    width={'100%'}
                                    height={'100%'}
                                    alt="Brand logo"
                                />
                            </Link>
                        </div>
                        <div className={styles['header-user']}>
                            <div className={styles['header-user--image']}>
                                <Image
                                    src="https://xplor.s3.ap-south-1.amazonaws.com/img/users/default.jpg"
                                    alt="Picture of the author"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className={styles['header-user--name']}>
                                User Name
                            </div>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '74px 10px 10px 90px',
                            padding: '20px',
                            overflow: 'initial',
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
