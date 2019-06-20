module.exports = async (page, scenario, vp) => {



    var buttons = await page.evaluate(
        () => document.getElementsByClassName('dx-column-indicators'))

    for(var i=0; i< buttons.length; i++){
        buttons[i].click();
    }

    await page.waitFor(2000);
};