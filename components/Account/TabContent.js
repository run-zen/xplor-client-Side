import React from 'react';
import styles from '../../styles/_CustomTabContent.module.css';

export default function TabContent(props) {
    return <div className={styles.content}>{props.children}</div>;
}
