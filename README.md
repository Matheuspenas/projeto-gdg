# Projeto-GDG

## ✨ Descrição do Projeto

Este projeto tem como objetivo a divulgação de um evento tecnológico GDG por meio de uma página web.

A página irá conter a data, hora e local do evento, juntamente com uma seção com o currículo dos palestrantes e uma funcionalidade de inscrição para o evento.

## 🔧 Funcionalidades da Página

### Página Inicial
- Exibição de um banner com nome, data e descrição do evento.
- Botão de chamada para ação: “Inscreva-se agora”.
- Cards de **eventos anteriores** exibidos em um grid com botão “Ver mais”, mostrando 4 eventos por vez.
- Ícones de redes sociais interativos.
- Rodapé com patrocinadores e apoiadores.
- Animação de fundo com `Vanta.net` em azul.
- Animações `fade-in` ao rolar a página.
- Layout responsivo e menu hambúrguer com animação pulse.

### Página de Programação
- Cronograma com horários e atividades do evento.
- Animação de fundo com `Vanta.net` em laranja.

### Página de Palestrantes
- Cards com foto, nome, currículo e cargo de cada palestrante.
- Animação de fundo com `Vanta.net` em verde.

### Página de Localização
- Endereço completo com integração ao Google Maps.
- Indicação do local exato dentro do campus.
- Animação de fundo com `Vanta.net` em roxo.

### Página de Inscrição
- Formulário de inscrição com validação de campos.
- Mensagem de confirmação após envio.
- Animação `Matrix 2D` com as cores azul, laranja, verde e vermelho como plano de fundo.

---

## 📱 Responsividade Geral
- Layout 100% responsivo para desktop, tablet e mobile.
- Menu hamburguer funcional em todas as resoluções.


## 🔼 Público-Alvo

- `Programadores`
- `Universitários`
- `Interessados`
- `Investidores`

## 💻 Linguagens Utilizadas

- `HTML5`
- `CSS3`
- `JavaScript`

## 🚀 Tecnologias Utilizadas

- `Visual Studio Code`
- `Canva`
- `Figma`
- `Trello`
- `Git/GitHub`

## 🗃 Armazenamento de Dados

- `Google Sheets` – Utilizado como banco de dados para armazenar inscrições, permitindo uma gestão centralizada e fácil de dados.

## 📚 Bibliotecas e Recursos Externos

