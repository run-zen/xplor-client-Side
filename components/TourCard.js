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

export default function TourCard() {
    return (
        <CustomCard>
            <div className={styles.cardImage}>
                <Image
                    src="/tours/tour-1-cover.jpg"
                    alt="tour cover"
                    width={350}
                    height={225}
                />
                <div className={styles.cardImage_overlay}></div>
                <div className={styles.title}>
                    <span>The Rain Forest Tour</span>
                </div>
            </div>
            <div className={styles.cardInfo}>
                <h5>Easy 5-day Tour</h5>
                <p>
                    Breathtaking hike through the Canadian Banff National Park
                </p>
                <div className={styles.cardInfo_details}>
                    <div className={styles.cardInfo_details_tab}>
                        <EnvironmentOutlined /> Banff, Canada
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <CalendarOutlined /> December, 2021
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <FlagOutlined /> 3 stops
                    </div>
                    <div className={styles.cardInfo_details_tab}>
                        <UserOutlined /> 15 people
                    </div>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div>
                    <div className={styles.price}>
                        <DollarOutlined /> <strong>297</strong> per person
                    </div>
                    <div className={styles.rating}>
                        <StarFilled /> <strong>4.8</strong> rating (447)
                    </div>
                </div>
                <div className={styles.btn}>
                    <Link href="/">Details</Link>
                </div>
            </div>
        </CustomCard>
    );
}
