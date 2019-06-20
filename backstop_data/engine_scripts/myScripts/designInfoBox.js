module.exports = async (page, scenario, vp) => {

    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventDesign_Phone_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventDesign_Email_infoBox"]').click());

    await page.waitFor(2000);

};