import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PostCard from '../components/PostCard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import VideoScreen from './VideoScreen'

const NavStack = createStackNavigator()

export default function User() {
    return <NavigationContainer independent={true} >
        <NavStack.Navigator>
            <NavStack.Screen name='UserScreen' component={UserScreen} options={{ headerShown: false }} />
            <NavStack.Screen name='VideoScreen' component={VideoScreen} options={{ headerShown: false }} />
        </NavStack.Navigator>
    </NavigationContainer>
}

const UserScreen = ({ navigation }) => {
    const [isFollowing, setIsFollowing] = useState(true)

    function followBtn() {
        if (isFollowing) {
            return <TouchableOpacity onPress={() => setIsFollowing(!isFollowing)}>
                <Text style={styles.btn}>Follow</Text>
            </TouchableOpacity>
        }

        else return <TouchableOpacity onPress={() => setIsFollowing(!isFollowing)}>
            <Text style={[styles.btn, styles.outlineBtn]}>Following</Text>
        </TouchableOpacity>
    }

    return (
        <>
            <View style={[styles.appBar, styles.flex]}>
                <TouchableOpacity><Icon name="arrow-back" color='#fff' size={26} /></TouchableOpacity>
                <Text style={[styles.whiteText, styles.appBarText]}>lang.ford_</Text>
                <TouchableOpacity><Icon name="add" color='#fff' size={26} /></TouchableOpacity>
            </View>

            <ScrollView style={styles.container}>
                <Image style={styles.coverImg} source={{ uri: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f3686cb821ad8a56911e85d%2F0x0.jpg' }} />

                <View style={[styles.flexCenter, styles.avatarEditBtnContainer]}>
                    <Image style={styles.avatar} source={{ uri: 'https://static.wikia.nocookie.net/08b81b8e-00c6-4f69-83c6-94bfc79f05c7/scale-to-width/755' }} />
                    <TouchableOpacity><Icon name="camera" color='#fff' style={styles.avatarEditBtn} size={25} /></TouchableOpacity>
                </View>

                <View style={styles.space20}></View>

                <View style={styles.flexCenter}>
                    <Text style={[styles.name, styles.whiteText]}>Drew Gooden</Text>
                </View>

                <View style={styles.space5}></View>

                <View style={styles.flexCenter}>
                    <Text style={styles.greyText}>Software engineer</Text>
                </View>

                <View style={styles.space5}></View>

                <View style={styles.flexCenter}>
                    <Text style={styles.whiteText}>i love chimichangas ✌🏽🌼</Text>
                </View>

                <View style={styles.space20}></View>

                <View style={[styles.flexCenter, styles.profileActionContainer]}>
                    {followBtn()}
                    <View style={styles.space10}></View>

                    {/* change to message if is not my account 👇🏽👇🏽👇🏽 */}
                    <TouchableOpacity><Text style={[styles.btn, styles.outlineBtn]}>Edit Profile</Text></TouchableOpacity>

                    <View style={styles.space10}></View>
                    <TouchableOpacity><Icon style={[styles.btn, styles.greyBtn, styles.moreBtn]} name="ellipsis-horizontal-outline" color='#fff' size={26} /></TouchableOpacity>
                </View>

                <View style={styles.space10}></View>

                {/* <View style={styles.flexBetween}>
                    <Text style={[styles.greyText, styles.sectionText]}>Featured (4)</Text>
                    <TouchableOpacity><Text style={[styles.textBtn, styles.sectionText]}>See all</Text></TouchableOpacity>
                </View> */}

                <View style={[styles.flex, styles.statsContainer]}>
                    <TouchableOpacity style={styles.statsItem}>
                        <Text style={[styles.whiteText, styles.statNum]}>125</Text>
                        <Text style={styles.whiteText}>followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.statsItem}>
                        <Text style={[styles.whiteText, styles.statNum]}>100</Text>
                        <Text style={styles.whiteText}>following</Text>
                    </TouchableOpacity>
                    <View style={styles.statsItem}>
                        <Text style={[styles.whiteText, styles.statNum]}>12.5k</Text>
                        <Text style={styles.whiteText}>posts</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Text style={[styles.whiteText, styles.statNum]}>0</Text>
                        <Text style={styles.whiteText}>mentions</Text>
                    </View>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.featuredPhotosContainer}>
                    <TouchableOpacity style={styles.featuredPhoto}>
                        <View style={styles.featuredPhotoThumbnail}></View>
                        <Text style={styles.whiteText} numberOfLines={1}> space 🌎</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featuredPhoto}>
                        <View style={styles.featuredPhotoThumbnail}></View>
                        <Text style={styles.whiteText}>goofy 🤓🤪</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featuredPhoto}>
                        <View style={styles.featuredPhotoThumbnail}></View>
                        <Text style={styles.whiteText}>ooo 💞💞💞</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featuredPhoto}>
                        <View style={styles.featuredPhotoThumbnail}></View>
                        <Text style={styles.whiteText}>erhhh??</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featuredPhoto}>
                        <View style={styles.featuredPhotoThumbnail}></View>
                        <Text style={styles.whiteText} numberOfLines={1}> space 🌎</Text>
                    </TouchableOpacity>
                </ScrollView>

                <View>
                    <View style={styles.customTabBar}>
                        <TouchableOpacity style={[styles.customTabBarItem, styles.activeCustomTabBarItem]}>
                            <Icon name="ios-list-outline" color='#fff' size={17} />
                            <Text style={[styles.customTabBarText, styles.activeCustomTabBarItemText]}>Posts</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.push('VideoScreen')} style={styles.customTabBarItem}>
                            <Icon name="ios-videocam-outline" color='#ffffff77' size={17} />
                            <Text style={styles.customTabBarText}>Videos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.customTabBarItem}>
                            <Icon name="ios-people-outline" color='#ffffff77' size={17} />
                            <Text style={styles.customTabBarText}>Mentions</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <PostCard />
                <PostCard />
                <PostCard />

            </ScrollView >
        </>
    )
}



