import * as React from "react";
import { useTheme } from "../Themecontext"; // Import the useTheme hook

const SVGComponent = (props) => {
    const { theme } = useTheme(); // Access the current theme

    // Define fill colors based on the theme
    const fillColor = theme === 'dark' ? '#000000' : '#ffffff'; // Example colors

    return (
        <svg
            width="100%"     
            height="auto"   
            viewBox="0 0 1280 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}     
        >
            <g clipPath="url(#clip0_1_215)">
                <path 
                    d="M0 53.4996L53.3333 49.9218C106.667 46.4777 213.333 39.1215 320 30.3274C426.667 21.3996 533.333 10.6996 640 7.1218C746.667 3.67773 853.333 7.02148 960 21.3996C1066.67 35.7777 1173.33 60.5215 1226.67 73.1274L1280 85.5996V-0.000389099H1226.67C1173.33 -0.000389099 1066.67 -0.000389099 960 -0.000389099C853.333 -0.000389099 746.667 -0.000389099 640 -0.000389099C533.333 -0.000389099 426.667 -0.000389099 320 -0.000389099C213.333 -0.000389099 106.667 -0.000389099 53.3333 -0.000389099H0V53.4996Z" 
                    fill={fillColor} // Use the dynamic fill color
                />
            </g>
            <defs>
                <clipPath id="clip0_1_215">
                    <rect width="1280" height="107" fill="white" transform="matrix(1 0 0 -1 0 107)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default SVGComponent;
