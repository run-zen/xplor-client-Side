import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import styles from './index.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

function HorizontalScrollMenu(props) {
    // dependent on react-horizontal-scrolling-menu@2.0.4
    /// *** VERY IMPORTANT *** ////
    // 'itemId' props is required for each prop children element
    // example
    // <div itemId={some unique id}></div>
    // it doesn't have to used by the div above itself

    function LeftArrow() {
        const { isFirstItemVisible, scrollPrev } =
            React.useContext(VisibilityContext);

        return (
            <div
                className={`${styles.control} ${styles.left}`}
                style={
                    isFirstItemVisible ? { opacity: '0', zIndex: '-10' } : null
                }
            >
                <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
                    <LeftOutlined />
                </div>
            </div>
        );
    }

    function RightArrow() {
        const { isLastItemVisible, scrollNext } =
            React.useContext(VisibilityContext);

        return (
            <div
                className={`${styles.control} ${styles.right}`}
                style={
                    isLastItemVisible ? { opacity: '0', zIndex: '-10' } : null
                }
            >
                <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
                    <RightOutlined />
                </div>
            </div>
        );
    }

    return (
        <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            wrapperClassName={styles.hide_ScrollBar}
        >
            {props.children}
        </ScrollMenu>
    );
}

export default HorizontalScrollMenu;
