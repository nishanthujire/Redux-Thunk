import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    closeIcon: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 20,
        marginTop: 10,
        alignSelf: 'flex-end'
    },
    detailsContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#FFFAEF',

    },
    imageStyle: {
        //width: 330,
        height: 300,
        resizeMode: 'contain',
        backgroundColor: '#fff'
    },
    infoContainer: {
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    price: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    descContainer: {
        marginTop: 10,
        backgroundColor: '#FFFAEF',
        padding: 10
    },
    descText: {
        fontSize: 14,

        lineHeight: 20
    }


})