import React from 'react';
import CustomCard from './CustomCard';
import Image from 'next/image';
import styles from '../styles/_home.module.css';
import {
    EnvironmentOutlined,
    CalendarOutlined,
    UserOutlined,
    FlagOutlined,
    DollarOutlined,
    StarFilled,
} from '@ant-design/icons';
import Link from 'next/link';

export default function TourCard({ tour }) {
    let options = {
        year: 'numeric',
        month: 'long',
    };

    const date = new Date(tour.startDates[0]);
    return (
        <CustomCard>
            <div className={styles.cardImage}>
                <Image
                    src={tour.imageCover}
                    alt="tour cover"
                    width={350}
                    height={225}
                />
                <div className={styles.cardImage_overlay}></div>
                <div className={styles.title}>
                    <span>{tour.name} Tour</span>
                </div>
            </div>
            <div className={styles.cardInfo}>
                <h5>
                    {tour.difficulty} {tour.duration}-day Tour
                </h5>
                <p>{tour.shortDescription}</p>
                <div className={styles.cardInfo_details}>
                    <div className={styles.cardInfo_details_tab}>
                        <EnvironmentOutlined /> {tour.startLocation.description}
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <CalendarOutlined />{' '}
                        {date.toLocaleString('en-US', options)}
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <FlagOutlined /> {tour.locations.length} stops
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <UserOutlined /> {tour.maxGroupSize} people
                    </div>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div>
                    <div className={styles.price}>
                        <DollarOutlined /> <strong>{tour.price}</strong> per
                        person
                    </div>
                    <div className={styles.rating}>
                        <StarFilled /> <strong>{tour.ratingsAverage}</strong>{' '}
                        rating ({tour.ratingsQuantity})
                    </div>
                </div>
                <div className={styles.btn}>
                    <Link href={`/tour/${tour.slug}`}>Details</Link>
                </div>
            </div>
        </CustomCard>
    );
}
