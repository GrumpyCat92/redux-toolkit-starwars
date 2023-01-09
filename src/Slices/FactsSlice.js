import { createSlice } from "@reduxjs/toolkit";

const initData = {
  count: 1,
  factsList: [],
};

const facts = [
  "прообразом Чубакки стал пёс режиссёра",
  "актёрам разрешили подобрать любимый цвет для своих световых мечей",
  "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
  "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
  "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
];

const factsSlice = createSlice({
  name: "facts",
  initialState: initData,
  reducers: {
    changeCount(state, action) {
      if (isNaN(action.payload)) {
        state.count = 1;
      } else {
        if (action.payload < 1 || action.payload > 5) {
          state.count = 1;
          state.factsList = facts.slice(0, 1);
        } else {
          state.count = action.payload;
          state.factsList = facts.slice(0, action.payload);
        }
      }
    },
  },
});

export const { changeCount } = factsSlice.actions;
export default factsSlice.reducer;
