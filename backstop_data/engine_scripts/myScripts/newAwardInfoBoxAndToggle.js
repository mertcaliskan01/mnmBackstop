module.exports = async (page, scenario, vp) => {


    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventAward_Name_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventAward_EventAwardIconId_infoBox"]').click());
    await page.evaluate(
        () => document.querySelector('[data-mnm-selector="EventAward_Status_switch_component_chk"]').click());
    
    await page.waitFor(2000);


        
};