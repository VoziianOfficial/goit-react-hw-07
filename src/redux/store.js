import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // использование локального хранилища
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфигурация для persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"], // сохраняем только слайс контактов
};

// Обертка для редюсера с persist
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия redux-persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
