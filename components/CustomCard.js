import React from 'react';
import styles from '../styles/_Card.module.css';

export default function CustomCard(props) {
    return <div className={styles.card}>{props.children}</div>;
}
