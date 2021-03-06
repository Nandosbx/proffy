import { StyleSheet } from 'react-native';

const primaryColor = '#8257e5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    justifyContent: 'space-between',    
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },

  titleContainer: {
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  descriptionContainer: {
    alignItems: 'center',
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,    
  },  

  okButton: {
    marginVertical: 20,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8 
  },

  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  },
});

export default styles;