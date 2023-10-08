import React,{useState, useEffect} from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Button } from "react-native"
import Modal from 'react-native-modal';
import moment from 'moment';
import 'moment/locale/pt-br';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles"

import { Participant } from "../../components/Participant"

type Item = {
    id: string;
    name: string;
    timestamp: string;
  };

export default function Home(){

    const [eventName, setEventName] = useState('Nome do Evento!')
    const [eventDate, setEventDate] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);

    const [participants, setParticipants] = useState<Item[]>([]);
    const [participantName, setParticipantName] = useState('')

    function editEventDate(){
        const date = moment().locale('pt-br').format('dddd, LL');
        setEventDate(date);
    }
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    function handleParticipantAdd(){
        // Verifica se o nome está em branco
        if (!participantName.trim()) {
            return Alert.alert("Participante inválido","Por favor, digite um nome válido para o Participante.");
            ;
          }
        // Verifica se o nome já existe na lista
        if(participants.some((item) => item.name === participantName)){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
        }

        const newItem: Item = {
            id: Math.random().toString(),
            name: participantName,
            timestamp: new Date().toLocaleString(),
        };
        setParticipants(prevState => [...prevState, newItem]);
        setParticipantName('');
    }
    function handleParticipantRemove(id: string){


        Alert.alert("Remover", `Remover o participante?`, [
            {
                text: 'Sim',
                onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    useEffect(() => {
        const date = moment().locale('pt-br').format('dddd, LL');
        setEventDate(date);
    }, []);

    return(
        <View style={styles.container}>

            <Modal isVisible={isModalVisible} style={styles.modalContainer}>
                <Text style={styles.modalText}>Qual o nome do Evento?</Text>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do evento"
                        placeholderTextColor="#6B6B6B"
                        onChangeText={setEventName}
                        value={eventName}
                    />
                    <TouchableOpacity style={styles.buttonCloseModal} onPress={toggleModal}>
                        <Ionicons name="md-checkmark-outline" size={32} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.eventContainerInfo}>
                <View style={styles.eventInfoName}>
                    <Text style={styles.eventName}>
                        {eventName}
                    </Text>
                    <Text style={styles.eventDate}>
                        {eventDate}
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonEditEvent} onPress={ toggleModal }>
                    <Ionicons name="md-pencil-outline" size={32} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={ handleParticipantAdd }>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Participant
                        key={item.id}
                        name={item.name}
                        timestamp={item.timestamp}
                        onRemove={() => handleParticipantRemove(item.id)}/>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <>
                        <Text style={styles.listEmptyText}>
                            Ninguém chegou ao evento ainda!
                        </Text>
                        <Text style={styles.listEmptyText}>
                            Adicione participantes a sua lista de presença.
                        </Text>
                    </>
                )}
            />

        </View>
    )
}
