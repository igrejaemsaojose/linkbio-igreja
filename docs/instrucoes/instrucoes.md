# Instrucoes de trabalho — bio-cristian

Este documento define **como trabalhar neste projeto**. Ele e de leitura obrigatoria antes de qualquer alteracao relevante e deve ser mantido atualizado sempre que o fluxo mudar.

## 1. Convencao de nomenclatura

- Nenhum arquivo ou pasta pode conter acentos ou caracteres especiais (c-cedilha, til, crase, etc.).
- Use ASCII puro e **kebab-case** em nomes compostos.
- Conteudo dentro dos arquivos pode ser em pt-BR com acentos normalmente. A restricao vale apenas para **nomes** de arquivos e pastas.

## 2. Estrutura e finalidade das pastas

### `docs/arquitetura/`
Informacoes tecnicas do projeto: stack, divisoes do software, ferramentas, banco de dados (quando houver), modelo de dados, roteamento, decisoes arquiteturais, lacunas conhecidas. Arquivo principal: `arquitetura.md`. Atualize sempre que a arquitetura mudar.

### `docs/instrucoes/`
Regras de trabalho e planos de acao por fases. Contem pelo menos:
- `instrucoes.md` (este arquivo) — fluxo obrigatorio de trabalho.
- Um ou mais `plano-de-acao-*.md` quando o projeto (ou iniciativa dentro dele) for dividido em fases.

### `docs/historico/`
Registro sequencial de toda alteracao relevante. Cada alteracao vira um arquivo `.md` proprio, no formato:

```
NN-descricao-curta-AAAA-MM-DD.md
```

- `NN` = numero sequencial de 2 digitos, comecando em `00`. Use o proximo numero disponivel olhando os arquivos existentes.
- `descricao-curta` = resumo em kebab-case, sem acentos.
- `AAAA-MM-DD` = data da alteracao.

### `docs/design-system/`
Identidade visual e design system do projeto. Arquivo principal: `design-system.md`, cobrindo: sobre a marca, tipografia, paleta de cores (tokens semanticos + marca + gradientes), border radius/espacamentos, componentes e padroes UX/UI, animacoes, assets. Subpastas `logos/`, `icones/`, `favicon/` guardam os arquivos de marca.

### `docs/prompt-inicial/`
Contem o `prompt-inicial.md` que originou esta estrutura. Nao precisa ser consultado durante o trabalho; existe apenas para referencia futura.

### `CLAUDE.md` (raiz)
Arquivo de contexto que o agente consulta antes de qualquer alteracao. Contem visao geral, stack, scripts de dev, estrutura de pastas, ponteiros para `docs/` e a regra inegociavel de historico.

## 3. Regra inegociavel de historico

Toda e qualquer alteracao relevante deve ser registrada em `docs/historico/` como um arquivo novo.

"Relevante" inclui, mas nao se limita a:
- Criacao, remocao ou renomeacao de arquivos/pastas.
- Alteracao de dependencias.
- Mudanca de estrutura de rotas, componentes ou logica de negocio.
- Alteracao de conteudo (se for um projeto de conteudo).
- Mudanca de estilo/design global.
- Alteracoes de configuracao (build, lint, tipagem, etc.).
- Decisoes de arquitetura (mesmo sem codigo alterado).

### Antes de uma alteracao relevante
1. Ler todo o historico em `docs/historico/` em ordem numerica crescente.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se a alteracao tem impacto visual, ler tambem `docs/design-system/design-system.md`.
4. So entao propor/aplicar a alteracao.

### Depois de uma alteracao relevante
1. Criar um arquivo novo em `docs/historico/` seguindo o formato do nome.
2. Atualizar `docs/arquitetura/` se a arquitetura foi impactada.
3. Atualizar `docs/instrucoes/instrucoes.md` se regras/fluxo de trabalho mudaram.
4. Atualizar `docs/design-system/` se tokens, componentes, animacoes ou assets foram tocados.

### Formato de cada arquivo de historico

```markdown
# <Titulo da alteracao>

- **Data:** AAAA-MM-DD
- **Autor:** <Cristian | Claude>
- **Escopo:** <arquitetura | conteudo | UI | config | infra | outro>

## Contexto / Motivacao
Por que essa alteracao foi feita.

## O que mudou
Lista objetiva dos arquivos/areas afetadas.

## Impacto
O que pode quebrar, o que precisa ser revisado, proximos passos.
```

## 4. Planos de acao por fases

Projetos (ou iniciativas grandes dentro deles) devem ser quebrados em **fases numeradas** e registrados em `docs/instrucoes/plano-de-acao-<nome>.md`.

Diretrizes:
- Cada fase tem objetivo, checklist e **criterio de conclusao claro**.
- Uma fase so comeca quando a anterior esta 100% concluida (sem voltar).
- **Intercalar fases de testes de funcionalidade** entre fases de construcao quando fizer sentido (ex.: Fase 1, 2, 3 -> Fase de testes -> Fase 4, 5). Nao deixar testes so para o fim.
- **A ultima fase antes do deploy deve ser uma rodada de testes de seguranca + funcionalidade**, cobrindo: sanitizacao/XSS, auditoria de dependencias, headers, segredos, links externos com `rel="noopener noreferrer"`, smoke test manual e re-execucao da suite automatica.
- Ao final de cada fase: marcar como concluida no plano **e** criar o registro correspondente em `docs/historico/`.
- Listar explicitamente o que esta **fora de escopo** (pos-MVP) para evitar looping em partes ja concluidas.

## 5. README

O `README.md` da raiz deve refletir o projeto real — nunca deixar template default de gerador/scaffolder. Conteudo minimo: descricao curta, stack, como rodar, scripts, estrutura de pastas, ponteiros para `docs/` e a regra de ouro do historico.
