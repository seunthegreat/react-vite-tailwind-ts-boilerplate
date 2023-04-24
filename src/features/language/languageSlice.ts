import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType } from './types';

type LanguageState = {
  language: OptionType | null;
};
export const initialState: LanguageState = {
  language: {label: "English", value: "en"},
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<OptionType>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
