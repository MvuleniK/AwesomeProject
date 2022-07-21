 import React from "react";
 import {StyleSheet, SafeAreaView, Image,View,Text,StatusBar, marquee } from 'react-native';
// import { } from "react-native-web";
import COLORS  from "../AwesomeProject/src/consts/colors.js";


 const App = () => {
    return(
        <SafeAreaView style={{flex: 1,backgroundColor:COLORS.white}}>
            <StatusBar translucent backgroundColor={COLORS.tranparent}/>

            <Image source={require('../AwesomeProject/src/assests/IMG (9).jpg')}
            style={style.image}
            />

            <View style={{paddingHorizontal:20, paddingTop:20}}>
                <View style={style.container} >
                    <Text style={style.title}> Happy Birthday To You</Text>
                    <Text style={style.textStyle}> 

                    <marquee>
                        Have yourself a beautiful
                        Take that opportunity with both hands....
                        have a blessed day
                    </marquee> 

                    </Text>

                </View>

                        <Image source={require('../AwesomeProject/src/assests/IMG.jpg')}
                        style={style.image3}/>

            </View>

            <Image source={require('../AwesomeProject/src/assests/IMG (26).jpg')}
            style={style.image2}
            />

        </SafeAreaView>

    );
 };

 const style = StyleSheet.create({
    image: {
        height:420,
        width:'100%',
        borderBottomLeftRadius:100,
    },

    title: {
        fontSize:32,
        fontWeight:700,
        width:'100%',
        alignContent:'center',
        color: '#191970',
        marginBottom:5
    },

    textStyle :{
        fontSize:16,
        color: COLORS.grey,
        marginLeft: 5,
        justifyContent:'center',
        marginBottom:5
    },

    image2: {
        height:400,
        width:'100%',
        // borderBottomLeftRadius:100,
        borderTopRightRadius:100,
        position:'absolute',
        top:630
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },

    image3: {
        height:100,
        width:100,
        // borderBottomLeftRadius:100,
        borderRadius:60,
        position:'absolute',
        top:100,
        left:150,
        marginLeft:1,
        alignItems:'center',
        
    },

    container: {
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    }


 });


 export default App;















// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// // const image = { uri: "https://reactjs.org/logo-og.png" };

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Fourth Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Fifth Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Sixth  Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />

//     {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground> */}

//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'blue',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default App;