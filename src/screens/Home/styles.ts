import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },

  modalContainer:{
    alignItems: "center",
    justifyContent: "center"
  },
  modalView: {

  },
  modalText: {
    color: "#FFF",
    fontSize: 22,
  },
  buttonCloseModal: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#31cf67',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonCloseModalText : {
    color: '#FFF',
    fontSize: 18
  },

  eventContainerInfo: {
    marginTop: 48,
    flexDirection: "row",
  },
  eventInfoName: {
    flex: 1

  },
  buttonEditEvent:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#31cf67',
    alignItems: "center",
    justifyContent: "center"
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
    textTransform: "capitalize"
  },

  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#2F2E35',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor:'#31cf67',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: '#FFF',
    fontSize: 36
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign:"center"
  }
})

