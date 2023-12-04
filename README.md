# Multi language
Como usar multiplos idiomas em um projeto com a lib `i18next`

## How started

1. Instalar lib `i18next` e `react-i18next`
```
npm install i18next react-i18next
```

2. Em `src`, criar uma pasta `translation` para armanezar as pastas de linguagens, neste exemplo usaremos inglês e português. 

3. Em translations, crie as pasatas de idioma `us` e `ptbr` e em cada pasta um arquivo `global.json` com os idiomas

``ptbr.json``
```json
{
    "label": {
        "message": "Olá Mundo"
    }
}
```

``us.json``
```json
{
    "label": {
        "message": "Hello World"
    }
}
```

4. Faça as configurações de importação e `init` no projeto raiz, no meu caso, o `main.jsx`
```jsx
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
```

5. Encapsule o <App /> num componente i18next passando como parâmetro o objeto de idiomas i18next
```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
```

6. Na tela do projeto, faça a importação do `useTranslation` para manipulação do idioma, e crie uma constante na qual vai receber a linguagem, passando o texto na aplicação da seguinte forma:
```jsx
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation("global")

  return (
    <div>
      <h1>{t("label.message")}</h1>
    </div>
  )
}

export default App

```

7. Para alterar o idioma, podemos fazer uma função da seguinte forma:
```jsx
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
```

### [Vídeo usado como referência](https://youtu.be/TlHk11Eftow?si=X4g7lOsb1aTygAjH)