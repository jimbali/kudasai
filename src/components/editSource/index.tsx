import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImportExportIcon from '@material-ui/icons/ImportExport'
import RestApi from '../../sources/restApi';

export default function SourceList(props: JSX.IntrinsicAttributes) {
    let { sourceId } = useParams();
    const source = new RestApi({
        name: 'Freebail Wedding API',
        id: 'freebail-wedding-api',
        icon: ImportExportIcon,
        type: 'rest-api',
        baseUrl: 'https://freebail.wedding/api/guests/YYNEgfGEtB'
    })

    const [data, setData] = useState({})

    useEffect(() => {
        source.getData().then((data) => {
            setData(data)
        })
    }, [source]);

    return(
        <p>{ JSON.stringify(data) }</p>
    )
}