# Edward & Maria — Nossa pequena Transilvânia

Um site romântico de cinco meses, feito em HTML, CSS e JavaScript puro para publicação no GitHub Pages.

## Conteúdo
- `index.html`: capítulos e conteúdo do site.
- `style.css`: identidade visual gótica, layout responsivo e animações.
- `script.js`: contador desde 04/06/2026, galeria ampliável, surpresa final e música MP3 fornecida pelo usuário.
- `assets/`: fotografias reais fornecidas nesta conversa.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (por exemplo, `edward-e-maria`).
2. Extraia o ZIP e envie **todos os arquivos e a pasta `assets`** para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação e abra o endereço indicado na seção Pages.

Não renomeie nem mova a pasta `assets`, pois os caminhos das fotos são relativos.

## Fotografias
Este pacote contém as três imagens recebidas até agora. O pedido original menciona cinco fotos; quando as outras duas forem enviadas, adicione-as a `assets/` e inclua mais dois cartões na galeria de `index.html` (seguindo os mesmos caminhos relativos).

As imagens foram exportadas em JPEG otimizado, sem alterações de rosto ou corpo. Os originais enviados não foram retocados.

## Personalização
- Texto e legendas: edite `index.html`.
- Cores e aparência: edite as variáveis no início de `style.css`.
- Data do contador: ajuste `new Date(2026, 5, 4, 0, 0, 0)` em `script.js` (o mês usa índice zero: `5` = junho).
- A música é o arquivo `assets/voce-e-meu-tchan.mp3`. Ela toca quando a pessoa clica em “Tocar nossa música”, pode ser pausada e repete em loop. Não há reprodução automática.
- Ao publicar no GitHub Pages, envie também o MP3 dentro da pasta `assets`. Verifique se você tem autorização para disponibilizar a gravação publicamente.

## Observação
A página usa fontes do Google Fonts quando há internet; se estiver offline, utiliza fontes de sistema como alternativa. O restante funciona sem backend ou serviços pagos.

## Música atualizada
O botão de música usa o MP3 em `assets/voce-e-meu-tchan.mp3`, com volume inicial de 65%, pausa e repetição. A reprodução depende de um clique do visitante.


## Versão Transilvânia Gótica

Visual atualizado com lua vermelha, brilhos, corações flutuantes, castelo e referências corrigidas ao casal Johnny e Mavis. As três fotos, o MP3, a contagem de tempo, a carta e a história original foram preservados.

Para atualizar o GitHub Pages, envie o conteúdo deste ZIP à raiz da branch `main`, substituindo os arquivos de mesmo nome. A pasta `assets` deve permanecer na raiz. O GitHub Pages usa `main` e `/ (root)`.
