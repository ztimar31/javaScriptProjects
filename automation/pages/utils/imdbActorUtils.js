require('../imdbActorPage')

module.exports = function(browser){ 
    const fs = require('fs');
    const filePath = 'log/bonus_exercise.txt';
    const actorPage = browser.page.imdbActorPage();

    this.closeBrowser = function (){
        browser
            .end(()=>{
                browser.verify.ok(true, 'Browser closed without error.');
        })
    };

    this.appendTXT = async function (header){
        fs.appendFileSync(filePath, header, (err) => {
            if(err) throw err;
        });
    };
    
    this.isElementPresent = function(element){
        browser
            .expect.element(element).to.be.present;
    };

    this.openInNewWindow = function(element){
        browser
            .moveToElement(element,1,1, ()=>{
                browser
                    .mouseButtonClick(1, ()=>{
                        browser.verify.ok(true, 'Middle click worked fine.');
                    });
            });
    };
    this.clickOnRatings = function(){
        actorPage
            .click('@directToMovies', () =>{
                browser.verify.ok(true, 'Click was working on selector');
            });
    };
    

    return this;
}