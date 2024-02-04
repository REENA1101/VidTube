import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./index";
import { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch:()=>AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState>= useSelector;
