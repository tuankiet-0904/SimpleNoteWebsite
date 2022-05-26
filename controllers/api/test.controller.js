const {getListTest, getTestById, addNewTest, updateTest, deleteTestById} = require("../CRUD/test"); 
const {getNoteById} = require("../CRUD/note"); 
const {getUserInfoByUserId} = require("../CRUD/user_info");
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
        if(!req.params.id){
            return res.status(404).json({success: false, message: "Test id not found"});
        }
        const test = await getTestById(req.params.id);
        if(!test) 
            return res.status(404).json({success: false, message: "Test not found"});
        res.json({success:true, test});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
// cho findall qua crud
async function showNoteByCategory(req, res){
    const {category_id} = req.body;
    try {
        if(!category_id) return res.json({success:false, message: "Category id not found"});
        const category = await getCategoryById(category_id);
        if(!category) return res.json({success: false, message: "Category not found"});
        const listNote = await Note.findAll({where: {category_id}});
        return res.json({success:true, listNote});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}
async function create(req, res){
    const { user_id, name, note_ids } = req.body;
    try {
        if(!user_id || !name || !note_ids){
            return res.json({success:false, message: "Bad request"});
        }
        const user = await getUserInfoByUserId(user_id);
        let list = JSON.parse(JSON.stringify(note_ids));
        if(!user) res.json({success:false, message:"User not found"});
        for(var i=0;i<list.length;i++){
            if(!list[i]) return res.json({success:false, message: "Note id not found"});
            const note = await getNoteById(list[i]);
            if(!note)
                return res.json({success:false, message: "Note not found"});
        }
        list = list.sort(() => Math.random() - 0.5)
        randomNote_ids = JSON.stringify(list);

        const test = {
            user_id: user_id,
            name: name,
            note_ids: randomNote_ids,
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
    const {keyword, note_id, test_id} = req.body;
    try {
        
        if(!keyword || !note_id || !test_id)
        return res.json({success:false, message: "Bad request question"});
        const note = await getNoteById({where: {id: note_id}});
        if(!note) return res.json({success:false, message: "Note not found"});
        const test = await getTestById(test_id);
        if(!test) return res.json({success:false, message:"Test not found"});
        var list = JSON.parse(test.note_ids);
        var lengthOfTest = list.length;
        if (!list.includes(note_id))
            return res.json({success:false, message:"Note not found in test"});
        if(note.keyword == keyword)
            test.accuracy+=1/lengthOfTest;
        var newNote = null;
        for(var i=0;i<lengthOfTest;i++){
            if(list[i]==note_id && i < lengthOfTest-1){
                newNote = await getNoteById({where:{id: list[i+1]}});
                break;
            }
        }
        await updateTest(test);
        return res.json({success:true, newNote});
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

async function getNoteOfTest(req, res){
    try {
        const note = await getNoteById(req.params.note_id);
        if(!note) return res.json({success:false, message:"note not found"})
        const test = await getTestById(req.params.test_id);
        if(!test) return res.json({success:false, message:"test not found"})
        list = JSON.parse(JSON.parse(test.note_ids));
        if (!list.includes(req.params.note_id))
            return res.json({success:false, message:"Note not found in test"});
        return res.json({success:true, note});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}

async function getFirstNoteByTestId(req, res){
    try {
        const test = await getTestById(req.params.test_id);
        if(!test) return res.status(404).json({success:false, message:"test not found"})
        list = JSON.parse(JSON.parse(test.note_ids));
        if(!list[0]) return res.status(404).json({success:false, message:"Note not found in test"});
        const note = await getNoteById(list[0]);
        if (!note)
            return res.status(404).json({success:false, message:"Note not found"});
        return res.json({success:true, note});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}

module.exports = {
    index: index,
    showById: showById,
    create: create,
    update: update,
    destroy: destroy,
    getNoteOfTest: getNoteOfTest,
    getNoteByCategory: showNoteByCategory,
    getFirstNoteByTestId: getFirstNoteByTestId
};