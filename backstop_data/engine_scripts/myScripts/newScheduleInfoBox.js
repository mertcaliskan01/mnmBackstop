module.exports = async (page, scenario, vp) => {

    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventSchedule_Name_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventSchedule_ScheduleType_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventSchedule_EventVenueId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventSchedule_StartDateAndTime_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventSchedule_EndDateAndTime_infoBox"]').click())

    await page.waitFor(2000);

};