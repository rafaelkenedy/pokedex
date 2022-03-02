import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import LupaIcon from '../../assets/icons/lupa.svg'
import HeartIcon from '../../assets/icons/heart.svg'
import { StyWrapper, StyContainer, StyTextInput, StyButton, StyFavoriteButton, StyButtonCard } from './styles';
import { Header } from '../components/Header'
import { PkCard } from '../components/PkCard'
import api from '../services/api'
import theme from '../global/styles/theme'

const Home = () => {
    //const baseURL = "https://pokeapi.co/api/v2/pokemon"
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState('')
    const [pkTypes, setPkTypes] = useState('')

    useEffect(() => {
        async function handleRequest() {
            try {
                const { data } = await api.get('/?offset=0&limit=60')
                setPokemons(data.results)
            } catch (error) {
                console.warn(error)
            }
        }
        handleRequest()
    }, [])

    async function searchPokemon() {
        try {
            if (query.toLowerCase()) {
                const { data } = await api.get(`/${query}`)
                setPokemons(data.forms)
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
        return (
            <StyButtonCard>
                <PkCard
                    name={name.charAt(0).toUpperCase() + name.slice(1)}
                    id={id_pk}
                    typeColor={theme.cardColors.normal} />
            </StyButtonCard>
        )
    }
}

export default Home