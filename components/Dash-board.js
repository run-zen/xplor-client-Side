import React, { useState } from 'react';
import Image from 'next/image';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import MyDropDown from './DropDown';
import styles from '../styles/_dashboard.module.css';
import { DownOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function DashBoard(props) {
    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapse() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={styles.dashBoard_layout}>
            <Layout>
                <Layout className="site-layout">
                    <Header
                        className={'site-layout-background ' + styles.header}
                        style={{
                            position: 'fixed',
                        }}
                    >
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

                        <MyDropDown className={styles['header-user']}>
                            <div className={styles['header-user--image']}>
                                <Image
                                    src="https://xplor.s3.ap-south-1.amazonaws.com/img/users/default.jpg"
                                    alt="Picture of the author"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div className={styles['header-user--name']}>
                                Ranjan <DownOutlined />
                            </div>
                        </MyDropDown>
                    </Header>
                    <Content
                        className={'site-layout-background ' + styles.Content}
                        // style={{
                        //     margin: '70px 20px',
                        //     padding: '20px',
                        //     overflow: 'initial',
                        // }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
