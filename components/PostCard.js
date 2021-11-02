import React, { useState, createRef } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import DoubleClick from 'react-native-double-tap'
import ActionSheet from "react-native-actions-sheet";




function PostCard() {
    // const sheetRef = React.useRef(null);
    const [isliked, setIsLiked] = useState(false)


    const actionSheetRef = createRef();
    let actionSheet;

    const renderContent = () => <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetLine}></View>
        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
            <Icon name='bookmark' size={23} color='#ffffff99' />
            <Text style={styles.bottomSheetText}>Save post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
            <Icon name='share' size={23} color='#ffffff99' />
            <Text style={styles.bottomSheetText}>Share to ...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
            <Icon name='link' size={23} color='#ffffff99' />
            <Text style={styles.bottomSheetText}>Copy link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetItem}>
            <Text style={[styles.bottomSheetText, styles.bottomSheetTextAlert]}>Report</Text>
        </TouchableOpacity>
    </View>

    function likePost() {
        setIsLiked(!isliked)
    }

    function likeBtn() {
        if (isliked) return <TouchableOpacity activeOpacity={1} onPress={() => likePost()} style={[styles.postActionIcon, styles.isLiked]}>
            <Icon name="heart" size={24} color="red" />
            <Text style={[styles.whiteText, styles.postActionIconText]}> 30 </Text>
        </TouchableOpacity>

        else return <TouchableOpacity activeOpacity={1} onPress={() => likePost()} style={styles.postActionIcon}>
            <Icon name="heart-outline" size={24} color="#fff" />
            <Text style={[styles.greyText, styles.postActionIconText]}> 29 </Text>
        </TouchableOpacity>
    }

    return (
        <>
            <View style={styles.postCard}>
                <View style={styles.topBar}>
                    <View style={styles.flex}>
                        <View style={styles.avatar}></View>
                        <View style={styles.space15}></View>
                        <Text style={[styles.text, styles.boldText]}>drew.gooden_</Text>
                    </View>

                    <View style={styles.flex}>
                        <TouchableOpacity activeOpacity={1} onPress={() => { actionSheetRef.current?.setModalVisible(); }}>
                            <Icon name="ios-ellipsis-horizontal-outline" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text numberOfLines={4} style={[styles.text, styles.caption]}>But in the end, you have to be your own hero, because everyone is busy saving themselves</Text>


                <DoubleClick doubleTap={() => { setIsLiked(!isliked) }} >
                    <Image style={styles.postImg} source={{ uri: 'https://i.pinimg.com/736x/ab/67/23/ab67237254427b7a146c634bdd3b4306.jpg' }} />
                </DoubleClick>


                <View style={styles.postActionTextContainer}>
                    <View style={styles.flex}>
                        <Text style={styles.greyText}>2 comments</Text>
                        <View style={styles.dot}></View>
                        <Text style={styles.greyText}>7 shares</Text>
                        <View style={styles.dot}></View>
                        <Text style={styles.greyText}>1.3k likes</Text>
                    </View>

                    <Text style={styles.greyText}> 03 Oct</Text>
                </View>

                <View style={[styles.flex, styles.postActionIcons]}>
                    <View style={styles.flexCenter}>
                        {likeBtn()}

                        <TouchableOpacity activeOpacity={1} style={styles.postActionIcon}>
                            <Icon name="chatbubble-outline" size={24} color="#fff" />
                            <Text style={[styles.greyText, styles.postActionIconText]}> 15 </Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={styles.postActionIcon}>
                            <Icon name="ios-paper-plane-outline" size={24} color="#fff" />
                            <Text style={[styles.greyText, styles.postActionIconText]}> 142k </Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={styles.postActionIcon}>
                            <Icon name="ios-bookmark-outline" size={24} color="#fff" />
                            <Text style={[styles.greyText, styles.postActionIconText]}> 549 </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ActionSheet headerAlwaysVisible={true} delayActionSheetDrawTime={0} gestureEnabled={true} bounceOnOpen={true} openAnimationSpeed={10} bounciness={5} defaultOverlayOpacity={0.5} ref={actionSheetRef} containerStyle={{ backgroundColor: '#242424', paddingTop: 10, borderRadius: 20 }} indicatorColor={'#555'}>
                    <View style={styles.bottomSheet}>
                        {/* <View style={styles.bottomSheetLine}></View> */}
                        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
                            <Icon name='bookmark' size={23} color='#ffffff99' />
                            <Text style={styles.bottomSheetText}>Save post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
                            <Icon name='share' size={23} color='#ffffff99' />
                            <Text style={styles.bottomSheetText}>Share to ...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bottomSheetItem, styles.borderBottom]}>
                            <Icon name='link' size={23} color='#ffffff99' />
                            <Text style={styles.bottomSheetText}>Copy link</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomSheetItem}>
                            <Text style={[styles.bottomSheetText, styles.bottomSheetTextAlert]}>Report</Text>
                        </TouchableOpacity>
                    </View>
                </ActionSheet>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 15,
    },

    postActionIcons: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',

        marginLeft: 10,
        marginRight: 10,
        borderTopColor: '#242424',
        borderTopWidth: 1,
        // paddingTop: 20,
    },

    bottomSheetLine: {
        backgroundColor: '#444',
        height: 5,
        width: 60,
        position: 'absolute',
        top: 10,
        left: '40%',
        borderRadius: 100
    },

    bottomSheet: {
        // height: '100%',
        width: '100%',
        backgroundColor: '#242424',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingVertical: 20,

        // marginTop: 20,
        // paddingBottom: 30,
        // position: 'relative',
        // zIndex: -10
        // marginBottom: 10,
    },

    bottomSheetItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },

    borderBottom: {
        borderBottomColor: '#33333344',
        borderBottomWidth: 1
    },

    bottomSheetText: {
        marginLeft: 10,
        color: '#fff'
    },

    bottomSheetTextAlert: {
        color: '#d92b2b'
    },

    postActionIcon: {
        // backgroundColor: '#242424',
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -5,
        marginLeft: -20,
        marginRight: -20,
        // marginBottom: 20,
        borderRadius: 100,
        // borderColor: '#33333311',
        // borderWidth: 1,
    },

    postActionIconText: {
        marginLeft: 3,
    },

    postActionTextContainer: {
        padding: 5,
        paddingHorizontal: 15,
        // paddingBottom: 10,
        marginBottom: 10,
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    dot: {
        width: 3,
        height: 3,
        backgroundColor: '#777',
        margin: 6,
        marginTop: 7,
        borderRadius: 100
    },

    postCard: {
        // borderTopColor: '#242424',
        // borderTopWidth: 1,
        backgroundColor: '#000',
        // paddingBottom: 10,
        // paddingTop: 5
        // marginBottom: 10,
    },

    greyText: {
        color: '#999'
    },

    whiteText: {
        color: '#fff'
    },

    boldText: {
        fontWeight: 'bold'
    },

    text: {
        color: '#fff'
    },

    caption: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        paddingTop: 0,
        lineHeight: 23
    },

    // btn: {
    //     backgroundColor: '#006ee6',
    //     paddingHorizontal: 10,
    //     paddingVertical: 3,
    //     borderRadius: 3
    // },

    // btnText: {
    //     color: '#fff'
    // },

    postImg: {
        backgroundColor: '#242424',
        width: '100%',
        height: 300,
        // height: '100%',
        maxHeight: 350
    },

    space20: {
        width: 20,
        height: 20
    },

    space13: {
        width: 13,
        height: 13
    },

    space10: {
        width: 10,
        height: 10
    },

    space15: {
        width: 15,
        height: 15
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    flexCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    avatar: {
        width: 40,
        height: 40,
        backgroundColor: '#242424',
        borderRadius: 100,
        // borderColor: '#f1f1f133',
        // borderWidth: 1,
    },

    isLiked: {
        // backgroundColor: '#d92b2b',
        // borderColor: '#d92b2b'
    },
})

export default PostCard