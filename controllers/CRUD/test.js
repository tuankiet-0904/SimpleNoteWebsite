const Test = require(process.cwd() + '/models/index').Test;

async function index() {
    return Test.findAll();
}

async function showByTestId(test_id) {
    return Test.findOne({ where: { id: test_id } });
}

async function create(newTest) {
    return Test.create(newTest);
}

async function update(updateTest, test_id) {
    return Test.update(updateTest, { where: { id: test_id } })
}

async function destroy(test_id) {
    return Test.destroy({ where: { id: test_id } })
}

module.exports = {
    getListText: index,
    getTestById: showByTestId,
    addNewTest: create,
    updateTest: update,
    deleteTestById: destroy,
}
