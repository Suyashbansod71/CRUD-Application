const express = require("express");
const cors = require("cors");
const colors = require('colors');
const User = require("./config");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", async(req, res) => {

     const snapshot = await User.get();
    
     const list = snapshot.docs.map((doc) =>({id:doc.id, ...doc.data()}));
     res.send(list);
});


app.post("/create", async(req, res) =>{

     const data = req.body;
     await User.add({ data });
     res.send({message:"User Added"});
});


// app.put("/update", async (req, res) => {
//     const id = req.body.id;
//   const dataToUpdate = req.body;

//   // Remove the id field from the dataToUpdate object as we don't want to update it
//   delete dataToUpdate.id;

//   try {
//     // Check if the user with the given ID exists in the database
//     const userDoc = await User.doc(id).get();
//     if (!userDoc.exists) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Update the user data with the new data
//     await User.doc(id).update(dataToUpdate);

//     res.send({ msg: "Updated" });
//   } catch (error) {
//     console.log(error);
   
//   }
//   });




  app.put("/update", async (req, res) => {
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.send({ msg: "Updated" });
  });
  



  app.post("/delete", async (req, res) => {
    const id = req.body.id;
    await User.doc(id).delete();
    res.send({ msg: "Deleted" });
  });


const PORT = process.env.PORT || 4600;

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
