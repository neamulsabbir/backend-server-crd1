
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

/* 
practice2
Su4feNlwLO8RhUbV
*/


const uri = "mongodb+srv://practice2:Su4feNlwLO8RhUbV@cluster0.ivmjea7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    const userCollection = client.db("Practice2").collection('Users')

    app.get('/users', async (req,res) => {
      const query = {};
      const cursor = userCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })

    app.post('/users', async (req,res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser)
      newUser.id = result.insertedId;
      res.send(newUser)
    })

    app.delete('/users/:id', async (req,res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)}
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })
  } 
  finally {
    
  }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send("users")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// const express = require('express')
// const cors = require('cors')
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express()
// const port = process.env.PORT || 5000

// app.use(cors())
// app.use(express.json())

// const users =[
//   {id: 1, name: "Sabbir"},
//   {id: 2, name: "Neamul"},
//   {id: 3, name: "Kabir"}
// ]

// /* 
// practice
// 2YvGT3i13OhzH0WP 
// */

// const uri = "mongodb+srv://practice:2YvGT3i13OhzH0WP@cluster0.ivmjea7.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
//   try {

//     const userCollection = client.db("Practice").collection("User")
//     // Find operation to load data start
//     app.get('/users', async (req,res) => {
//       const cursor = userCollection.find({});
//       const user = await cursor.toArray()
//       res.send(user)
//     })
//     // Find operation to load data end


//     // C create data start
//     app.post('/users', async (req,res) => {
//       const newUsers = req.body;
//       const result = await userCollection.insertOne(newUsers);
//       newUsers.id = result.insertedId;
//       res.send(newUsers)
//     })
//     // C create data end

//   } 
//   finally {
    
//   }
// }
// run().catch(err => console.log(err));


// app.get('/users', (req,res) => {
//   res.send(users)
// })

// /* app.post('/users', (req,res) => {
//   const newUsers = req.body;
//   // console.log(req.body);
//   newUsers.id = users.length + 1;
//   users.push(newUsers)
//   console.log(newUsers)
//   res.send(newUsers)
// })
//  */
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })