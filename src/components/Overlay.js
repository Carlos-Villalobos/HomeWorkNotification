import { Form } from 'native-base';
import React from 'react';
import { Overlay } from 'react-native-elements';
import { View } from 'react-native'
import { Text, Button } from 'native-base'

export default class OverlayExample extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const { closeOverlay, dataOverlay } = this.props
        return(
            <Overlay 
                isVisible={dataOverlay !== ''} 
                onBackdropPress={closeOverlay}
                animationType="fade"
                overlayStyle={{
                    borderRadius:20,
                    width: 350
                }}
            >
                <Text style={{marginTop:20, paddingHorizontal:20, fontWeight:'bold'}}>Información de la tarea:</Text>
                <Text style={{marginTop:20, paddingHorizontal:20}}>{ dataOverlay }</Text>
                <Button Button rounded  onPress={() => closeOverlay() } style={{backgroundColor:'#6495ED', alignSelf:'center', marginTop:20}}>
                    <Text>Cerrar</Text>
                </Button>
            </Overlay>
        )
    }
}