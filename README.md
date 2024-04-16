# CodeLabAPIUsuario

Este é a API de usuário

## Development

```bash
docker compose up --build
```

## Execução de Testes

- "attach" ao container para executar os testes.
- caso não deseje obter os relatórios de cobertura, remove o sufixo `:cov` do comando de teste.

### Unit

```bash
npm run teste:cov
```

### E2E

```bash
npm run teste:e2e:cov
```
