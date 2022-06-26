// html page template
const template = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>E Corp Team Site</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
      </head>
      <body>
        <header class = "container">
          <div class = "flex box justify-center my-team">
            <h1> This is E Corp's team info site </h1>
          </div>
        </header>
        <main class = "container">
        </main>
      </body>
    </html>
  `
}

module.exports = template;