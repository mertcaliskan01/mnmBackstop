module.exports = async (page, scenario, vp) => {

    
    var a = await page.evaluate(() => document.readyState)
    //console.log("PAGE LOADING STATUS => "+a)

    while(a!="complete"){
        await page.waitFor(200);
        a = await page.evaluate(() => document.readyState);
        //console.log("Login Waited");
    };
    try {
        await page.goto('https://dev-new.mynextmatch.com/Home/Dashboard');
    } catch (error) {
        //console.log("LoginPage");
        await page.goto('https://dev-new.mynextmatch.com/Home/Dashboard');
    }

    await page.type('#Email', 'admin@mynextmatch.com')
    await page.type('#Password', 'Mynextmatch2018?.com')
    await page.click('#login-button')

    var a = await page.evaluate(() => document.readyState)
    console.log("BACKSTOP LOADING STATUS => "+a)

    while(a!="complete"){
        await page.waitFor(200);
        a = await page.evaluate(() => document.readyState);
        //console.log("Backstop Waited");
    };
    // try {
    //     await page.waitForNavigation();
    // } catch (error) {
    //     console.log("Timeout Error Occur");
    //     await page.reload();
    //     await page.waitFor(3000);
    // }
};
  