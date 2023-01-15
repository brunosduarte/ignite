import http from 'node:http'

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET =>
// POST =>
// PUT =>
// PATCH =>
// DELETE =>

// GET /users =>
// POST /users =>

// Stateful - Stateless

// Cabeçalhos (Req, Res) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
    .setHeader('Content-Type', 'application/json')

    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'john@doe',
    })

    return res.writeEad(201).end('Criação de usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)