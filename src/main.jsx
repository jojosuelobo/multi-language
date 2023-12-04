import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import global_us from "../src/translations/us/global.json"
import global_ptbr from "../src/translations/ptbr/global.json"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "us",
  resources: {
    us: {
      global: global_us
    },
    ptbr: {
      global: global_ptbr
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)

