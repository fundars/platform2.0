import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ArweaveWalletKit } from 'arweave-wallet-kit'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ArweaveWalletKit
      config={{
        permissions: ["SIGN_TRANSACTION"],
        ensurePermissions: true,
      }}
      theme={{
        radius: "minimal",
        titleHighlight: { r: 209, g: 109, b: 27 },
        accent: { r: 37, g: 41, b: 28 },
      }}
    >
    <App /></ArweaveWalletKit>
  </StrictMode>,
)
