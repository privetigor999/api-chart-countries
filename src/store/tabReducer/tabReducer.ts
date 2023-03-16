import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITabs {
  id: number;
  tabtitle: string;
  size: string;
  isActive: boolean;
}

interface IStateTab {
  currentTabSize: string;
  listOfTabs: ITabs[];
}

const initialState: IStateTab = {
  currentTabSize: "big",
  listOfTabs: [
    {
      id: 1,
      tabtitle: "1 X 3",
      size: "big",
      isActive: true,
    },
    {
      id: 2,
      tabtitle: "2 X 3",
      size: "medium",
      isActive: false,
    },
    {
      id: 3,
      tabtitle: "SMART",
      size: "small",
      isActive: false,
    },
  ],
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.listOfTabs = state.listOfTabs.map((tab) => {
        if (tab.id === action.payload) return { ...tab, isActive: true };
        return { ...tab, isActive: false };
      });
      state.currentTabSize = state.listOfTabs.find(
        (tab) => tab.id === action.payload
      )?.size as string;
    },
  },
});

export const { setCurrentTab } = tabSlice.actions;
export default tabSlice.reducer;
