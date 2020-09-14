import React, { useRef, useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import IconButton from '../components/IconButton';

const SearchBar = props => {



    const {
        focusedHandler,
        showSearchButton,
        searchNameValue,
        setSearchTypeValue,
        setSearchNameValue,
        clearNameVisible,
        clearTypeVisible,
        setClearNameVisible,
        setClearTypeVisible,
        episodes
    } = props;

    const nameRef = useRef();
    const typeRef = useRef();

    const onNameChangeHandler = text => {
        setSearchNameValue(text);

        if (text.length > 0) {
            setClearNameVisible(true);
        } else {
            setClearNameVisible(false);
        }

    };
    const onTypeChangeHandler = text => {
        setSearchTypeValue(text);
        if (text.length > 2) {
            setClearTypeVisible(true);
        } else {
            setClearTypeVisible(false);
        }

    };

    const nameCancelButtonPressedHandler = event => {
        nameRef.current.clear();
        nameRef.current = '';
        setSearchNameValue(nameRef.current);
        setClearNameVisible(false);

    };

    const typeCancelButtonPressedHandler = event => {
        typeRef.current.clear();
        typeRef.current = '';
        setSearchTypeValue(typeRef.current);
        setClearTypeVisible(false);
    };

    return (

        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.search}>
                    {showSearchButton ?
                        <IconButton name="search" /> : null}
                    <TextInput style={styles.text}
                        ref={nameRef}
                        placeholder={nameRef.length < 1 ? null : "Name..."}
                        onFocus={focusedHandler}
                        onChangeText={onNameChangeHandler}
                        clearButtonMode='unless-editing'
                    />
                    {clearNameVisible ?
                        <IconButton style={{ marginLeft: showSearchButton ? null : 24 }} name="close-sharp" onPressAction={nameCancelButtonPressedHandler} /> : null}
                </View>
            </View>
            {episodes ? null : <View style={styles.container}>
                <View style={styles.search}>
                    {showSearchButton ?
                        <View>
                            <Icon name="search" type="ionicon" />
                        </View> : null}
                    <TextInput style={styles.text}
                        placeholder={typeRef.length < 1 ? null : "Type..."}
                        ref={typeRef}
                        onFocus={focusedHandler}
                        onChangeText={onTypeChangeHandler}
                        clearButtonMode='unless-editing'
                    />
                    {clearTypeVisible ?
                        <IconButton name="close-sharp" onPressAction={typeCancelButtonPressedHandler} /> : null}
                </View>
            </View>}
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 105,
        borderBottomColor: 'black',
        borderBottomWidth: 0.26
    },
    container: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    search: {
        backgroundColor: 'white',
        borderColor: "black",
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: 40,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        marginTop: 10
    },
    text: {
        fontSize: 18,
        width: '85%'
    },
    icon: {
        width: 70,
        height: 70
    }
});

export default SearchBar;
