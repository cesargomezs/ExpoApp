import { StatusBar } from "expo-status-bar";
import DatetimePicker from "@react-native-community/datetimepicker";
import { SetStateAction, useState } from "react";
import { Button, View,Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "../ui/IconSymbol";

export default function DataPicker() { 
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");
    const [searchText, setSearchText] = useState('');
    const { dark } = useTheme();
    
    const onChangeDate = (e: any, selectedDate?: Date) => {
        /*if (selectedDate) {
            setDate(selectedDate);
        }*/
        setShow(true);
    };

    const onChange = (e: any, selectedDate?: Date) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShow(false);
    };
    
    const showMode = (modeToshow: SetStateAction<string>) => {
        setShow(true);
        setMode(modeToshow);
    };
    
    return (
        <View style={styles.container}>
            
        <DatetimePicker  
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}  
        />
        
        <Text>{date.toLocaleString()}</Text>
        <StatusBar style="auto" />
        <IconSymbol name="calendar.day.timeline.leading" color="#888" size={25} />
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {        
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            backgroundColor: "#2196F3",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
        },
        buttonText: {   
            color: "#fff",
            fontSize: 16,
        },
        dateText: {     
            fontSize: 16,
            marginTop: 10,
        },
        timeText: {     
            fontSize: 16,
            marginTop: 10,
        },
        datePicker: {   

            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 10,
        },
        timePicker: {    
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 10,
        },
         });   
 