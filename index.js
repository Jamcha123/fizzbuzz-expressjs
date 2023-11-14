import express from 'express'; 
import fs from 'fs'; 

const app = express(); 

app.get("/index/:id", (req, res) => {
    const {id} = req.params; 
    if(id % 3 == 0 && id % 5 == 0){
        res.status(200).send({
            "fizzbuzz": id, 
        })
    }
    else if(id % 3 == 0 && id % 5 != 0){
        res.status(200).send({
            "fizz": id, 
        })
    }
    else if (id % 5 == 0 && id % 3 != 0){
        res.status(200).send({
            "buzz": id, 
        })
    }
    else{
        res.status(200).send({
            "nothing": id, 
        })
    }
}).listen(8080, () => console.log("http://127.0.0.1:8080/index/5"))