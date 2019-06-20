module.exports = async (page, scenario, vp) => {


    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_EventBracketId_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_BracketRoundLevel_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_MatchIds_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_EventScheduleId_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_StartDateAndTime_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventMatch_EventVenueToAreaId_infoBox"]').click())
    await page.waitFor(2000);

};