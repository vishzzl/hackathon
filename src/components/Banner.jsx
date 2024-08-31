import React from 'react';
import { useTheme } from '../Themecontext';

const getThemeClass = (theme, baseClass) => {
    return `${theme === 'dark' ? 'dark-theme' : 'light-theme'} ${baseClass}`;
};

const Banner = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="mt-18 pt-18" >
            <div className={getThemeClass(theme, 'frame-2609247')}>
                <div className={getThemeClass(theme, 'container-13')}>
                    <div className={getThemeClass(theme, 'container-19')}>
                        <div className={getThemeClass(theme, 'group-159')}>
                            <div className={getThemeClass(theme, 'container-101')}>
                                <p className={getThemeClass(theme, 'hack-the-future')}>
                                    Hack The
                                    <br/>
                                    <span className={getThemeClass(theme, 'hack-the-future-sub-30')}>future</span> <br/>
                                    <span className={getThemeClass(theme, 'hack-the-future-sub-15')}>  Solving Global problems one challenge at a time.</span>

                                </p>
                                <div className={getThemeClass(theme, 'actions')}>
                                    <div className={getThemeClass(theme, 'button-base')}>
                                        <span className={getThemeClass(theme, 'text')}>
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className={getThemeClass(theme, 'group-156')}>
                            <div className={getThemeClass(theme, 'container-80')}>
                                <div>
                                <img src='/girl.png' alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className={getThemeClass(theme, 'group-73')}>
                            <div className={getThemeClass(theme, 'container-30')}>
                                <div className="downloader-la-66432-ca-77591-ephotoroom-1">
                                    <img src='/girl.png' alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dmini-winner-cup-1">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
