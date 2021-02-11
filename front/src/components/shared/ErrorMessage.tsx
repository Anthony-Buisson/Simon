import React from 'react';
import { Error, Retry } from "../../style/components/shared/ErrorMessage.style";

const ErrorMessage = (props: {message: string; retry: any}) => {
    const {message, retry} = props;

    return (
        <Error onClick={retry}>{message}<Retry>recharger</Retry></Error>
    )
}

export default ErrorMessage;
