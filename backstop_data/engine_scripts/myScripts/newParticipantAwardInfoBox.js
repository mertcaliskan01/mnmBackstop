module.exports = async (page, scenario, vp) => {


    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipantAward_EventAwardId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipantAward_EventBracketId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventParticipantAward_EventParticipantId_infoBox"]').click());
    
    await page.waitFor(2000);

};