import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import PostCard from '../components/PostCard'

function HomeScreen() {
    return <>
        <View style={styles.appBar}>
            {/* <TouchableOpacity><Icon name="camera" size={25} color="#fff" /></TouchableOpacity> */}

            <Text style={styles.appBarName}>facebook</Text>

            <View style={styles.flex}>
                <TouchableOpacity><Icon name="search" size={22} style={styles.bgIcon} color="#fff" /></TouchableOpacity>
                <View style={styles.space20}></View>
                <TouchableOpacity><Icon name="send" size={22} style={styles.bgIcon} color="#fff" /></TouchableOpacity>
            </View>
    
        </View>

        <ScrollView>
            <View>
                <ScrollView style={styles.storyScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.storyImg}></View>
                    <View style={styles.storyImg}></View>
                    <View style={styles.storyImg}></View>
                    <View style={styles.storyImg}></View>
                    <View style={styles.storyImg}></View>
                    <View style={styles.storyImg}></View>
                </ScrollView>
            </View>

            <View>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </View>
        </ScrollView>
    </>
}

// function BottomNavigationBar() {
//     return <>
//         <View style={styles.bottomNavContainer}>
//             <TouchableOpacity>
//                 <Icon name="home" size={25} color="#fff" />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
//                 <Icon name="search" size={25} color="#fff" />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
//                 <Icon name="plus-square" size={25} color="#fff" />
//             </TouchableOpacity>

//             <TouchableOpacity>
//                 <Icon name="send" size={25} color="#fff" />
//             </TouchableOpacity>

//             <TouchableOpacity>
//                 <Icon name="user" size={25} color="#fff" />
//             </TouchableOpacity>
//         </View>
//     </>
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },

    storyScrollView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#242424',
        backgroundColor: '#000',
        marginBottom: -1,

    },

    storyImg: {
        width: 100,
        height: 168,
        borderRadius: 10,
        backgroundColor: '#242424',
        margin: 15,
        marginRight: 0,
    },

    bottomNavContainer: {
        borderTopWidth: 1,
        borderTopColor: '#242424',
        backgroundColor: '#000',
        padding: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 20
    },

    bgIcon: {
        backgroundColor: '#242424',
        borderRadius: 100,
        width: 38,
        height: 38,
        padding: 8,
        paddingLeft: 7,
    },

    appBarName: {
        fontSize: 28,
        color: '#fff',
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
        borderBottomColor: '#242424',
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
        borderBottomColor: '#242424',
        borderBottomWidth: 1,
        paddingLeft: 20,
        backgroundColor: '#000'
    },
});


export default HomeScreen;