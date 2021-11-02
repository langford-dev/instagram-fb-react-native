import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#242424',
    },

    appBarName: {
        fontSize: 28,
        color: '#fff'
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    space15: {
        width: 15,
        height: 15
    },

    space10: {
        width: 10,
        height: 10
    },

    space20: {
        width: 20,
        height: 20
    },

    space30: {
        width: 30,
        height: 30
    },

    tabs: {
        flexDirection: 'row',
        height: 55,
        borderBottomColor: '#f1f1f111',
        borderBottomWidth: 1,
    },

    tabItem: {
        backgroundColor: '#242424',
        color: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        paddingHorizontal: 15,
        marginLeft: 15,
        marginTop: 10,
        borderRadius: 100
    },

    activeTabItem: {
        backgroundColor: '#006ee6'
    },

    searchBox: {
        backgroundColor: '#444',
        paddingVertical: 8,
        paddingHorizontal: 15,
        width: '75%',
        borderRadius: 100,
        borderColor: '#f1f1f133',
        borderWidth: 1,
    },

    appBar: {
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomColor: '#f1f1f111',
        borderBottomWidth: 1,
        paddingLeft: 20,
    },
})

export default styles