const styles = StyleSheet.create({
    tabBtn: {
        backgroundColor: 'red',
        color: 'red',
    },

    avatarEditBtnContainer: {
        position: 'relative',
    },

    statsContainer: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#242424',
    },

    statsItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: -20,
    },

    statNum: {
        fontSize: 19
    },

    avatarEditBtn: {
        // backgroundColor: 'red',
        // position: 'absolute',
        // right: 0
        // position: 'relative',

        backgroundColor: '#000000',
        borderRadius: 100,
        padding: 5,
        left: -30
    },

    featuredPhotosContainer: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,


        // borderBottomColor: '#242424',
        // borderBottomWidth: 1,
        // backgroundColor: '#24242466',
    },

    sectionText: {
        padding: 13,
        paddingVertical: 20,
    },

    featuredPhotoThumbnail: {
        backgroundColor: '#242424',
        width: 70,
        height: 70,
        borderRadius: 100,
        marginBottom: 7,
        borderColor: '#ffffff44',
        borderWidth: 1,
    },

    featuredPhoto: {
        width: Dimensions.get('window').width / 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        width: 3,
        height: 3,
        backgroundColor: '#777',
        margin: 6,
        marginTop: 7,
        borderRadius: 100
    },

    customTabBar: {
        justifyContent: 'space-between',
        backgroundColor: '#000',
        borderBottomColor: '#242424',
        borderBottomWidth: 1,
        width: '100%',
        flexDirection: 'row',
    },

    customTabBarItem: {
        // borderLeftColor: '#242424',
        // borderLeftWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 1,
    },

    customTabBarText: {
        color: '#ffffff77',
        marginLeft: 5,
        paddingVertical: 6,
    },

    activeCustomTabBarItemText: { color: '#fff' },

    activeCustomTabBarItem: {
        borderBottomColor: '#fff',
        borderWidth: 1,
        borderLeftWidth: 0,
    },

    profileActionContainer: {
        // borderBottomWidth: 1,
        // borderBottomColor: '#242424',
        width: '100%',
        paddingBottom: 20,
    },

    btn: {
        backgroundColor: '#006aee',
        color: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 3,

        // width:'110%'
        // width: '130%',
        // maxWidth: 200,
        // width:'100%'
    },

    outlineBtn: {
        backgroundColor: 'transparent',
        borderColor: '#444',
        borderWidth: 1,
    },

    textBtn: {
        color: '#006aee'
    },

    greyBtn: {
        backgroundColor: '#242424'
    },

    moreBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    flexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    name: {
        fontSize: 27,
    },

    w100: {
        minWidth: 200,
    },

    // nameAvatarContainer: {
    //     padding: 15,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    // },

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: '#242424',
        marginTop: -80,
        borderWidth: 7,
        borderColor: '#000',
        marginLeft: 30,
    },

    container: {
        flex: 1,
        backgroundColor: '#000'
    },

    whiteText: { color: '#fff' },

    greyText: { color: '#888' },

    coverImg: {
        backgroundColor: '#242424',
        height: Dimensions.get('window').height / 5,
        width: '96%',
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,

        width: '100%',
        marginLeft: 0,
        borderRadius: 0,
        marginTop: 0,
    },

    appBar: {
        backgroundColor: '#000',
        borderBottomColor: '#242424',
        borderBottomWidth: 1,
        width: '100%',
        height: 60,
        paddingHorizontal: 15,
    },

    appBarText: {
        fontSize: 19,
        fontWeight: 'bold'
    },

    space20: {
        width: 20,
        height: 20
    },

    space10: {
        width: 10,
        height: 10
    },

    space5: {
        width: 5,
        height: 5
    },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

