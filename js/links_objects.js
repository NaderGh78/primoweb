  let all_handler_content = document.getElementById('all_handler_content');

  let about_content = document.getElementById('about_content');

  let products = JSON.parse(localStorage.getItem('products'));

  //show the our projects showcase
  function drawProjectsUi() {

      let projectsUi = products.map((item) => {

          return `  
        <div class="img_handler col-xl-3 col-lg-3 col-sm-6 col-6 p-0" style="background-image: url(images/${item.bgUrl});">
            <div class="gallery_desc">
                <a href="#" class="section_target" data-scroll='8' onclick="showProjPage(${item.id})">
                    <i class="icofont-plus"></i>
                </a>
                <h5 class="mt-3 mb-0">${item.projectName}</h5>
                <span class="h2 text-dark" style="font-family: Opificio_regular;cursor:pointer">
                    <a href="${item.linkUrl}" target="_blank" class="h5 font-weight-bold">
                        ${item.linkName}
                    </a>
                </span>
            </div>
        </div>   
       `

      });

      all_handler_content.innerHTML = projectsUi.join("");

  }

  drawProjectsUi();

  /*=================================================================================*/

  // show the every proj page,when click on + icon 
  function showProjPage(id) {

      //filter the project by it id
      let chosenProject = products.find((item) => item.id === id);

      console.log(chosenProject);

      about_content.innerHTML = `

       <div class="row m-0">
            <div class="col-md-6 col-6 left_content p-0" style="background-image: url('images/${chosenProject.bgUrl}');"></div>

            <div class="col-md-6 col-6 right_content p-0">
                <div class="col-lg-12 right_content_bott">
                    <img src="images/${chosenProject.logoImg}" alt="">
                </div>
                <div class="col-lg-12 right_content_top d-flex flex-column justify-content-center align-items-center p-0" style="background-color: ${chosenProject.bg_color}">
                    <div class="text-center" style="width: 67%;">
                        <h3 class="h4 text-white">${chosenProject.projectName}</h3>
                        <p class="mb-4 text-center h5 text-white" style="font-family: Opificio_regular;">
                            ${chosenProject.proj_desc}
                        </p>
                        <span class="h2 text-secondary" style="font-family: Opificio_regular;cursor:pointer">
                            <a href="${chosenProject.linkUrl}" target="_blank" class="text-white h5 font-weight-bold">
                                ${chosenProject.linkName}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>  
        `
  }
