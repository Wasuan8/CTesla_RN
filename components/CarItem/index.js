import React, { useState } from "react";
import { Text, View, ImageBackground, Image, TouchableOpacity,ScrollView } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from "../Menu";




const CarItem = () => {

    const [locked, setLocked] = useState(false);

    const clickLock =() =>{
        if(locked){
            setLocked(false)
        }else{
            setLocked(true)
        }
    }
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require("../../assets/background.png")}
                style={styles.backgroundImage} />


            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Model X</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />

                </TouchableOpacity>
            </View>


            {/* Mileage */}
            <View style={styles.batterySection}>
                <Image
                    source={require('../../assets/battery.png')}
                    style={styles.batteryImage}

                />
                <Text style={styles.batteryText}>150 mi</Text>
            </View>


            {/* Status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>

            </View>
            <ScrollView>


                
            {/* Control Icons */}
            <View style={styles.controls}>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={clickLock}
                >
                    <View style={styles.controlsButton}>
                        <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlockAlt} size={24} />
                    </View>
                </TouchableOpacity>

            </View>
            <Menu/>
            </ScrollView>
 
        </View>


    );
};

export default CarItem;