module.exports = async (page, scenario, vp) => {


    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_SportDivisionIds_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_Type_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_MatchTime_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_MaxParticipantCount_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_IsCheckIn_switch_component_chk"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_IsWeighedIn_switch_component_chk"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_IsUseNationalOrOrganisationRestriction_switch_component_chk"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventBracketMultiple_IsUseSeedRestriction_switch_component_chk"]').click())
    await page.waitFor(2000);


        
};