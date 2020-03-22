import { SvgIconProps } from "@material-ui/core";

export interface ISourceProps {
  name: string
  id: string
  icon: object | null
  type: string
  baseUrl: string
}

export class Source {
  constructor(props: ISourceProps) {

  }
}