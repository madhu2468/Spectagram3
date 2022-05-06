import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class PostCard extends Component {
 
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>

            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>

<View style={styles.authorNameContainer}>
<Text style={styles.authorNameText}>{this.props.post.author}</Text>
</View>

<Image source={require("../assets/post.jpeg")} style={styles.postImage}/>

<View style={styles.captionContainer}>
  <Text style={styles.captionText}> {this.props.post.caption} </Text>
</View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
</View>

          </View>
       
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  profileImage: {
    resizeMode: "contain",
    width: "20%",
    alignSelf: "center",
    height: RFValue(250)
  },
 postImage: {
    resizeMode: "contain",
    width: "90%",
    alignSelf: "center",
    height: RFValue(250)
  },
 
  authorNameContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  authorNameText: {
    fontSize: RFValue(28),
    fontFamily: "Sans",
    color: "white"
  },
  captionContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
   },
  captionText: {
    fontFamily: "Sans",
    fontSize: 25,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});

