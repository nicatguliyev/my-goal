import React from "react";
import {Modal, StyleSheet, Button, View, FlatList, Text} from "react-native";
import {useState} from "react";
import { Ionicons } from "@expo/vector-icons";

const GoalsList  = ({keyWord}) => {

    const [goalsData, setGoalsData] = useState(
        [
            {
                id: 1, title: "Finish React Native project",  desscription: "kdcklwe lwkenwlkenwe wlkejnfw", category: {
                    id: 1,
                    icon: "briefcase-outline",
                    name: "Work",
                    selected: false
                }
            },
            {
                id: 2, title: "Study for exams", desscription: "kdcklwe lwkenwlkenwe wlkejnfw", category:    {
                    id: 2,
                    icon: "school-outline",
                    name: "Study",
                    selected: false
                }
            },
            { 
                id: 3, title: "Go to the gym", desscription: "kdcklwe lwkenwlkenwe wlkejnfw", category: {
                    id: 3,
                    icon: "barbell-outline",
                    name: "Gym",
                    selected: false
                }
            },
            {
                id: 4, title: "Go to the doctor", desscription: "kdcklwe lwkenwlkenwe wlkejnfw", category: {
                    id: 4,
                    icon: "medkit-outline",
                    name: "Health",
                    selected: false
                }
            },
            {
                id: 5, title: "Feed the cat", desscription: "kdcklwe lwkenwlkenwe wlkejnfw sdhsd ksdjbksd skdjbskdf ksjdbfkjdlfvnskjd skdjbskdjbv sdkjbskdjb sdkfjbsjdbf ", category:     {
                    id: 5,
                    icon: "paw-outline",
                    name: "Pet",
                    selected: false
                }
            },
            {
                id: 6, title: "Feed the cat", desscription: "kdcklwe lwkenwlkenwe wlkejnfw sdhsd ksdjbksd skdjbskdf ksjdbfkjdlfvnskjd skdjbskdjbv sdkjbskdjb sdkfjbsjdbf ", category:     {
                    id: 5,
                    icon: "paw-outline",
                    name: "Pet",
                    selected: false
                }
            },{
                id: 7, title: "Feed the cat", desscription: "kdcklwe lwkenwlkenwe wlkejnfw sdhsd ksdjbksd skdjbskdf ksjdbfkjdlfvnskjd skdjbskdjbv sdkjbskdjb sdkfjbsjdbf ", category:     {
                    id: 5,
                    icon: "paw-outline",
                    name: "Pet",
                    selected: false
                }
            },
        ]
    );

    function filterGoalsData(keyWord){
        if(!keyWord || keyWord.trim() === ""){
            return goalsData;
        }
        return goalsData.filter(goal => goal.title.toLowerCase().includes(keyWord.toLowerCase()));
    }
    return(
        <View style = {{flex: 1, backgroundColor: "#white"}}>

            <FlatList
                data={filterGoalsData(keyWord)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{paddingVertical: 16, paddingHorizontal: 0, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <Text numberOfLines = {2} ellipsizeMode = "tail" style={{ color: '#666' }} >{item.desscription}</Text>
                        <View style = {{flexDirection: "row", alignItems: "center", marginTop: 8, }}>
                        <Ionicons name = {item.category.icon} size={20} color="blue" />
                        <Text style={{ color: 'blue', marginLeft: 6 }}>{item.category.name}</Text>
                        </View>
                        
                    </View>
                )}
                contentContainerStyle={{paddingBottom: 60}}
            />

        </View>
    );
}

export default GoalsList;