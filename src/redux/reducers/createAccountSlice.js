import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    account: [
    ],
}

export const createAccountSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        createAccount: (state, action) => {
            const newAccount = {
                id: nanoid(),
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                contactNo: action.payload.contactNo,
                password: action.payload.password,
                profilePhoto: action.payload.profilePhoto || "/images/avatar.svg"
            };
            state.account.push(newAccount)
        },

        updateUserDetails: (state, action) => {
            const { id, firstName, lastName, contactNo } = action.payload;
            const userIndex = state.account.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state.account[userIndex].firstName = firstName;
                state.account[userIndex].lastName = lastName;
                state.account[userIndex].contactNo = contactNo;
            }
        }

    }
})

export const { createAccount, updateUserDetails } = createAccountSlice.actions;
export default createAccountSlice.reducer