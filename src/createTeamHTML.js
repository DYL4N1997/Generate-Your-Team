
const createManager = (manager) => {
    console.log(manager);
    return `

`;
};




// String literal to Generate the Team Page
const genTeamPage = function () {
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
        <div class="flex-col text-center">
          <h2 class="text-5xl font-bold mb-5">
            Meet our team of <span>${number}</span> creatives that will build your desired application. 
          </h2>
        </div>
    
        <!-- card container for employees -->
        <div class="flex justify-around flex-wrap my-18 mx-18 lg:m-38">
            ${cards}
        </div>
        </body>
    </html>  
`;
};

module.exports = createTeamHTML;