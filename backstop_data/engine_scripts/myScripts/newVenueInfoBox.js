module.exports = async (page, scenario, vp) => {



    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Name_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Description_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_SportToCompetitionAreaId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Areas_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Autocomplete_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_Address_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_PostCode_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_City_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_State_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventVenue_CountryCode_infoBox"]').click())
    await page.waitFor(2000);


        
};