// Create manager
const createManager = (manager) => {
    console.log(manager);
    return `
    <div class="flex justify-center m-5">
    <div class="bg-white max-w-sm p-6 card-min-width">
      <div class="flex justify-center pb-5">
        <div class="card-square-pink">
          <img
            class="justify-center"
            src="....."
            alt=""
          />
        </div>
      </div>
      <h5 class="text-black-700 text-xl font-bold mb-2 text-center">
        ${manager.name}
      </h5>
      <p
        class="text-black bg-blue-400 font-bold mx-5 px-7 text-center"
      >
        Manager
      </p>
      <!-- container -->
      <div class="pt-4">
        <!-- id -->
        <div class="flex justify-between my-2">
          <p class="font-bold text-base">ID:</p>
          <p class="font-bold text-black-700 text-sm pl-8">${manager.id}</p>
        </div>
        <!-- email -->
        <div class="flex justify-between my-2">
          <p class="font-bold text-base">Email:</p>
          <p class="font-bold text-black-700 text-sm pl-8">
          <a href="mailto:${manager.email}">${manager.email}</a>
          </p>
        </div>
        <!-- office number -->
        <div class="flex justify-between my-2">
          <p class="font-bold text-base">Office Num:</p>
          <p class="font-bold text-black-700 text-sm pl-8">${manager.officeNumber}</p>
        </div>
      </div>
    </div>
    </div>
    `;
};

const createEngineer = (engineer) => {
    return `
    <div class="flex justify-center m-5">
        <div class="bg-white max-w-sm p-6 card-min-width">
          <div class="flex justify-center pb-5">
            <div class="card-square-pink">
              <img
                class="justify-center"
                src="....."
                alt=""
              />
            </div>
          </div>
          <h5 class="text-black-700 text-xl font-bold mb-2 text-center">
            ${engineer.name}
          </h5>
          <p
            class="text-black bg-purple-400 font-bold mx-5 px-7 text-center"
          >
            Engineer
          </p>
          <!-- container -->
          <div class="pt-4">
            <!-- id -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">ID:</p>
              <p class="font-bold text-black-700 text-sm pl-8">${engineer.id}</p>
            </div>
            <!-- email -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">Email:</p>
              <p class="font-bold text-black-700 text-sm pl-8">
              <a href="mailto:${engineer.email}">${engineer.email}</a>
              </p>
            </div>
            <!-- GitHub Link -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">GitHub:</p>
              <p class="font-bold text-black-700 text-sm pl-8">
                  <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                </p>
            </div>
          </div>
        </div>
      </div>  
    `;
};

const createIntern = (intern) => {
    return `
    <div class="flex justify-center m-5">
        <div class="bg-white max-w-sm p-6 card-min-width">
          <div class="flex justify-center pb-5">
            <div class="card-square-pink">
              <img
                class="justify-center"
                src="....."
                alt=""
              />
            </div>
          </div>
          <h5 class="text-black-700 text-xl font-bold mb-2 text-center">
            ${intern.name}
          </h5>
          <p
            class="text-black bg-pink-400 font-bold mx-5 px-7 text-center"
          >
            Intern
          </p>
          <!-- container -->
          <div class="pt-4">
            <!-- id -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">ID:</p>
              <p class="font-bold text-black-700 text-sm pl-8">${intern.id}</p>
            </div>
            <!-- email -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">Email:</p>
              <p class="font-bold text-black-700 text-sm pl-8">
              <a href="mailto:${intern.email}">${intern.email}</a>
              </p>
            </div>
            <!-- office number -->
            <div class="flex justify-between my-2">
              <p class="font-bold text-base">School:</p>
              <p class="font-bold text-black-700 text-sm pl-8">
                  ${intern.school}
                </p>
            </div>
          </div>
        </div>
      </div>
    `;
};

teamGenHTML = (data) => {
  pageArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    
    if (role === "Manager") {
      const managerCard = createManager(employee);
      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = createEngineer(employee);
      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = createIntern(employee);
      pageArray.push(internCard);
    }
}

const employeeCards = pageArray.join("");

const genTeam = genTeamPage(employeeCards);
return genTeam;
};

// String literal to Generate the Team Page
const genTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body class="bg-purple-300">
        <!-- insert here -->
        <div class="flex justify-center mt-22 m-20">
          <h1 class="text-8xl font-sans">Meet The Team!</h1>
        </div>
    
        <!-- card container for employees -->
        <div class="flex justify-around flex-wrap my-18 mx-18 lg:m-38">
            ${employeeCards}
        </div>
        </body>
    </html>  
`;
};

module.exports = teamGenHTML;