// function UserScreen() {
//     const [isFollowing, setIsFollowing] = useState(true)

//     function followBtn() {
//         if (isFollowing) {
//             return <TouchableOpacity onPress={() => setIsFollowing(!isFollowing)}>
//                 <Text style={styles.btn}>Follow</Text>
//             </TouchableOpacity>
//         }

//         else return <TouchableOpacity onPress={() => setIsFollowing(!isFollowing)}>
//             <Text style={[styles.btn, styles.outlineBtn]}>Following</Text>
//         </TouchableOpacity>
//     }

//     return (
//         <>
//             <View style={[styles.appBar, styles.flex]}>
//                 <TouchableOpacity><Icon name="arrow-back" color='#fff' size={26} /></TouchableOpacity>
//                 <Text style={[styles.whiteText, styles.appBarText]}>lang.ford_</Text>
//                 <TouchableOpacity><Icon name="add" color='#fff' size={26} /></TouchableOpacity>
//             </View>

//             <ScrollView style={styles.container}>
//                 <Image style={styles.coverImg} source={{ uri: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f3686cb821ad8a56911e85d%2F0x0.jpg' }} />

//                 <View style={[styles.flexCenter, styles.avatarEditBtnContainer]}>
//                     <Image style={styles.avatar} source={{ uri: 'https://static.wikia.nocookie.net/08b81b8e-00c6-4f69-83c6-94bfc79f05c7/scale-to-width/755' }} />
//                     <TouchableOpacity><Icon name="camera" color='#fff' style={styles.avatarEditBtn} size={25} /></TouchableOpacity>
//                 </View>

//                 <View style={styles.space20}></View>

//                 <View style={styles.flexCenter}>
//                     <Text style={[styles.name, styles.whiteText]}>Drew Gooden</Text>
//                 </View>

//                 <View style={styles.space5}></View>

//                 <View style={styles.flexCenter}>
//                     <Text style={styles.greyText}>Software engineer</Text>
//                 </View>

//                 <View style={styles.space5}></View>

