import React from 'react';
import Head from 'next/head';

export default function CustomHead(props) {
    return (
        <Head>
            <meta name="description" content="Xplor | A tour website" />
            <link rel="icon" href="/favicon.png" />
            {props.children}
        </Head>
    );
}
