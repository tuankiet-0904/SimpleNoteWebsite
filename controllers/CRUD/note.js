const Note = require(process.cwd() + '/models/index').Note;

async function getListNote(){
    return Note.findAll();
}

async function getNoteById(note_id){
    return Note.findOne({where:{id: note_id}});
}
async function getNotesByCategory(category_id){
    const listNote = await getListNote();
    const newListNote = listNote.map(item => {
        for(var i=0;i<item.category_ids.length;i++){
            if(item.category_ids[i]==category_id){
                return item;
            }
        }
    });
    return newListNote;
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
module.exports = {
    getListNote: getListNote,
    getNoteById: getNoteById,
    getNotesByCategory: getNotesByCategory
}