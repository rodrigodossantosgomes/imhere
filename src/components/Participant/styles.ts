import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2F2E35',
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  blockName:{
    flex: 1,
    padding: 8,
    justifyContent:"center"
  },
  name:{
    fontSize: 16,
    color: '#FFF',
    marginLeft: 8,
  },
  date:{
    fontSize: 14,
    fontStyle:"italic",
    color: '#FFF',
    marginLeft: 16,
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#E23C44',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText:{
    color: '#FFF',
    fontSize: 36
  }
})