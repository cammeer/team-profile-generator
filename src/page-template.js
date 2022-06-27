// const generateManager = mgrText => {
//     return `
//     <p>${mgrText}</p>
//     `;
// }

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { manager, engineer, intern, ...header } = templateData;

    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>E Corp Employee Site</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body class="m-5">
    <header>
        <div class="jumbotron">
            <h1 class="display-4">E Corp's Evil Employees</h1>
            <p class="lead">View E Corp's employees, roles, and contact information below.</p>
            <hr class="my-4">
            <p>Click to learn about our open positions, if you dare.</p>
            <p class="lead">
                <a class="btn btn-dark btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </header>
    <br>
    <br>
    <main>

        <div class="card-group">
            <div class="card">

                <div class="card-body">
                    <h5 class="card-title font-bold">Darth Vader</h5>
                    <p class="card-text font-italic">E Corp Manager</p>
                    <p>Employee ID#: 2187</p>
                    <p>Office #: Death Star</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Email Mr. Vader</small>
                </div>
            </div>
            <div class="card">

                <div class="card-body">
                    <h5 class="card-title font-bold">Agent Smith</h5>
                    <p class="card-text font-italic">E Corp Engineer</p>
                    <p>Employee ID#: 303</p>
                    <p>GitHub: bluepill</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Email Mr. Anderson</small>
                </div>
            </div>
            <div class="card">

                <div class="card-body">
                    <h5 class="card-title font-bold">Biff Tannen</h5>
                    <p class="card-text font-italic">E Corp Intern</p>
                    <p>Employee ID#: 1937</p>
                    <p>School: Hill Valley</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Email Mr. Tannen</small>
                </div>
            </div>
        </div>


    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
  </html>
  `;
};