import {LocaleObject, setLocale} from 'yup';

const ptBR: LocaleObject = {
    mixed: {
        required: '${path} é requerido'
    },
    string: {
        max: '${path} precisar ter no máximo ${max} caracteres'
    },
    number: {
        min: '${path} precisar ser no mínimo ${min}'
    }
};

setLocale(ptBR);

export * from 'yup';