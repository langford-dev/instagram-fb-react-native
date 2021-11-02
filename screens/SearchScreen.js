import React from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
// import styles from '../styles/styles';


function SearchScreen() {
    const videos = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '5869e4a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145w571e29d72',
            title: 'Third Item',
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.videoItem}>
            {/* <View style={styles.videoContent}>
                <View style={styles.flexStart}>
                    <View style={styles.avatar}></View>
                    <View style={styles.space10}></View>
                    <Text style={styles.caption}>introvert.dear_</Text>
                </View>

                <View style={styles.space10}></View>

                <Text style={styles.caption}>
                    But in the end, you have to be your own hero, because everyone is busy saving themselves
                </Text>
            </View>

            <View style={styles.videoActionContainer}>
                <TouchableOpacity style={styles.videoActionIcon}>
                    <Icon name="heart-outline" color={'#fff'} size={28} style={{ marginBottom: 5 }} />
                    <Text style={styles.whiteText}>12k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoActionIcon}>
                    <Icon name="share-outline" color={'#fff'} size={28} style={{ marginBottom: 5 }} />
                    <Text style={styles.whiteText}>12k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoActionIcon}>
                    <Icon name="ios-bookmark-outline" color={'#fff'} size={28} style={{ marginBottom: 5 }} />
                    <Text style={styles.whiteText}>12k</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoActionIcon}>
                    <Icon name="ios-ellipsis-horizontal-outline" color={'#fff'} size={28} />
                </TouchableOpacity>
            </View> */}
        </View>
    );

    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
            />

            {/* <View style={[styles.appBar, styles.flex]}>
                <Text style={[styles.whiteText, styles.appBarText]}>Reels</Text>
                <Icon name="camera" color='#fff' size={26} />
            </View> */}

            <FlatList
                style={styles.videoContainer}
                data={videos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    caption: {
        color: '#fff',
        lineHeight: 20
    },

    whiteText: { color: '#fff' },

    appBarText: { fontSize: 25 },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    flexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    appBar: {
        backgroundColor: '#000',
        borderBottomColor: '#f1f1f111',
        borderBottomWidth: 1,
        width: '100%',
        height: 55,
        paddingHorizontal: 15
    },

    videoContent: {
        position: "absolute",
        bottom: 10,
        paddingHorizontal: 10,
    },

    videoItem: {
        backgroundColor: '#fff',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 15,
        // position: 'relative',
        // height: '100%',
        // height: 500
        height: Dimensions.get('screen').height
        // marginTop: 30
    },

    videoContainer: {
        backgroundColor: 'grey',
        width: '100%',
        height: '100%',
        // flex: 1,
        // height: Dimensions.get('window').height - 100,
    },

    videoActionContainer: {
        position: 'absolute',
        bottom: -20,
        right: 0,
        padding: 15,
        paddingHorizontal: 0,
    },

    space10: {
        width: 10,
        height: 10
    },

    avatar: {
        width: 30,
        height: 30,
        backgroundColor: '#f1f1f1',
        borderRadius: 100
    },

    videoActionIcon: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default SearchScreen