/*
  Quick typings for not typed projects
*/
declare module "@kadira/storybook" {
  interface Story {
    add(storyName: string, callback: Function): Story;
    addWithInfo(
      storyName: string,
      description: string,
      callback: Function,
      opts?: any
    ): Story;
  }

  export function storiesOf(name: string, module: any): Story;
  export function action(name: string, ...params: any[]): Function;

}

declare module "storybook-addon-specifications" {
  function specs(testfun: () => void): void
  function describe(name: string, test: () => void): void
  function it(name: string, test: (done: () => void) => void | Promise<any>): void
}

// declare var require: {
//   <T>(path: string): T;
//   (paths: string[], callback: (...modules: any[]) => void): void;
//   ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };

// declare module "react-test-renderer" {

//   interface IComponent {
//     toJSON(): Object;
//   }
  
//   interface ReactTestRender {
//     render(component: any): IComponent
//   }
  
//   export default ReactTestRender;
// }
