import React from 'react';
import {ButtonProps} from '../models/props.models';
export const about_button : ButtonProps = {
    variant: 'outlined',
    text :"About",
    color: 'primary',
    onClick: function (): void {
        alert("hi")
    }
}