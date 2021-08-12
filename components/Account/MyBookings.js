import React from 'react';
import styles from '../../styles/_CustomTabContent.module.css';
import TabContent from './TabContent';

export default function MyBookings() {
    return (
        <TabContent>
            <div className={styles.title}>My Bookings</div>
        </TabContent>
    );
}
