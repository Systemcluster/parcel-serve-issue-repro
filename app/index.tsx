import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/app'

const root = ReactDOM.createRoot(document.querySelector('#app') ?? document.body)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
