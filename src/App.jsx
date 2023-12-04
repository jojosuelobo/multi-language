import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global")

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <button onClick={() => handleChangeLanguage("ptbr")}>PT-BR</button>
      <button onClick={() => handleChangeLanguage("us")} >US</button>

      <h1>{t("label.message")}</h1>
    </div>
  )
}

export default App
