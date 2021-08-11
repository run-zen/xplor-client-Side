import React from 'react';
import styles from '../styles/_home.module.css';
import TourCard from './TourCard';
import Image from 'next/image';
import HorizontalScrollMenu from './HorizontalScrollMenu/index.js';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    return (
        <div className={styles.content}>
            <section>
                <div>
                    <div className={styles.sectionHeader}>Popular tours</div>
                </div>
                <HorizontalScrollMenu>
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                    <TourCard key={uuidv4} itemId={uuidv4()} />
                </HorizontalScrollMenu>
            </section>
            <section>
                <div>
                    <div className={styles.sectionHeader}>all tours</div>
                </div>
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
            </section>
        </div>
    );
}
