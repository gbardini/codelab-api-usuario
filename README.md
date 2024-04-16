# CodeLabAPITemplate

Este é um template para criação de uma API do CodeLab. Utilize este template para criar a sua API NestJS dentro de um Docker Container.

Antes de iniciar o projeto a partir do template, verifique os TODO's e substitua pelos valores corretos.

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
