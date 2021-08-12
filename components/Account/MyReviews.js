import React from 'react';
import styles from '../../styles/_CustomTabContent.module.css';
import TabContent from './TabContent';

export default function MyReviews() {
    return (
        <TabContent>
            <div className={styles.title}>My Reviews</div>
        </TabContent>
    );
}
