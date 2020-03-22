import { Source, ISourceProps } from "../Source";

interface IRestApiProps {
  baseUrl: string
}

export class RestApi extends Source {
  baseUrl: string

  constructor(props: ISourceProps & IRestApiProps) {
    super(props)
    this.baseUrl = props.baseUrl
  }

  getData(this: RestApi): Promise<object> {
    return fetch(this.baseUrl)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        return json
      })
  }
}

export default RestApi