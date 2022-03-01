import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'query',
    initialState: {
        value: ''
    },
    reducers: {
        incremented: state => {
            state.value 
        },
        decremented: state => {
            state.value 
        }
    }
})

export const { decremented, incremented } = counterSlice.actions
export default counterSlice.reducer
