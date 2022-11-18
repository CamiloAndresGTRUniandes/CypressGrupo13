const { defineConfig } = require('cypress')
const compareImages = require("resemblejs/compareImages");
const fs = require('fs')

module.exports = defineConfig({
  e2e: { // or components, if you are testing components
    setupNodeEvents(on, config) {
      on('task', {
        createMyReport(name)
        {
           return `${__dirname}${name}` ;
        },

        async comparativeFile({file1, file2, options,i, fileComparative, HTML,DirReport, DirectoryRepository})
        {
          let resultInfo = {};
          
          console.log(`Directory name is ${__dirname}`);
    
          const data = await compareImages(
            fs.readFileSync(file1),
            fs.readFileSync(file2),
            options
          );
          resultInfo[0] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime,
          };
          
         fs.writeFileSync(fileComparative, data.getBuffer());
         fs.writeFileSync(
          DirReport,
          HTML
        );
         return __dirname;
        },

    

      })
    }
  }
})

