module.exports = async (page, scenario, vp) => {

    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_UserId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_OrganisationHierarchyId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_UserTypeToUserId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_SportDivisionId_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_EventBracketId_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_EventTicketId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_Fee_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_Status_infoBox"]').click())
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipant_AppliedDate_infoBox"]').click())
    await page.waitFor(2000);

};