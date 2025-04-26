
## 🏗️ Arquitetura

O projeto segue as melhores práticas de desenvolvimento com React:

- **Componentes reutilizáveis** - Componentes pequenos e focados
- **Hooks personalizados** - Lógica de negócio separada da interface
- **Estilos modulares** - Cada componente tem seu próprio arquivo de estilo
- **TypeScript** - Tipagem forte para melhor manutenção e segurança
- **API services** - Serviços isolados para comunicação com APIs externas

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:
- Desktops
- Tablets
- Dispositivos móveis

## 🔄 API de Conversão

O projeto utiliza a [Exchange Rate API](https://www.exchangerate-api.com/) para obter taxas de câmbio atualizadas. A API oferece:

- Taxas de câmbio atualizadas diariamente
- Suporte a múltiplas moedas
- Limite de uso gratuito

## ⚙️ Personalização

Você pode personalizar as cores e estilos da aplicação editando as variáveis CSS no arquivo `globalStyles.ts`:

```typescript
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --accent-color: #fd79a8;
  --background-color: #f8f9fa;
  --text-color: #2d3436;
  // ... outras variáveis
}
```
