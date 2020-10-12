import { render } from "solid-js/dom";

const App = () => {
  return <div>Hi from Webpack 5 and Solid!</div>;
};

render(() => <App />, document.getElementById("app"));
