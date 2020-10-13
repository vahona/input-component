import React from 'react'


function Input(props) {
    const value = props.value || props.children;
    let style = '';

    if (props) {
        style = props
    }
    if (props.helperText) {
        style = props.helperText
    }
    return(
        <input value = {value} disabled = {props.disabled}/>
    )
}

export default Input