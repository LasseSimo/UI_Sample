import { StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    borderBottomWidth:1,
    borderColor:"#f3f3f3"
  },
  content:{
    flexDirection:"row",
    alignItems:"center",
    margin:5
  },
  name:{
    textAlign:"center",
    marginLeft:5,
    fontSize:13.5,
  },
  time:{
    textAlign:"center",
    fontSize:13.5
  },
  hiddenContainer:{
    height:50,
    backgroundColor:"#848383",
    marginTop:5,
    flexDirection:"row",
    justifyContent:"space-around"
  },
  icArrow:{
    position:"absolute",
    width:15,
    height:15,
    bottom:42,
    left:18,
    resizeMode:"contain"
  }
});
