const generateManager = mgrText => {
    return `
    <p>${mgrText}</p>
    `;
}

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
    <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">E Corp's Evil Employees</h1>
      </div>
    </header>
    <main class="container my-5">
    </main>
  </body>
  </html>
  `;
};