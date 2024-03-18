interface IconTemplate {
    defaultColor: string
    stroke?: boolean
    viewBox?: string
    template: string[]
    defaultSizes: {
        width?: number
        height?: number
    }
}

export const Logo = {
    defaultColor: 'currentColor',
    viewBox: '0 0 1000 1000',
    template: [
        `<g clip-path="url(#clip0_814_4)">
        <path d="M500.269 975.438C478.651 981.137 463.944 967.064 448.025 957.496C409.813 934.548 372.064 910.83 334.18 887.362C306.075 869.939 278.027 852.42 249.98 834.901C216.408 813.917 182.875 792.856 149.302 771.852C126.337 757.491 103.353 743.129 80.3489 728.825C62.6388 717.813 45.1213 706.416 27.0455 696.039C5.23521 683.507 -4.67856 648.68 4.38821 626.83C11.2605 610.293 22.0212 599.531 36.9015 590.232C60.8293 575.274 83.3904 558.121 106.606 542.007C121.255 531.842 135.904 521.697 150.804 511.936C156.791 508.009 156.829 505.39 150.765 501.733C124.682 486.004 98.6556 470.218 72.7258 454.258C56.8061 444.459 40.559 435.045 25.4285 424.129C5.06196 409.44 -4.42831 380.505 4.1187 355.151C9.83597 338.19 21.6362 328.044 35.015 318.977C64.1981 299.186 93.9779 280.281 123.411 260.818C148.898 243.953 174.231 226.896 199.584 209.839C238.911 183.368 278.047 156.609 317.529 130.349C363.363 99.8739 409.621 70.0724 455.359 39.4623C469.604 29.9135 483.464 21.1155 501.54 21C517.074 20.9037 529.645 28.0653 541.695 35.8815C569.3 53.7663 596.269 72.6329 623.566 90.9989C662.836 117.431 702.125 143.825 741.472 170.123C788.596 201.619 835.778 233.018 882.998 264.379C915.069 285.691 947.332 306.752 979.345 328.16C994.841 338.517 1004.02 373.902 997.844 392.152C990.568 413.618 974.744 425.612 955.918 435.95C937.977 445.787 921.056 457.492 903.692 468.37C885.828 479.536 868.08 490.875 850.042 501.752C843.074 505.968 844.267 508.528 850.235 512.417C876.068 529.282 901.902 546.185 927.428 563.55C945.388 575.774 963.733 587.672 980.23 601.687C998.229 616.973 1004.45 642.327 996.862 665.814C989.817 687.665 972.203 697.849 954.628 708.745C925.445 726.842 896.435 745.247 867.136 763.189C844.595 776.992 821.668 790.161 799.068 803.868C786.055 811.761 773.331 820.155 760.51 828.394C746.901 837.135 733.464 846.164 719.7 854.692C703.28 864.857 686.552 874.502 670.074 884.571C639.601 903.187 609.167 921.88 578.79 940.67C564.006 949.814 549.915 960.287 534.534 968.238C524.197 973.571 512.127 975.554 500.847 979.019C500.673 977.826 500.481 976.651 500.308 975.458L500.269 975.438ZM825.826 372.689C799.28 354.939 774.544 338.382 749.769 321.826C714.888 298.532 679.987 275.295 645.126 251.981C600.581 222.218 555.96 192.551 511.607 162.519C503.33 156.917 496.323 156.724 488.276 162.557C478.69 169.488 468.584 175.706 458.766 182.329C415.338 211.61 372.064 241.104 328.52 270.212C277.681 304.192 226.611 337.843 175.194 371.938C178.062 374.479 180.16 376.924 182.759 378.541C207.341 393.769 232.078 408.766 256.66 423.995C293.158 446.615 329.541 469.428 366.039 492.049C407.946 518.02 449.815 544.067 492.049 569.498C496.13 571.963 503.946 572.598 507.815 570.326C533.841 554.963 559.251 538.58 584.873 522.563C608.435 507.835 631.959 493.031 655.617 478.477C681.816 462.363 708.227 446.577 734.427 430.482C754.581 418.123 774.621 405.571 794.641 392.961C804.863 386.531 814.911 379.812 825.845 372.689H825.826ZM174.174 644.83C193.751 656.689 211.692 667.316 229.402 678.309C261.01 697.945 292.388 717.986 324.054 737.507C355.413 756.855 387.137 775.626 418.495 794.954C444.367 810.895 469.873 827.393 495.803 843.257C498.132 844.681 502.945 844.335 505.428 842.833C526.738 830.031 547.682 816.612 568.915 803.656C600.831 784.193 632.94 765.056 664.857 745.574C697.717 725.514 730.519 705.376 763.128 684.95C783.88 671.956 804.266 658.383 827.462 643.386C824.536 641.634 821.995 640.306 819.647 638.689C792.773 620.246 766.112 601.495 738.931 583.514C734.446 580.549 729.845 575.736 721.664 581.069C692.731 599.954 662.778 617.242 633.325 635.339C600.273 655.63 567.125 675.767 534.476 696.675C511.242 711.556 489.085 710.94 466.1 696.309C437.726 678.251 408.889 660.886 380.187 643.309C348.502 623.903 316.643 604.787 285.054 585.227C271.598 576.891 272.021 576.795 258.604 585.958C239.277 599.146 219.527 611.679 200.2 624.866C191.537 630.776 183.51 637.611 174.174 644.811V644.83Z" fill="url(#paint0_linear_814_4)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_814_4" x1="500.505" y1="20.999" x2="500.505" y2="979.019" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F53817"/>
        <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <clipPath id="clip0_814_4">
        <rect width="999" height="958" fill="white" transform="translate(1 21)"/>
        </clipPath>
        </defs>`
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const Menu = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="3" y1="12" x2="21" y2="12"></line>',
        '<line x1="3" y1="6" x2="21" y2="6"></line>',
        '<line x1="3" y1="18" x2="21" y2="18"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const Minus = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="5" y1="12" x2="19" y2="12"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const Plus = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="12" y1="5" x2="12" y2="19"></line>',
        '<line x1="5" y1="12" x2="19" y2="12"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}

export const X = {
    defaultColor: 'currentColor',
    stroke: true,
    template: [
        '<line x1="18" y1="6" x2="6" y2="18"></line>',
        '<line x1="6" y1="6" x2="18" y2="18"></line>'
    ],
    defaultSizes: {
        width: 16,
        height: 16
    }
}