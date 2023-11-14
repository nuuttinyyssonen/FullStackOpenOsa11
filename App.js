const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('build'))

app.get('/version', (req, res) => {
  res.send('test_branch_second')
})
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})