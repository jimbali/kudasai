import React from 'react';
import { useParams } from 'react-router-dom';
import ImportExportIcon from '@material-ui/icons/ImportExport'

export default function SourceList(props: JSX.IntrinsicAttributes) {
    let { sourceId } = useParams();
    const source = {
        name: 'Freebail Wedding API',
        id: 'freebail-wedding-api',
        icon: ImportExportIcon,
        type: 'rest-api',
        baseUrl: 'https://localhost:3001/api/guests'
    }

    return(
        <p>{ JSON.stringify(source) }</p>
    )
}