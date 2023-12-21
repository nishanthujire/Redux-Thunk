
const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
}


//customised light theme
const light = {
    colors: {
        themeColor: '#FFFFFF',
        white: '#000000',
        sky: '#DE5E69',
        gray: 'gray',
        ...commonColor,
    },
};
//customised dark theme
const dark = {
    colors: {
        themeColor: '#000000',
        white: '#FFFFFF',
        sky: '#831a23',
        gray: 'white',
        ...commonColor,
    },
};

export default { light, dark };