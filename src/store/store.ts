import { configureStore, combineReducers } from "@reduxjs/toolkit";
import regionsReducer from "./regionsReducer/regionsReducer";
import tabsReducer from "./tabReducer/tabReducer";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  regions: regionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
