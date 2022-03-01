import React, { useEffect, useState } from 'react'
import { FlatList, Button, SafeAreaView, Text, View } from 'react-native'
import LupaIcon from '../../assets/icons/lupa.svg'
import HeartIcon from '../../assets/icons/heart.svg'
//import { useDispatch, useSelector } from 'react-redux'
//import { incremented, decremented } from '../store/slices/counterSlice'
import { StyWrapper, StyContainer, StyTextInput, StyButton, StyFavoriteButton, StyButtonCard } from './styles';
import { Header } from '../components/Header'
import { PkCard } from '../components/PkCard'
import api from '../services/api'
import theme from '../global/styles/theme'

const Home = () => {
    //const baseURL = "https://pokeapi.co/api/v2/pokemon"
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState('')
    const [pkType, setPkType] = useState('')
    //const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function handleRequest() {
            try {
                const { data } = await api.get('/?offset=0&limit=60')
                setPokemons(data.results)
                //setPkType(data.types[0].type.name)
                //console.log(data.types[0].type.name)

            } catch (error) {

            }
        }
        handleRequest()
    }, [])

    async function getType(query) {
        try {
            const { data } = await api.get(`/${query}`)
            //console.log( data.types[0].type.name)
            const { types } = data

            setPkType(String(types[0].type.name.toString()))
            console.log(pkType)
            return String(types[0].type.name.toString())

        } catch (error) {

            return ''
            console.warn(error)
        }

    }

    async function searchPokemon() {
        try {
            if (query.toLowerCase()) {
                const { data } = await api.get(`/${query}`)

                setPokemons(data.forms)
                //setPkType(data.types[0].type.name)
                //console.log(data.types[0].type.name)
            } else {
                const { data } = await api.get('/?offset=0&limit=60')
                setPokemons(data.results)
            }

        } catch (error) {
            console.warn(error)
        }
    }




    return (
        <SafeAreaView>
            <View>
                <Header />
                <StyWrapper>
                    <StyContainer>
                        <StyTextInput
                            value={query}
                            onChangeText={text => setQuery(text.toLowerCase())}
                        />
                        <StyButton onPress={searchPokemon}>
                            <LupaIcon />
                        </StyButton>
                    </StyContainer>
                    <StyFavoriteButton>
                        <HeartIcon />
                    </StyFavoriteButton>
                </StyWrapper>

                <FlatList
                    style={{ marginTop: 40 }}
                    data={pokemons}
                    keyExtractor={(pokemon) => pokemon.name}
                    contentContainerStyle={{
                        paddingHorizontal: 40
                    }}
                    numColumns={3}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        marginBottom: 18
                    }}
                    renderItem={showPokemon}
                />
            </View>
        </SafeAreaView>
    )

    function showPokemon(item) {
        const { name, url } = item.item
        const part = url.split("/")
        const id_pk = part[part.length - 2]

        //getType(id_pk)

        //console.log(type)


        return (
            <StyButtonCard>
                <PkCard
                    name={name.charAt(0).toUpperCase() + name.slice(1)}
                    id={id_pk}
                    typeColor={'#898989'}/>
            </StyButtonCard>
        )
    }
}

export default Home