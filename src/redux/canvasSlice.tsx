import * as toolkitRaw from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const { createSlice } = (
  'default' in toolkitRaw ? toolkitRaw.default : toolkitRaw
) as typeof toolkitRaw;

interface CanvasData {
  curPiece: string;
  patternScale: number;
  patternRotation: number;
  patternOffsetX: number;
  patternOffsetY: number;
  patternHue: number;
  patternSaturation: number;
  patternLightness: number;
  patternShadow: number;
  patternHighlight: number;
  currentTexture: string;
}

export const initialState: CanvasData = {
  curPiece: 'man_shirt',
  patternScale: 1,
  patternRotation: 0,
  patternOffsetX: 0,
  patternOffsetY: 0,
  patternHue: 0,
  patternSaturation: 1,
  patternLightness: 1,
  patternShadow: 0,
  patternHighlight: 0,
  currentTexture:
    'https://sun9-54.userapi.com/impg/5qI8MrB2PdWGFt3yk_iKonp3goTztKM_5Sp81Q/du0ZQLmF8A8.jpg?size=1024x1024&quality=96&sign=3c335ededfbbc3fe95e70d4ff7cdf4e0&type=album',
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setCurPiece: (state, action: PayloadAction<string>) => {
      state.curPiece = action.payload;
    },
    setScale: (state, action: PayloadAction<number>) => {
      state.patternScale = action.payload;
    },
    setRotation: (state, action: PayloadAction<number>) => {
      state.patternRotation = action.payload;
    },
    setOffsetX: (state, action: PayloadAction<number>) => {
      state.patternOffsetX = action.payload;
    },
    setOffsetY: (state, action: PayloadAction<number>) => {
      state.patternOffsetY = action.payload;
    },
    setHue: (state, action: PayloadAction<number>) => {
      state.patternHue = action.payload;
    },
    setSaturation: (state, action: PayloadAction<number>) => {
      state.patternSaturation = action.payload;
    },
    setLightness: (state, action: PayloadAction<number>) => {
      state.patternLightness = action.payload;
    },
    setShadow: (state, action: PayloadAction<number>) => {
      state.patternShadow = action.payload;
    },
    setHighlight: (state, action: PayloadAction<number>) => {
      state.patternHighlight = action.payload;
    },
    resetColors: (state) => {
      state.patternHue = initialState.patternHue;
      state.patternSaturation = initialState.patternSaturation;
      state.patternLightness = initialState.patternLightness;
    },
    resetLights: (state) => {
      state.patternHighlight = initialState.patternHighlight;
      state.patternShadow = initialState.patternShadow;
    },
    resetScale: (state) => {
      state.patternScale = initialState.patternScale;
    },
    setCurrentTexture: (state, action: PayloadAction<string>) => {
      state.currentTexture = action.payload;
    },
  },
});

export const {
  setCurPiece,
  setScale,
  setRotation,
  setOffsetX,
  setOffsetY,
  setHue,
  setSaturation,
  setLightness,
  setShadow,
  setHighlight,
  resetColors,
  resetLights,
  resetScale,
  setCurrentTexture,
} = canvasSlice.actions;
export default canvasSlice.reducer;
