/// <reference types="react-scripts" />
declare module '*.svg' {
    export class ReactComponent extends PureComponent<SVGProps<SVGSVGElement>> {}
  }