import { createSlice, configureStore } from "@reduxjs/toolkit";

const elementVisibilitySlice = createSlice({
  name: "isVisibleElement",
  initialState: { showElement: false },
  reducers: {
    isVisible(state) {
      state.showElement = !state.showElement;
    },
  },
});

const initialState = {
  clickedIDs: [],
  resultSelection: ["...", "...", "...", "...", "..."],
  completedSelection: false,
  orderSummaryVisible: false,
  incompleteChoiceID: ''
};

const groupOne = ["Capsule", "Filter", "Espresso"];
const groupTwo = ["Single Origin", "Decaf", "Blended"];
const groupThree = ["250g", "500g", "1000g"];
const groupFour = ["Wholebean", "Filter ", "Cafetiére"];
const groupFive = ["Every week", "Every 2 weeks", "Every month"];
const idList = ['id-1','id-2','id-3','id-4','id-5']

const selectionHandlerSlice = createSlice({
  name: "selectionHandler",
  initialState,
  reducers: {
    expandHandler(state, action) {
      let old = state.clickedIDs;
      const index = old.indexOf(action.payload);
      index === -1
        ? state.clickedIDs.push(action.payload)
        : state.clickedIDs.splice(index, 1);
    },
    expandHadlerError(state, action){
      let old = state.clickedIDs;
      const index = old.indexOf(action.payload);
      if (index === -1) state.clickedIDs.push(action.payload);
    },
    selectionHadler(state, action) {
      if (groupOne.includes(action.payload))
        state.resultSelection[0] = action.payload;
      if (groupTwo.includes(action.payload))
        state.resultSelection[1] = action.payload;
      if (groupThree.includes(action.payload))
        state.resultSelection[2] = action.payload;
      if (groupFour.includes(action.payload))
        state.resultSelection[3] = action.payload;
      if (groupFive.includes(action.payload))
        state.resultSelection[4] = action.payload;
    },
    orderSummaryChecker(state) {
      
      if (state.resultSelection.includes("...")){
        state.completedSelection = true;
        state.incompleteChoiceID = idList[(state.resultSelection.indexOf('...'))];
        }
      else {
        state.completedSelection = false;
        state.orderSummaryVisible = true;
        state.incompleteChoiceID = ''
      }
    },
    checkoutHandler(state) {
      state.orderSummaryVisible = false;
      state.resultSelection = ["...", "...", "...", "...", "..."];
      state.clickedIDs = [];
    },
  },
});

export const visibilityActions = elementVisibilitySlice.actions;
export const selectionActions = selectionHandlerSlice.actions;

const store = configureStore({
  reducer: {
    visibility: elementVisibilitySlice.reducer,
    selection: selectionHandlerSlice.reducer,
  },
});

export default store;
