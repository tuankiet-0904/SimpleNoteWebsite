const {getListTest, getTestById, addNewTest, updateTest, deleteTestById, getNode} = require("../CRUD/test"); 
const {showByUserId} = require("../CRUD/user_info");
const {getCategoryById} = require("../CRUD/category");

async function index(req, res){
    try {
        const listTest = await getListTest();
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
async function showNodeByCategory(req, res){
    const {category_id} = req.body;
    try {
        if(!category_id) return res.json({success:false, message: "Category id not found"});
        const category = await getCategoryById(category_id);
        if(!category) return res.json({success: false, message: "Category not found"});
        const listNode = await Node.findAll({where: {category_id}});
        return res.json({success:true, listNode});
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
        for(var i=0;i<note_ids.length;i++){
            const node = await getNode(note_ids[i]);
            if(!node)
                res.status(404).json({success:false, message: "Node not found"});
        }
        let list = JSON.parse(note_ids);
        list = list.sort(() => Math.random() - 0.5)
        note_ids = JSON.stringify(list);

        const test = {
            user_id: user_id,
            name: name,
            note_ids: note_ids,
            accuracy: 0,
            duration: 0,
        };
        await addNewTest(test);
        return res.json({success:true, test});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
async function update(req, res){
    const {keyword, node_id, test_id} = req.body;
    try {
        
        if(!keyword || !node_id || !test_id)
        return res.json({success:false, message: "Bad request question"});
        const node = await getNode({where: {id: node_id}});
        if(!node) return res.json({success:false, message: "Node not found"});
        const test = await getTestById(test_id);
        if(!test) return res.json({success:false, message:"Test not found"});
        var list = JSON.parse(test.note_ids);
        var lengthOfTest = list.length;
        if (!(node_id in list))
            return res.json({success:false, message:"Node not found in test"});
        if(node.keyword == keyword)
            test.accuracy+=1/lengthOfTest;
        var newNode = null;
        for(var i=0;i<lengthOfTest;i++){
            if(list[i]==node_id && i < lengthOfTest-1){
                newNode = await getNode({where:{id: list[i+1]}});
                break;
            }
        }
        await updateTest(test);
        return res.json({success:true, newNode});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
async function destroy(req, res){
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}

async function getNodeOfTest(node_id, test_id){
    try {
        const node = await getNode(node_id);
        if(!node) return res.json({success:false, message:"node not fount"})
        const test = await getTestById(test_id);
        if(!test) return res.json({success:false, message:"test not fount"})
        return res.json({success:true, node});
    } catch (error) {
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}

module.exports = {
    index: index,
    showById: showById,
    create: create,
    update: update,
    destroy: destroy,
    getNodeOfTest: getNodeOfTest
};