- [Font Awesome](https://fontawesome.com/) – Ícones vetoriais usados na interface
- [Vanta.js](https://www.vantajs.com/) – Animação de fundo com efeito de rede (Net)

## 🎨 Justificativa do Design

As cores serão inspiradas na identidade visual do `GDG Londrina` e da `Unicesumar`, promovendo a união entre os dois.

## 🖋️ Wireframes e Esboços

- Página Inicial: Informativa sobre o evento.
- Página de Programação: Informa sobre os temas, horários, palestrantes, intervalos (se houver) no dia do evento.
- Página de Palestrantes: Currículos e cargos dos palestrantes.
- Página de Inscrição: Para efetuar a inscrição e receber certificado (se houver emissão).
- Página de Localização: Contém informações sobre o local, horário e em qual parte do campus será realizado o evento, além de conter um mapa integrado levando diretamente à localização.

## 🔠 Mapa Mental

![Mapa Mental](./Images/Black%20Doodle%20Tools%20for%20Generating%20Ideas%20Mind%20Map.jpg)

## 📅 Trello

![Imagem Trello](./Images/Captura%20de%20tela%202025-03-21%20210138.png)

---

# Projeto GDG – Página Inicial

## 📄 Descrição da Página Inicial

A página inicial tem como objetivo principal apresentar as informações essenciais do evento GDG Londrina, com um layout moderno, interações visuais e acessibilidade para diversos dispositivos.

A seguir estão as principais seções da página inicial, com suas funcionalidades e espaço para demonstração visual (GIFs/fotos):

---

## 📱 Menu Hamburguer

O menu hamburguer possui fundo **meio transparente** e pode ser fechado ao clicar no “X” ou **clicando fora dele**. Ele mostra as seguintes páginas:

- Página Inicial
- Programação
- Palestrantes
- Inscrição
- Localização

📌 _Funciona perfeitamente em dispositivos móveis, com boa responsividade._

🎥 **GIF demonstrativo do Menu Hamburguer:**  
`(adicione aqui)`  
![GIF do Menu](./Images/gif-menu.gif)

---

## 📅 Seção de Informações do Evento

Logo após o header, é exibida uma **seção com data, horário, nome e localização** do evento GDG. Abaixo dessas informações, há uma **descrição do evento**.

🎥 **GIF dessa seção:**  
`(adicione aqui)`  
![GIF Info Evento](./Images/gif-infos.gif)

---

## 🟢 Botão de Inscrição

Um botão grande e chamativo com chamada à ação leva diretamente para a página do **formulário de inscrição**.

🎥 **GIF do botão de inscrição:**  

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20de%20tela%20do%20botão%20de%20inscrição%20da%20página%20inicial(desktop).gif)

---

## 🔴 Botão Flutuante com Animação Pulse

Ao rolar a página, surge um **botão pequeno no canto inferior direito** com uma animação “pulse” e uma **bolinha vermelha**, incentivando o usuário a abrir o menu hamburguer.

- A bolinha desaparece após o menu ser clicado pela primeira vez.

🎥 **GIF do botão flutuante com animação:**  
`(adicione aqui)`  
![GIF Botão Pulse](./Images/gif-botao-pulse.gif)

---

## 🧾 Cards dos Eventos Anteriores (com botão "Ver mais")

A antiga galeria foi substituída por um **grid de cards responsivos** que exibem eventos anteriores. Cada card apresenta imagem, título e breve descrição do evento.

- Por padrão, **4 cards são exibidos inicialmente**;
- Ao clicar no botão **"Ver mais"**, são carregados mais 4 eventos;
- A funcionalidade evita rolagens longas e mantém a organização visual;
- Totalmente responsivo e com animações suaves para exibição dos novos cards.

🎥 **GIF dos cards com botão "Ver mais":**  
`(adicione aqui)`  
![GIF Cards Evento](./Images/gif-cards-evento.gif)

---

## 📞 Seção de Contato

Ícones de redes sociais redondos e interativos:

- Ao passar o mouse ou clicar (em dispositivos móveis), mudam a cor de fundo para a respectiva da rede social.
- Todos os botões estão linkados corretamente:
  - Twitter (X)
  - Instagram
  - LinkedIn
  - YouTube
  - E-mail

🎥 **GIF dos ícones interativos:**  
`(adicione aqui)`  
![GIF Contato](./Images/gif-contato.gif)

---

## 🧩 Footer – Apoio e Patrocínio

No final da página, há uma seção de "Apoio", destacando os **patrocinadores, colaboradores e apoiadores** do evento.

🎥 **GIF do footer:**  
`(adicione aqui)`  
![GIF Footer](./Images/gif-footer.gif)

---

## 🎨 Animação de Fundo e Escolha de Cores

- O **background da página** possui uma animação com efeito `vanta.net` em azul.

🎥 **GIF da animação de fundo e cores:**  
`(adicione aqui)`  
![GIF Fundo Vanta](./Images/gif-vanta.gif)

---

## ✨ Animações Fade-In ao Rolar a Página

A página possui uma animação **fade-in** para diversos elementos que aparecem conforme o usuário rola o conteúdo:

- Torna a navegação mais leve e visualmente agradável;
- Melhora a leitura e a transição entre seções;
- Responsiva em diferentes dispositivos.

🎥 **GIF das animações fade-in ao rolar:**  
`(adicione aqui)`  
![GIF Fade In](./Images/gif-fadein.gif)

---

## 🗓️ Página de Programação

Apresenta os horários, temas e palestrantes do evento de forma clara e estilizada.

- Mantém o mesmo layout da página inicial (com header, menu e animações);
- Efeito de fundo **Vanta.net em verde**, com transição suave (fade-in);
- Cards com:
  - Foto e nome do palestrante;
  - Tema da palestra;
  - Horário do bloco.

🎥 GIF da página de programação:

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20de%20tela%20Página%20de%20Programação(desktop).gif)

---

## 👩‍🏫 Página de Palestrantes

Apresenta os palestrantes do evento com destaque visual e informações relevantes.

- Mantém o mesmo layout da página inicial (header, menu hambúrguer e animações);
- Fundo animado com **Vanta.net em laranja**, incluindo transição suave (fade-in);
- Cada palestrante é exibido em um **card estilizado**, contendo:
  - Foto com bordas arredondadas e contorno laranja;
  - Nome e título profissional (ex: “Especialista em IA”);
  - Botão com animação ao clicar, rotulado como **"Ver Perfil"**

## 🧾 Ao clicar em “Ver Perfil”:

- É exibido um **modal** chamado **Perfil Completo**:
  - Mostra a foto do palestrante (sem bordas);
  - Exibe todas as informações relevantes sobre ele (mini currículo);
  - Inclui **ícones interativos com links para redes sociais** (LinkedIn, GitHub, Instagram, Twitter (X), etc).

