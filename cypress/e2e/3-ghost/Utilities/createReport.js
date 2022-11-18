const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");

const { browsers, options } = config;

class CreateReport {
  constructor(n) {
    this.n = n;
    this.folderAfter = "";
    this.folderBefore = "";
    this.nameModule="";
  }
  async executeTest(n, folderAfter, folderBefore, nameModule) {
    this.folderAfter = folderAfter;
    this.folderBefore = folderBefore;
    this.nameModule= nameModule;
    let myReporth=""


    for (let i = 1; i <= n; i++) {
      if (browsers.length === 0) {
        return;
      }
      let resultInfo = {};
      let datetime = new Date().toISOString().replace(/:/g, ".");
      for (let b of browsers) {
        if (!b in ["chromium", "webkit", "firefox"]) {
          return;
        }

        
        let fileAfterOrigin = `./cypress/screenshots/${this.folderAfter}/${i}a.png`;
        let fileBeforeOrigin = `./cypress/screenshots/${this.folderBefore}/${i}a.png`;
        //let fileAfterDestination = `./cypress/screenshots/Report/${i}a.png`;
        ///let fileBeforeDestination = `./cypress/screenshots/Report/${i}a.png`;
        let MyfileComparative=`./cypress/screenshots/compare-${i}.png`;
        let reportHTML= this.createReport(datetime, resultInfo, nameModule, i, n, `${this.folderAfter}/${i}a.png`,`${this.folderBefore}/${i}a.png`, `compare-${i}.png`);
        let DirReport= `./cypress/screenshots/report${i}.html`;
        let MyRepository=`./cypress/screenshots`;
        await cy
          .task("comparativeFile", {
            file2: fileAfterOrigin,
            file1: fileBeforeOrigin,
            options: options,
            fileComparative:MyfileComparative,
            i,
            HTML:reportHTML,
            DirReport,
            DirectoryRepository:MyRepository
          })
          .then((p) => {
            myReporth=`${p}\\screenshots\\report1.html`;
          
           
          });

      }
    }
   
    return myReporth;
  }


  browser(b, info, i, fileAfter, fileBefore, MyfileComparative) {
    return `
   
    <div class="card" >
    <div class="card-header text-white bg-primary mb-3">
    <h2>Browser: ${b}</h2>  Image 1
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col sm-6">
            <img class="img2" src="${fileBefore}">
            </div>
            <div class="col sm-6">
            <img class="img2" src="${fileAfter}" id="testImage" label="Test">
            </div>
        </div>  
   </div>
  
   </div>
    <br>
    <div class="card" >
    <div class="card-header text-white bg-primary mb-3">
    <h2>Diference
    </div>
    <div class="card-body">
        <div class="row">
        <div class="col sm-12">
         <h3>Diffence</h3>
        <img class="imgfull" src="${MyfileComparative}" id="diffImage" label="Diff">
        </div>
        </div>
  
    </div>
  
  
    
  
    `;
  }
  
    createReport(datetime, resInfo, nameModule,i, n, fileAfter, fileBefore, MyfileComparative) {
    let links=this.enlaces(n);
    return `
      <html>
          <head>
              <title> Group number 13</title>
              <link href="others/index.css" type="text/css" rel="stylesheet">
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
              <script src="others/myComparator.js"></script>
              <link href="others/sidebars.css" rel="stylesheet">
          </head>
          
   
          <body>
        <div class="container-fluid">
        <!--
        here
      -->
        
      <main class="d-flex flex-nowrap">
      <h1 class="visually-hidden">Steps</h1>
    
      <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
        <a href="InicioReport.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span class="fs-4">Comporative report your profile</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          ${links}
     
        </ul>
        <hr>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://toppng.com//public/uploads/preview/oku-blackdragon-ball-super-freetoedit-goku-black-to-color-11562923499iubjfiashf.png" alt="" width="32" height="32" class="rounded-circle me-2">
            <strong>Andes Unviversit Group 13 </strong>
          </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="#">Camilo Andres Guevara Triana</a></li>
            <li><a class="dropdown-item" href="#">Yonathan Beltran Romero</a></li>
            
          </ul>
          
        </div>
      </div>
      <div class="b-example-divider b-example-vr"></div>  
      <div class="d-flex flex-column flex-shrink-0"   width=1200" height="1200px"  >
  
        <div class="card" >
            <div class="card-header text-white bg-primary mb-3">
                <h1>Report for  ${nameModule} </h1><br>
                <p>Executed: ${datetime}</p>
            </div>
            <div class="card-body">
            <div class="mainSection">
            <div id="one" class="bal-container">
                   <div class="bal-after">
                       <img src="${fileAfter}">
                       <div class="bal-afterPosition afterLabel">
                           After
                       </div>
                   </div>
                   <div class="bal-before">
                       <div class="bal-before-inset">
                           <img src="${fileBefore}">
                           <div class="bal-beforePosition beforeLabel">
                               Before
                           </div>
                       </div>
                   </div>
                   <div class="bal-handle">
                       <span class=" handle-left-arrow"></span>
                       <span class="handle-right-arrow"></span>
                   </div>
               </div>
               </div>
            </div
            <!--
              here
            -->
  
  
            </div>
       ${config.browsers.map((b) => this.browser(b, resInfo[b], i,fileAfter, fileBefore, MyfileComparative))}
       </div>	
  
       </main>
  </div>
       <script>
       new BeforeAfter({
           id: '#one'
       });
     
   </script>
   <script src="sidebars.js"></script>
  
   </body>
      </html>`;
  }
  
   enlaces(n)
  {
  
    let links="";
    for(let i=1; i<=n;i++)
    {
      links=`${links}
      <li>
      <a href="report${i}.html" class="nav-link text-white">
        Image ${i}
      </a>
    </li>
      `;
  
    }
    return links;
  }
  


}
module.exports = {
  CreateReport,
};
