const fs = require('fs')
const path = require('path')

const itemsPath = path.join(__dirname, 'items.json')


//get all items

const getAllItems = (req, res) => {
    const items = fs.readFileSync(itemsPath)
    res.status(200).send(items)
    
}

//get one item

const getOneItem = (req, res) => {
    const allItems = fs.readFileSync(itemsPath)
    const items = JSON.parse(allItems)
    const itemId = req.params.id
    const findItem = items.find((item) => {
        return item.id == parseInt(itemId)
    })
    if (!findItem){
      res.status(404).send('item not found')  
    }
    res.status(200).json(findItem)
}


// create item

const createOneItem = (req, res) => {

    const itemsDb = fs.readFileSync(itemsPath)
    const items = JSON.parse(itemsDb)

    const itemsNewPost= req.body
    console.log(req.body)


    const lastPostId = items[items.length - 1].id
    const newPostId = lastPostId + 1;
    const postWithId = {...itemsNewPost, id: newPostId}
    items.push(postWithId)
    console.log(postWithId)

    fs.writeFile(itemsPath, JSON.stringify(items), (err) => {
        if (err) {
            res.status(500)
        }
        res.status(200).json(items)
        console.log(items)
    })

}


//update item 

const updateItem = (req, res) => {

    const itemsDb = fs.readFileSync(itemsPath)
    const items = JSON.parse(itemsDb)

    const updateItem = req.body
    const id = req.params.id

    

    const gottenIndex = items.findIndex(item => item.id == parseInt(id))

    if (gottenIndex == -1) {
        res.status(404).send('unknown Id')
    }
        
    items[gottenIndex] = { ...items[gottenIndex], ...updateItem }
    console.log()


   fs.writeFile(itemsPath, JSON.stringify(items), (err) => {
        if (err) {
            res.status(500)
        }
       res.status(200).json(items[gottenIndex])
       console.log(items)

    
    })

}


//delete item

const deleteItems = (req, res) => {

    const itemsDb = fs.readFileSync(itemsPath)
    const items = JSON.parse(itemsDb)

    const id = req.params.id

    

    const gottenIndex = items.findIndex(item => item.id == parseInt(id))

    if (gottenIndex == -1) {
        res.status(404).send('unknown Id')
    }
    else {
        items.splice(gottenIndex, 1)
    }
        
  


   fs.writeFile(itemsPath, JSON.stringify(items), (err) => {
        if (err) {
            res.status(500).send(`internal server error`)
        }
       res.status(200).send(`item located at id:${id} has been deleted`)
       

    
    })





}



module.exports = {
    getAllItems,
    getOneItem,
    createOneItem,
    updateItem,
    deleteItems
}






  

