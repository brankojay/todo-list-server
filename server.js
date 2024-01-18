const express = require('express')
const cors = require('cors')
const { todo } = require('node:test')
const app = express()
const port = 8080

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const todoList = [
    {
      title: 'Todo Titel 1 Update',
      dueDate: '2023-12-01',
      note: 'Lorem ipsum....',
    },
    {
      title: 'Todo Titel 2 From Server',
      dueDate: '2023-12-01',
      note: 'Lorem ipsum....sdfsdfsdf',
    },
    {
      title: 'Todo Titel 3',
      dueDate: '2023-12-01',
      note: 'Lorem ipsum....2313123123',
    },
  ];

app.get('/todo', (req, res) => {
    res.send(todoList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
