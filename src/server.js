const needle = require('needle');
const cheerio = require('cheerio');

const url = 'https://market.homecredit.ru/category/igrovye-konsoli';

needle('get', url)
    .then(resp => cheerio.load(resp.body))
    .then($ => {
        let products = [];

        $('[class*=productItemComponent]').map((i, element) => {
            products[i] = {
                id: i,
                title: $(element).find('[class*=name]').text(),
                price: $(element).find('[class*=fullCost]').text(),
                cover: $(element).find('[class*=_img_]').attr('src'),
            }
        })
        return products;
    })
    .then((prod) => console.log(prod))
    .catch(error => console.error(error))
