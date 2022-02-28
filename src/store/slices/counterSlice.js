import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { decremented, incremented } = counterSlice.actions
export default counterSlice.reducer
