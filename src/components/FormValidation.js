export const FormValidation = (name) => {

    if(name === "Naudotojo vardas"){
        return {
            pattern :{
                value : /^[A-Za-z]+$/,
                message : "Turi susidaryti tik iš raidžių"
            },
            required : {
                value : "true",
                message : `${name} negali būti tuščias`
            }
        }
    }
    if(name === "Elektroninis paštas"){
        return{
            pattern :{
                value : /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
                message : `${name} nėra teisingas`
            },
            required : {
                value : "true",
                message : `${name} negali būti tuščias`
            }
        }
    }else{
        return {
            required : {
                value : "true",
                message : `${name} negali būti tuščias`
            }
        }    
    }
}

export const FormTextAreaValidation = () => ({
    required : {
        value : "true",
        message : `žinutė negali būti tuščia`
    },
    minLength : {
        value : 10,
        message : `žinutę turi sudaryti ne mažiau kaip 10 raidžių`
    },
    maxLength : {
        value : 250,
        message : `žinutė negali viršyti 250 raidžių kiekio`
    },
});

export const FormPasswordValidation = (name) => {
    return{
        required : {
            value : "true",
            message : `Slaptažodis negali būti tuščias`
        },
        minLength: {
            value: 6,
            message: "Slaptažodį turi sudaryti ne mažiau kaip 6 simboliai ar raidės"
        },
    }
}

