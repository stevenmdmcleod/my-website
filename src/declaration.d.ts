declare module '*.ttf' {
    const content: string;
    export default content;
}

declare module '*.svg?raw' {
    const content: string;
    export default content;
  }

  declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}