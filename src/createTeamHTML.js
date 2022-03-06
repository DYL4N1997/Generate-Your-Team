
const createManager = (manager) => {
    console.log(manager);
    return `
    <div class="flex justify-center m-5 expand border-2">
        <div class="bg-white max-w-sm p-5 card-min-width">
        <div class="flex justify-center pb-6">
        <img
            class="content-center"
            src="...."
            alt="
        />
        </div>
        </div>
        <h5 class="text-black-800 text-l mb-1.8 text-center font-bold">
            ${manager.name}
        </h5>
        <p class="text-black  bg-
`;
};




// String literal to Generate the Team Page
const genTeamPage = function () {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
</head>
<body class="bg-purple 600">
    <div class="flex content-center mt-26 m-22">
    <h1 class="text 8xl font-sans">Meet The Team!</h1>
    </div>

    </div class="flex-column content-center w-96>
        <h2 class="text-6xl font-sans">
        We are a team that can help you build an online presence.
        </h2>
    </div>

    <div class ="flex flex-wrap justify-around my-22 mx-22 lg:m-46">
    </div>
    
</body>
</html>

`;
};

module.exports = createTeamHTML;