import React, { useState } from 'react';
import IoasysIcon from '../../../assets/icons/ioasys_icon.svg'
import { Switch, View } from 'react-native'
import {
  StyContainer,
  StyTitle,
  StyTop,

} from './styles'

export function Header() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(prevState => !prevState)
  return (
    <>
      <StyTop />

      <StyContainer>
        <IoasysIcon width={24} height={32} />
        <StyTitle>{'ioasys pokédex'}</StyTitle>
        <View style={{ marginLeft: 50, borderStyle: 'solid', borderWidth: 2, borderRadius: 50}}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#EC0344" : "#EC0344"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            
          />
        </View>

      </StyContainer>



    </>
  );
}