🎥 GIF da página de palestrantes:

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20da%20tela%20da%20Página%20de%20Palestrantes(desktop).gif)

---

## 📝 Página de Inscrição

Página acessada ao clicar no botão **“Inscreva-se agora!”** na página inicial ou no **menu hambúrguer**.

- Mantém o mesmo layout das outras páginas (header, menu hambúrguer, footer e animações com fade-in);
- **Fundo animado estilo “Matrix”** com `canvas` simulando chuva de "0" e "1" em **cores alternadas** (azul, verde, laranja e vermelho), refletindo a identidade visual do evento.

🎥 GIF da animação de fundo:
(adicione aqui)

---

### 🧾 Formulário de Inscrição

Exibido centralizado e em destaque com `box-shadow`, dando aparência de estar acima do fundo.

- Título: **“Inscreva-se”**;
- Campos obrigatórios:

  - Nome;
  - Sobrenome;
  - Endereço de e-mail;
  - Número de celular.

- Botão de envio com **animação ao clicar**;
- Ao clicado pelo usuário após todos os dados serem preenchidos corretamente:
  - Uma **barra de carregamento** aparece abaixo do botão;
  - Os dados são verificados e enviados para uma **planilha no Google Sheets**, criada exclusivamente para armazenar as inscrições com segurança (ex: para emissão de certificados de participação).

🎥 GIF do formulário e da barra de carregamento:

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20de%20tela%20do%20formulário%20de%20inscrição(desktop).gif)

---

### ✉️ Mensagens de Retorno

Após o envio dos dados, o sistema responde com mensagens claras dentro da mesma seção:

- ✅**Inscrição realizada com sucesso!** (mensagem azul);
- 🟢**Você já está inscrito!** (mensagem verde – caso o usuário tente se inscrever novamente com os mesmos dados);
- ❌**Erro ao enviar inscrição. Tente novamente.** (mensagem vermelha – possíveis causas):
  - Falha na conexão com a internet;
  - API do Google Sheets fora do ar;
  - Campos obrigatórios não preenchidos corretamente;
  - Formato de e-mail ou número inválidos.

🎥 GIF das mensagens de retorno:
(adicione aqui)

---

### ⏳ Temporizador do Evento

Logo abaixo do formulário, é exibido um **contador regressivo em tempo real**:

- Texto: **“Faltam apenas:”**
- Seguido de: dias, horas, minutos e segundos, **atualizando a cada segundo** sem atrasos ou recarregamento da página.

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20do%20Temporizador%20para%20inicio%20do%20evento(desktop).gif)

🎉 Quando o contador chega a zero (horário de início do evento), ele é **automaticamente substituído** por uma mensagem:

> **"O evento começou!"**

## Versão Desktop

![Versão Desktop](./Gifs/Gravação%20de%20exibição%20da%20mensagem%20após%20o%20temporizador%20zerar(desktop).gif)

---

## 📍 Página de Localização

Página acessada ao clicar no botão **“Localização”** no menu hambúrguer da página principal ou em qualqer uma das outras.

- Mantém o mesmo layout das outras páginas (header, menu hambúrguer, footer e animações com fade-in);
- Fundo com **efeito visual Vanta.NET vermelho** (movimentação de linhas e pontos) aplicado com `JavaScript`;
- Apresenta as **informações do local do evento** com clareza:

  - 🏛️ Local: Auditório da Unicesumar (2º andar);
  - 📍 Endereço: Av. Santa Mônica, 450 – Franca, Londrina – PR, 86027-610;
  - 🛍️ Ponto de referência: Próximo ao Shopping Boulevard.

- Mapa do Google Maps embutido, com bordas arredondadas e `box-shadow`, direcionando o usuário diretamente para o site ou aplicativo, para ter acesso a localização exatas e rotas até o local do evento;
- Responsivo e adaptável para celulares.

🎥 GIF do mapa e visual da página:  
(adicione aqui)

---

## 👨‍💻 Desenvolvedores

Este projeto foi desenvolvido por estudantes de Engenharia de Software da Unicesumar:

- **Paulo Vinicius Carraro** – [@Paulovcarraro](https://github.com/Paulovcarraro)
- **Matheus Pena** – [@Matheuspenas](https://github.com/Matheuspenas)
- **Daniel Bill** – [@DanielBiLL13](https://github.com/DanielBiLL13)

---

## 🌐 Acesse o Projeto

Você pode visualizar o site no GitHub Pages pelo link abaixo:

🔗 [Acessar Site GDG - GitHub Pages](https://matheuspenas.github.io/projeto-gdg/)
