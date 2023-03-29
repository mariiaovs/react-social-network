export const required = value => {
    if (value) return undefined;

    return "Field is required";
}



export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Maximal length is ${maxLength} symbols`;
    return undefined;
}


export const minLength2 = value => {
    if (value.length < 2) return "Minimal length is 2 symbols";

    return undefined;
}
