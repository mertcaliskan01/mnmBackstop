module.exports = async (page, scenario, vp) => {

    console.log("new venue");

    var a = await page.evaluate(() => document.readyState);
    while(a!="complete"){
        await page.waitFor(200);
        a = await page.evaluate(() => document.readyState);
        console.log("1. new venue waited")
    };

    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Name_textbox"]').value="Mert");
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Description_textbox"]').value="No description");
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Autocomplete_textbox"]').value = "Cage");
    await page.evaluate(
        () => document.querySelector('[class="dx-lookup-field"]').innerText = "Ring")

    var a = await page.evaluate(() => document.readyState);
    while(a!="complete"){
        await page.waitFor(200);
        a = await page.evaluate(() => document.readyState);
        console.log("2. new venue waited")
    };
};