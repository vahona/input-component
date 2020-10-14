import React from 'react'


function Input(props) {
    const value = props.value || props.children;
    let classes = props.size ? `inpt-${props.size}`
     : props.helperText ? `inpt-${props.helperText}`
     : props.startIcon ? `inpt-${props.startIcon}`
     : props.endIcon ? `inpt-${props.endIcon}`
     : props.multiline ? `inpt-${props.multiline}`
     : props.fullwidth ? `inpt-${props.fullwidth}`
     : props.disabled ? `inpt-${props.disabled}`
     : props.error ? `inpt-${props.error}`
     : 'specific'  

    if (props.size) {
        classes = `${classes} inpt-${props.size}`
    }
    if (props.row) {
        classes = `${classes} inpt-${props.row}`
    }
    if (props.fullwidth) {
        classes = `${classes} inpt-fullwidth`
    }
    if (props.classes) {
        style = props.classes
    }
    if(props.disabled) {
        classes = `${classes} inpt-disabled`
    }
    if(props.error) {
        classes = `${classes} inpt-error`
    }
    if(props.helperText) {
        classes = `${classes} inpt-helperText`
    }
    if (props.value) {
        classes = `${classes} inpt-${props.value}`
    }

    if(props.multiline) {
        classes = `${classes} inpt-multiline`
    }

    return(
        <input className={classes} value = {value} disabled = {props.disabled} />

    )
}

export default Input