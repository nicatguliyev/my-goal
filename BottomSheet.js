import React, { useState } from "react";
import {Modal, View, Text, Pressable} from 'react-native'


const BottomSheet = ({modalVisible, setModalVisible}) => {

   //const [visible, setVisible] = useState(true);

    return (
      <View>
        {/* <Pressable style = {{backgroundColor: "green", alignItems: 'center', paddingVertical: 20 }} onPress={() => {setVisible(true)}}> 
          <Text>Open Modal</Text>  
        </Pressable> */}
        <Modal   transparent visible = {modalVisible} animationType="slide" statusBarTranslucent>
            <View style = {{flex: 1, backgroundColor: "#a9a9a9a9", justifyContent: 'flex-end'}}>
                <View style = {{width: "100%", height: "100%", backgroundColor: "red", justifyContent: "flex-end"}}>
                  <Pressable style = {{justifyContent: 'center', alignItems: "center", padding: 20, backgroundColor: "#536de1"}} onPress={() => {setModalVisible(false)}}>
                    <Text>Close</Text>
                  </Pressable>
                </View>
            </View>

        </Modal>
      </View>
    );
}

export default BottomSheet;