//                 <View style={styles.flexCenter}>
//                     <Text style={styles.whiteText}>i love chimichangas ✌🏽🌼</Text>
//                 </View>

//                 <View style={styles.space20}></View>

//                 <View style={[styles.flexCenter, styles.profileActionContainer]}>
//                     {followBtn()}
//                     <View style={styles.space10}></View>

//                     {/* change to message if is not my account 👇🏽👇🏽👇🏽 */}
//                     <TouchableOpacity><Text style={[styles.btn, styles.outlineBtn]}>Edit Profile</Text></TouchableOpacity>

//                     <View style={styles.space10}></View>
//                     <TouchableOpacity><Icon style={[styles.btn, styles.greyBtn, styles.moreBtn]} name="ellipsis-horizontal-outline" color='#fff' size={26} /></TouchableOpacity>
//                 </View>

//                 <View style={styles.space10}></View>

//                 {/* <View style={styles.flexBetween}>
//                     <Text style={[styles.greyText, styles.sectionText]}>Featured (4)</Text>
//                     <TouchableOpacity><Text style={[styles.textBtn, styles.sectionText]}>See all</Text></TouchableOpacity>
//                 </View> */}

//                 <View style={[styles.flex, styles.statsContainer]}>
//                     <TouchableOpacity style={styles.statsItem}>
//                         <Text style={[styles.whiteText, styles.statNum]}>125</Text>
//                         <Text style={styles.whiteText}>followers</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.statsItem}>
//                         <Text style={[styles.whiteText, styles.statNum]}>100</Text>
//                         <Text style={styles.whiteText}>following</Text>
//                     </TouchableOpacity>
//                     <View style={styles.statsItem}>
//                         <Text style={[styles.whiteText, styles.statNum]}>12.5k</Text>
//                         <Text style={styles.whiteText}>posts</Text>
//                     </View>
//                     <View style={styles.statsItem}>
//                         <Text style={[styles.whiteText, styles.statNum]}>0</Text>
//                         <Text style={styles.whiteText}>mentions</Text>
//                     </View>
//                 </View>

//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.featuredPhotosContainer}>
//                     <TouchableOpacity style={styles.featuredPhoto}>
//                         <View style={styles.featuredPhotoThumbnail}></View>
//                         <Text style={styles.whiteText} numberOfLines={1}> space 🌎</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.featuredPhoto}>
//                         <View style={styles.featuredPhotoThumbnail}></View>
//                         <Text style={styles.whiteText}>goofy 🤓🤪</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.featuredPhoto}>
//                         <View style={styles.featuredPhotoThumbnail}></View>
//                         <Text style={styles.whiteText}>ooo 💞💞💞</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.featuredPhoto}>
//                         <View style={styles.featuredPhotoThumbnail}></View>
//                         <Text style={styles.whiteText}>erhhh??</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.featuredPhoto}>
//                         <View style={styles.featuredPhotoThumbnail}></View>
//                         <Text style={styles.whiteText} numberOfLines={1}> space 🌎</Text>
//                     </TouchableOpacity>
//                 </ScrollView>

//                 <View>
//                     <View style={styles.customTabBar}>
//                         <TouchableOpacity style={[styles.customTabBarItem, styles.activeCustomTabBarItem]}>
//                             <Icon name="ios-list-outline" color='#fff' size={17} />
//                             <Text style={[styles.customTabBarText, styles.activeCustomTabBarItemText]}>Posts</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.customTabBarItem}>
//                             <Icon name="ios-videocam-outline" color='#ffffff77' size={17} />
//                             <Text style={styles.customTabBarText}>Videos</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.customTabBarItem}>
//                             <Icon name="ios-people-outline" color='#ffffff77' size={17} />
//                             <Text style={styles.customTabBarText}>Mentions</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>

//                 <PostCard />
//                 <PostCard />
//                 <PostCard />

//             </ScrollView >
//         </>
//     )
// }