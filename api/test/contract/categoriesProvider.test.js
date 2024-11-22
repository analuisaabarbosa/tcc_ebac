const { reporter, flow } = require('pactum');
const pf = require('pactum-flow-plugin');
const { faker } = require('@faker-js/faker');

let token;

function addFlowReporter() {

    pf.config.url = 'http://localhost:8080';
    pf.config.projectId = 'lojaebac_api_categories';
    pf.config.projectName = 'Loja Ebac Api - Categories';
    pf.config.version = '1.0.0';
    pf.config.username = 'scanner';
    pf.config.password = 'scanner';
    reporter.add(pf.reporter);

}

before(async () => {

    addFlowReporter();

    token = await flow('Login')
        .post('http://lojaebac.ebaconline.art.br/public/authUser')
        .withBody({
            email: "admin@admin",
            password: "admin123"
        })
        .returns('data.token');

});

after(async () => {

    await reporter.end();

});


it('API - Should add a category', async () => {

    const newCategory = faker.lorem.word()

    await flow('Add category')
        .post('http://lojaebac.ebaconline.art.br/api/addCategory')
        .withHeaders('Authorization', token)
        .withJson({
            "name": newCategory,
            "photo": 'https://www.zipmaster.com/wpcontent/uploads/2022/04/Reusable-Cloth-Shopping-Bags-RainbowPack-200-Case-Reusable-Bags-B26-061-3-1000x1000.jpg.webp'
        })
        .expectStatus(200)
        .expectJson('success', true);

});
