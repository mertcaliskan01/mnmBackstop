module.exports = async (page, scenario, vp) => {

    
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Title_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Description_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Type_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_SelectedUserTypeToSportIds_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Capacity_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_MaxPerUser_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_CurrencyTypeId_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_StartDate_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_EarlyStartDate_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_LateStartDate_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_EarlyEndDate_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_LateEndDate_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Fee_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_EarlyFee_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_LateFee_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_EndDate_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventTicket_Visible_switch_component_chk"]').click())
    await page.waitFor(2000);

    
        
};