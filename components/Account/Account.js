import React, { useState, useEffect } from 'react';
import styles from '../../styles/_CustomTabContent.module.css';
import TabContent from './TabContent';

const USER = {
    name: 'Ranjan Baruah',
    email: 'ranjan@gmail.com',
};

export default function Account() {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(USER);
    }, []);

    return (
        <TabContent>
            <div className={styles.title}>Your Details</div>
            <div className={styles.user_name}>{user.name}</div>
            <div className={styles.user_name}>{user.email}</div>
        </TabContent>
    );
}
