import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlueprintList(props: JSX.IntrinsicAttributes) {
    let { blueprintId } = useParams();

    return(
        <p>yeah: { blueprintId }</p>
    )
}