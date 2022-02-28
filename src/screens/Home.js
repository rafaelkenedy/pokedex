import React, { useEffect, useState } from 'react'
import { FlatList, Button, SafeAreaView, Text, View } from 'react-native'
//import { useDispatch, useSelector } from 'react-redux'
//import { incremented, decremented } from '../store/slices/counterSlice'
import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { PkCard } from '../components/PkCard'
import api from '../services/api'

const Home = () => {

    //const baseURL = "https://pokeapi.co/api/v2/pokemon"

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function handleRequest() {
            try {
                const { data } = await api.get()
                setPokemons(data.results)
                console.log(pokemons)
            } catch (error) {
                console.warn(error)
            }
        }
        handleRequest()
    }, [])

    return (

        <SafeAreaView>
            <View>
                <Header />
                <SearchBar />
                {/* <PkCard id={1} name={"Julião"}/>  */}

                <FlatList
                    data={pokemons}
                    keyExtractor={(pokemon) => pokemon.name}
                    contentContainerStyle={{
                        //flexGrow: 1,
                        paddingHorizontal: 40,
                        marginVertical: 40,
                        
                        
                        //alignItems: 'center'
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
        //console.log(id_pk)
        return (
            <>
                <PkCard name={name} id={id_pk} />
            </>
        )

    }
}

export default Home