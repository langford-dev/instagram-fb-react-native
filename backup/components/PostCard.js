import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';


function PostCard() {
    const sheetRef = React.useRef(null);
    const [isliked, setIsLiked] = useState(false)

    const renderContent = () => <View style={styles.bottomSheet}>
        <TouchableOpacity style={styles.bottomSheetItem}>
            <Icon name='bookmark' size={23} color='#ffffff33' />
            <Text style={styles.bottomSheetText}>Save post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetItem}>
            <Icon name='link' size={23} color='#ffffff33' />
            <Text style={styles.bottomSheetText}>Copy link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomSheetItem}>
            <Icon name='x' size={23} color='#d92b2b' />
            <Text style={[styles.bottomSheetText, styles.bottomSheetTextAlert]}>Unfollow</Text>
        </TouchableOpacity>
    </View>

    async function openBottomSheet() {
        sheetRef.current.snapTo(0)
    }

    function bottomSheetElement() {
        return <BottomSheet
            ref={sheetRef}
            snapPoints={[200, 0, 0]}
            renderContent={renderContent}
        />;
    }

    function likePost() {
        setIsLiked(!isliked)
    }

    function likeBtn() {
        if (isliked) return <TouchableOpacity onPress={() => likePost()} style={[styles.postActionIcon, styles.isLiked]}>
            <Icon name="heart" size={18} color="#fff" />
            <Text style={[styles.whiteText, styles.postActionIconText]}> +1 </Text>
        </TouchableOpacity>

        else return <TouchableOpacity onPress={() => likePost()} style={styles.postActionIcon}>
            <Icon name="heart" size={18} color="#fff" />
            <Text style={[styles.greyText, styles.postActionIconText]}> Like </Text>
        </TouchableOpacity>
    }

    return (
        <>
            <View style={styles.postCard}>
                <View style={styles.topBar}>
                    <View style={styles.flex}>
                        <View style={styles.avatar}></View>
                        <View style={styles.space15}></View>
                        <Text style={[styles.text, styles.boldText]}>lang.ford_</Text>
                    </View>

                    <View style={styles.flex}>
                        <TouchableOpacity onPress={() => openBottomSheet()} >
                            <Icon name="more-horizontal" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={[styles.text, styles.caption]}>But in the end, you have to be your own hero, because everyone is busy saving themselves</Text>

                <View style={styles.postImg}></View>

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

                        <TouchableOpacity style={styles.postActionIcon}>
                            <Icon name="message-circle" size={18} color="#fff" />
                            <Text style={[styles.greyText, styles.postActionIconText]}> Comment </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.postActionIcon}>
                            <Icon name="share" size={18} color="#fff" />
                            <Text style={[styles.greyText, styles.postActionIconText]}> Share </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {bottomSheetElement()}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    postActionIcons: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },

    bottomSheet: {
        height: '100%',
        width: '100%',
        backgroundColor: '#242424',
        borderRadius: 15,
        paddingVertical: 20,
        zIndex: -10
        // marginBottom: 10,
    },

    bottomSheetItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20
    },

    bottomSheetText: {
        marginLeft: 10,
        color: '#fff'
    },

    bottomSheetTextAlert: {
        color: '#d92b2b'
    },

    postActionIcon: {
        backgroundColor: '#444',
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10,
        borderRadius: 100,
        borderColor: '#f1f1f133',
        borderWidth: 1,
    },

    postActionIconText: {
        marginLeft: 5,
    },

    postActionTextContainer: {
        padding: 5,
        paddingHorizontal: 15,
        // paddingBottom: 10,
        marginBottom: 10,
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
        borderTopColor: '#f1f1f111',
        borderTopWidth: 1,
        // position: 'relative',
        backgroundColor: '#242424'
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
        backgroundColor: '#444',
        width: '100%',
        height: 300,
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
        backgroundColor: '#444',
        borderRadius: 100, borderColor: '#f1f1f133',
        borderWidth: 1,
    },

    isLiked: {
        backgroundColor: '#d92b2b',
        borderColor: '#d92b2b'
    },
})

export default PostCard