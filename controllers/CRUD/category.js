const Category = require("../../models/category");

async function show(category_id){
    return await Category.findOne({where:{id: category_id}});
}

module.export = {
    getCategoryById: show,
}