# Stage 1

## Git Submodules

O submodule permite que vc crie um repositório Git como subdiretório de outro repositório Git, o que te da liberdade de clonar outro repositório dentro do seu, o mesmo vai recebendo commits sem relação com o outro repository

### Por que usar esta técnica
Surgiram devido a necessidades de inserir uma biblioteca ou outro projeto em outros projetos, de acordo com o contexto do projeto é muito útil para inserir está técnica de git modules.

Exemplo de uso: preciso inserir no meu projeto um repositório com arquivos CSV para importação. Esse repositório vive recebendo updates. Nesse caso, você irá apenas consumir esses arquivos CSV ( Comma Separated Values ) para importação local na sua base de dados.

### Principais comandos

1. git submodule add <url-repository> diretorio, Ex: git submodule add git@bitbucket.org:rivendel/csv-imports.git import/csv

2. git submodule init

3. git submodule update

4. git clone nome-repository --recurse-submodules

## Flags

1. npm install --silent , mostra apenas logs importantes durante o processo de instalação

2. npm init -y --scope @kainangv, já inizializa o repositório local com suas informação do perfil do github