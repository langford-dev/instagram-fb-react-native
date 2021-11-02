import React from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import PostCard from '../components/PostCard'

// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// const bottomTabNavigator = createBottomTabNavigator(
//     {
//         FeedPage: FeedPage,
//         SearchPage: SearchPage,
//     },
//     {
//         initialRouteName: 'FeedPage'
//     }
// );

// function SearchPage() {
//     return <Text>SearchPage</Text>
// }


// const AppContainer = createAppContainer(bottomTabNavigator);

function BottomNavigationBar() {
    const sheetRef = React.useRef(null);
    const renderContent = () => (
        <View style={styles.bottomSheet}>
            <TouchableOpacity style={styles.bottomSheetItem}>
                <Icon name='grid' size={23} color='#000' />
                <Text style={styles.bottomSheetText}>Add a post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomSheetItem}>
                <Icon name='video' size={23} color='#000' />
                <Text style={styles.bottomSheetText}>Share a video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomSheetItem}>
                <Icon name='heart' size={23} color='#000' />
                <Text style={styles.bottomSheetText}>Add to featured</Text>
            </TouchableOpacity>
        </View>
    );

    return <>
        <View style={styles.bottomNavContainer}>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Icon name="home" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Icon name="search" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Icon name="plus-square" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Icon name="send" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                <Icon name="user" size={25} color="#000" />
            </TouchableOpacity>


        </View>
        <BottomSheet
            ref={sheetRef}
            snapPoints={[162, 300, 0]}
            renderContent={renderContent}
        />
    </>
}

function FeedPage() {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>beanstagram</Text>

                <View style={styles.flex}>
                    <TouchableOpacity onPress={() => alert('hello world')}>
                        <Icon name="heart" size={24} stroke-width="1" color="#000" />
                    </TouchableOpacity>

                    <View style={styles.space30}></View>

                    <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                        <Icon name="bell" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <BottomNavigationBar />



            <ScrollView showsVerticalScrollIndicator={false}>
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

                <View style={styles.postsContainer}>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    postsContainer: {
        flex: 1,
        marginTop: 80,
        // height: '100%',
        // marginBottom: 50,
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    space30: {
        width: 30,
        height: 30
    },

    space20: {
        width: 20,
        height: 20
    },

    storyScrollView: {
        // backgroundColor: '#f1f1f1',
        // height: 170,
        // overflow: "scroll",
        
        marginTop: 80,
        flexDirection: 'row',
        marginBottom: -70,
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
    },

    storyImg: {
        width: 68,
        height: 68,
        borderRadius: 100,
        backgroundColor: '#f1f1f1',
        margin: 15,
        marginRight: 0
    },

    bottomNavContainer: {
        borderTopWidth: 1,
        borderColor: '#f1f1f1',
        backgroundColor: '#fff',
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

    bottomSheetItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#f1f1f1',
        padding: 15,
        paddingHorizontal: 20,
    },

    textBtn: {
        color: '#006ee6'
    },

    bottomSheetText: {
        color: "#000",
        marginLeft: 20,
        // marginBottom: 25,
    },

    bottomSheet: {
        backgroundColor: '#fff',
        height: 400,
        width: '100%',
        borderRadius: 15,
        // borderTopColor: '#f1f1f1',
        // borderTopWidth: 1,
    },

    appBar: {
        padding: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 20,
        backgroundColor: '#fff',
        // marginTop: -35,
        paddingTop: StatusBar.currentHeight + 10,
    },

    appBarTitle: {
        fontSize: 25,
        color: '#000'
    },
});

export default FeedPage