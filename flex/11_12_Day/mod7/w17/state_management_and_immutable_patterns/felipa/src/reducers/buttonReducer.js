

export const buttonReducer = (state, action) => {
    switch (action.type) {
       
        case "SET_NAME_LOADING": {
            const buttonCopy = [...state];
            const nameIndex = buttonCopy.findIndex((button) => button.label === "Update Name");
            buttonCopy[nameIndex] = action.payload;
            return buttonCopy;
        }
        case "SET_DESCRIPTION_LOADING": {
            const buttonCopy = [...state];
            const descriptionIndex = buttonCopy.findIndex((button) => button.label === "Update Description");
            buttonCopy[descriptionIndex] = action.payload;
            return buttonCopy;
        }
        case "SET_TAG_LOADING": {
            const buttonCopy = [...state];
            const tagIndex = buttonCopy.findIndex((button) => button.label === "Add Tag");
            buttonCopy[tagIndex] = action.payload;
            return buttonCopy;
        }
        default: {
            return state;
        }
    }
}



