const Node = require(process.cwd() + '/models/index').Node;

async function getListNode(){
    return Node.findAll();
}

async function getNodeById(node_id){
    return Node.findOne({where:{id: node_id}})
}
async function getNodesByCategory(category_id){
    const listNode = await getListNode();
    const newListNode = listNode.map(item => {
        for(var i=0;i<item.category_ids.length;i++){
            if(item.category_ids[i]==category_id){
                return item;
            }
        }
    });
    return newListNode;
}

async function showByCategory(req, res){
    const {category_id} = req.body;
    try {
        if(!category_id) return res.json({success:false, message: "Category id not found"});
        const category = getCategoryById(category_id);
        if(!category) return res.json({success: false, message: "Category not found"});
        
    } catch (error) {
        
    }
}
module.export={
    getListNode: getListNode,
    getNodeById: getNodeById,
    getNodesByCategory: getNodesByCategory
}