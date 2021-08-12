import Head from 'next/head';
import Home from '../components/Home';
import CustomHead from '../components/CustomHead';

const popular = {
    startLocation: {
        description: 'Miami, USA',
        type: 'Point',
        coordinates: [-80.185942, 25.774772],
        address: '301 Biscayne Blvd, Miami, FL 33132, USA',
    },
    ratingsAverage: 4.8,
    ratingsQuantity: 60,
    images: [
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-2-1.jpg',
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-2-2.jpg',
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-2-3.jpg',
    ],
    startDates: [
        '2021-06-19T09:00:00.000Z',
        '2021-07-20T09:00:00.000Z',
        '2021-08-18T09:00:00.000Z',
    ],
    _id: '5c88fa8cf4afda39709c2955',
    name: 'The Sea Explorer',
    slug: 'the-sea-explorer',
    duration: 7,
    maxGroupSize: 15,
    difficulty: 'medium',
    guides: ['5c8a22c62f8fb814b56fa18b', '5c8a1f4e2f8fb814b56fa185'],
    price: 497,
    summary: 'Exploring the jaw-dropping US east coast by foot and by boat',
    description:
        'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover:
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-2-cover.jpg',
    locations: [
        {
            _id: '5c88fa8cf4afda39709c2959',
            description: 'Lummus Park Beach',
            type: 'Point',
            coordinates: [-80.128473, 25.781842],
            day: 1,
        },
        {
            _id: '5c88fa8cf4afda39709c2958',
            description: 'Islamorada',
            type: 'Point',
            coordinates: [-80.647885, 24.909047],
            day: 2,
        },
        {
            _id: '5c88fa8cf4afda39709c2957',
            description: 'Sombrero Beach',
            type: 'Point',
            coordinates: [-81.0784, 24.707496],
            day: 3,
        },
        {
            _id: '5c88fa8cf4afda39709c2956',
            description: 'West Key',
            type: 'Point',
            coordinates: [-81.768719, 24.552242],
            day: 5,
        },
    ],
};
const tour = {
    startLocation: {
        description: 'Aspen, USA',
        type: 'Point',
        coordinates: [-106.822318, 39.190872],
        address: '419 S Mill St, Aspen, CO 81611, USA',
    },
    ratingsAverage: 4.5,
    ratingsQuantity: 6,
    images: [
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-3-1.jpg',
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-3-2.jpg',
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-3-3.jpg',
    ],
    startDates: [
        '2022-01-05T10:00:00.000Z',
        '2022-02-12T10:00:00.000Z',
        '2023-01-06T10:00:00.000Z',
    ],
    _id: '5c88fa8cf4afda39709c295a',
    name: 'The Snow Adventurer',
    slug: 'the-snow-adventurer',
    duration: 4,
    maxGroupSize: 10,
    difficulty: 'difficult',
    guides: [
        '5c8a21d02f8fb814b56fa189',
        '5c8a23412f8fb814b56fa18c',
        '5c8a1f4e2f8fb814b56fa185',
    ],
    price: 997,
    summary: 'Exciting adventure in the snow with snowboarding and skiing',
    description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    imageCover:
        'https://xplor.s3.ap-south-1.amazonaws.com/img/tours/tour-3-cover.jpg',
    locations: [
        {
            _id: '5c88fa8cf4afda39709c295c',
            description: 'Aspen Highlands',
            type: 'Point',
            coordinates: [-106.855385, 39.182677],
            day: 1,
        },
        {
            _id: '5c88fa8cf4afda39709c295b',
            description: 'Beaver Creek',
            type: 'Point',
            coordinates: [-106.516623, 39.60499],
            day: 2,
        },
    ],
};

export default function HomePage(props) {
    return (
        <div>
            <CustomHead>
                <title>Xplor | All Tours</title>
            </CustomHead>

            <Home tours={props} />
        </div>
    );
}

export async function getStaticProps(context) {
    let popularTours = [];
    for (let i = 0; i < 6; i++) {
        popularTours.push(popular);
    }

    let allTours = [];

    for (let i = 0; i < 9; i++) {
        allTours.push(tour);
    }

    return {
        props: {
            popular: popularTours,
            allTours: allTours,
        }, // will be passed to the page component as props
    };
}
