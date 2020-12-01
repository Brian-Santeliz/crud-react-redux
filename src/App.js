import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import FormAdd from "./components/FormAdd";
import FormUpdate from "./components/FormUpdate";
import { Provider } from "react-redux";
import store from "./components/redux/store";
function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <ListProducts />
          </Route>
          <Route exact path="/new">
            <FormAdd />
          </Route>
          <Route exact path="/update/:id">
            <FormUpdate />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
