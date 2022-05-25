const {getListText, getTestById, addNewTest, updateTest, deleteTestById} = require("../CRUD/test"); 
const {showByUserId} = require("../CRUD/user_info");

async function index(req, res){
    try {
        const listTest = await getListText();
        res.json({success:true, listTest});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
async function showById(req, res){
    try {
        const test = await getTestById(req.params.id);
        res.json({success:true, test});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
async function create(req, res){
    const {user_id, name, note_ids} = req.body;
    try {
        const user = await showByUserId(user_id);
        if(!user) res.status(404).json({success:false, message:"User not found"});
        const test = {
            user_id: user_id,
            name: name,
            note_ids: note_ids,
            accuracy: 0,
            duration: 0
        };
    } catch (error) {
        
    }
}
async function update(req, res){
    try {
        
    } catch (error) {
        
    }
}
async function destroy(req, res){
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    index: index,
    showById: showById,
    create: create,
    update: update,
    destroy: destroy
};