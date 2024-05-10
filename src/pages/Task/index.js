import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseConfig"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    function deleteTask(id){
        database.collection("task").doc(id).delete()
    }

    useEffect(()=>{
        database.collection("task").onSnapshot((query)=>{
            const list = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return(
        <view style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( item ) => {
                return (
                <View style={styles.Tasks}>
                <TouchableOpacity
                     style={styles.deleteTask}
                        onPress={() => {
                            deleteTask(item.id)
                        }}
                >
                <FontAwesome name="star" size={23} color="#F92e6A">
                </FontAwesome>
                </TouchableOpacity>
                <Text style={styles.descricaoTask}
                onPress={()=>{
                    navigation.navigate("datails",{
                        id: item.id,
                        descricao: item.descricao
                    })
                }}
            
                >
                    {item.descricao}
                </Text>
                </View>
                )
            }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            
        </view>
    )
}