import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import menuReducer from "./reducer/menuSlice";

export default configureStore({
    reducer: {
        menu: menuReducer
    },
    middleware: [thunk]
})