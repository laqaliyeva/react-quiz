import React from 'react'
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type ? props.type : 'text';
    const htmlFor = inputType + '-' + Math.random();
    const cls = [classes.Input];
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input id={htmlFor}
                   type={inputType}
                   value={props.value}
                   onChange={props.onChange} />
            {isInvalid(props)
                ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                : null}
        </div>
    )
};

export default Input