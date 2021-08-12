import React, { useState, useEffect } from 'react';
import styles from '../styles/_home.module.css';
import TourCard from './TourCard';
import Image from 'next/image';
import HorizontalScrollMenu from './HorizontalScrollMenu/index.js';
import { v4 as uuidv4 } from 'uuid';
import { popular } from '../data/popularTour';
import { tour } from '../data/tour5';

export default function Home(props) {
    const [alltours, setAlltours] = useState([]);
    const [popularTours, setPopularTours] = useState([]);

    useEffect(() => {
        const { allTours, popular } = props.tours;
        setAlltours(allTours);
        setPopularTours(popular);
    }, []);

    return (
        <div className={styles.content}>
            <section>
                <div>
                    <div className={styles.sectionHeader}>Popular tours</div>
                </div>
                <HorizontalScrollMenu>
                    {popularTours.map((tour) => {
                        return (
                            <TourCard
                                key={uuidv4}
                                itemId={uuidv4()}
                                tour={tour}
                            />
                        );
                    })}
                </HorizontalScrollMenu>
            </section>
            <section>
                <div>
                    <div className={styles.sectionHeader}>all tours</div>
                </div>
                <div className={styles.cardGrid}>
                    {alltours.map((tour) => {
                        return <TourCard key={uuidv4} tour={tour} />;
                    })}
                </div>
            </section>
        </div>
    );
}
