import React from 'react';
import styles from '../styles/_home.module.css';
import TourCard from './TourCard';
import Image from 'next/image';

export default function Home() {
    return (
        <div className={styles.content}>
            <div className={styles.cardGrid}>
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
                <TourCard />
            </div>
        </div>
    );
}
