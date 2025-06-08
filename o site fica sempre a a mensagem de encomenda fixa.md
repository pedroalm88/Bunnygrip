html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pega Ergonómica para Lápis e Canetas</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f6f8fa;
      color: #222;
    }
    header {
      background: #4f8cff;
      color: #fff;
      padding: 2rem 1rem 1.5rem 1rem;
      text-align: center;
    }
    header h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2.2rem;
    }
    header p {
      margin: 0;
      font-size: 1.2rem;
    }
    .container {
      max-width: 700px;
      margin: 2rem auto;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.07);
      padding: 2rem;
    }
    .benefits {
      margin-bottom: 2rem;
    }
    .benefits h2 {
      color: #4f8cff;
      margin-bottom: 0.5rem;
    }
    .benefits ul {
      padding-left: 1.2rem;
    }
    .gallery {
      text-align: center;
      margin-bottom: 2rem;
    }
    .gallery img {
      width: 120px;
      margin: 0 10px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    form {
      background: #f2f7ff;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    form label {
      display: block;
      margin: 0.7rem 0 0.2rem 0;
      font-weight: 500;
    }
    form input, form select {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #b7d1ff;
      border-radius: 4px;
      font-size: 1rem;
    }
    form button {
      background: #4f8cff;
      color: #fff;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 4px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    form button:hover {
      background: #2563c6;
    }
    .confirmation {
      background: #e6ffe6;
      border: 1px solid #b2ffb2;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 2rem;
      color: #256c25;
      font-size: 1.2rem;
    }
    .confirmation button {
      margin-top: 1rem;
      background: #4f8cff;
      color: #fff;
      border: none;
      padding: 0.5rem 1.2rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }
    .faq {
      margin-top: 2rem;
    }
    .faq h2 {
      color: #4f8cff;
      margin-bottom: 0.5rem;
    }
    .faq p {
      margin-bottom: 0.7rem;
    }
    @media (max-width: 600px) {
      .container {
        padding: 1rem;
      }
      header h1 {
        font-size: 1.4rem;
      }
      .gallery img {
        width: 80px;
        margin: 0 4px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Pega Ergonómica para Lápis e Canetas</h1>
    <p>Ajude as crianças a escreverem melhor e com mais conforto!</p>
  </header>
  <div class="container">
    <section class="benefits">
      <h2>Benefícios</h2>
      <ul>
        <li>Promove a pega correta do lápis</li>
        <li>Reduz fadiga e desconforto ao escrever</li>
        <li>Fácil de usar e adaptar a qualquer lápis ou caneta</li>
        <li>Material seguro, atóxico e resistente</li>
      </ul>
    </section>

    <section class="gallery">
      <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Pega Ergonómica Azul">
      <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Pega Ergonómica Rosa">
    </section>

    <div id="form-section">
      <form id="order-form">
        <h2>Encomende já</h2>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <label for="cor">Cor preferida:</label>
        <select id="cor">
          <option>Azul</option>
          <option>Rosa</option>
          <option>Verde</option>
          <option>Amarelo</option>
        </select>
        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" min="1" value="1" required>
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>

    <section class="faq">
      <h2>Perguntas Frequentes</h2>
      <p><b>Como usar?</b> Basta encaixar a pega no lápis ou caneta e posicionar os dedos conforme o guia enviado com o produto.</p>
      <p><b>É seguro para crianças?</b> Sim, o material é atóxico e foi testado para uso infantil.</p>
      <p><b>Serve em qualquer lápis?</b> Sim, o design é universal para lápis e canetas padrão.</p>
      <p><b>Como posso pagar?</b> Após o envio do pedido, entraremos em contacto para combinar o método de pagamento.</p>
    </section>
  </div>
  <script>
    const form = document.getElementById('order-form');
    const formSection = document.getElementById('form-section');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      formSection.innerHTML = `
        <div class="confirmation">
          <b>Pedido enviado com sucesso!</b><br>
          Em breve entraremos em contacto por email.<br>
          <button onclick="voltarFormulario()">Fazer novo pedido</button>
        </div>
      `;
    });

    function voltarFormulario() {
      formSection.innerHTML = `
        <form id="order-form">
          <h2>Encomende já</h2>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" required>
          <label for="email">Email:</label>
          <input type="email" id="email" required>
          <label for="cor">Cor preferida:</label>
          <select id="cor">
            <option>Azul</option>
            <option>Rosa</option>
            <option>Verde</option>
            <option>Amarelo</option>
          </select>
          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" min="1" value="1" required>
          <button type="submit">Enviar Pedido</button>
        </form>
      `;
      document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        formSection.innerHTML = `
          <div class="confirmation">
            <b>Pedido enviado com sucesso!</b><br>
            Em breve entraremos em contacto por email.<br>
            <button onclick="voltarFormulario()">Fazer novo pedido</button>
          </div>
        `;
      });
    }
  </script>
</body>
</html>
