import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import PostCard from '../components/PostCard'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarName}>facebook</Text>

                <View style={styles.flex}>
                    <TouchableOpacity><Icon name="camera" size={25} color="#fff" /></TouchableOpacity>
                    <View style={styles.space30}></View>
                    <TouchableOpacity><Icon name="send" size={25} color="#fff" /></TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabs}>
                    <TouchableOpacity><Text style={[styles.tabItem, styles.activeTabItem]}>For you</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tabItem}>Popular</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tabItem}>Trending</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tabItem}>Hot Today</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tabItem}>Most Upvoted</Text></TouchableOpacity>
                </ScrollView> */}

                <View>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </View>
            </ScrollView>
        </View>
    );
}

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

    // avatar: {
    //     width: 35,
    //     height: 35,
    //     borderRadius: 100,
    //     backgroundColor: '#444', borderColor: '#f1f1f133',
    //     borderWidth: 1,
    // },
});


export default HomeScreen;