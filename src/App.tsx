import React from "react";
import { Header } from "./components/Header/Header";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { fetchRegions } from "./store/regionsReducer/actionReducer";
import { Field } from "./components/Field/Field";

import "./App.css";
import { ErrorBlock } from "./components/ErrorBlock/ErrorBlock";
import { Loading } from "./components/Loading/Loading";

function App() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.regions.status);

  React.useEffect(() => {
    dispatch(fetchRegions());
  }, []);

  return (
    <div className="App">
      <Header />
      {status === "loading" && <Loading />}
      {status === "success" && <Field />}
      {status === "error" && <ErrorBlock />}
    </div>
  );
}

export default App;
