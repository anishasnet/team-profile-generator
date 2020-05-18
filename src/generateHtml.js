const generateHtml = employeeData => {
    const employeeDataArr = employeeData.map(obj => {
        if (obj.role.toLowerCase() == 'manager'){
        return `

<div class = "card">
    <div class = "card-header">
        <h3>${obj.name}</h3>
        <i class="fas fa-mug-hot"><h3 class = "role">${obj.role}</h3></i>
    </div>
    <p>ID: ${obj.id}</p>
    <p>Email: <span><a href = "mailto:${obj.email}">${obj.email}</a></span></p>
    <p>Office Number: ${obj.officeNumber}</p>
</div>


          `;} else if (obj.role.toLowerCase() == 'engineer') {
            return `

<div class = "card">
    <div class = "card-header">
        <h3>${obj.name}</h3>
        <i class="fas fa-glasses"><h3 class = "role">${obj.role}</h3></i>
    </div>
    <p>ID: ${obj.id}</p>
    <p>Email: <span><a href = "mailto:${obj.email}">${obj.email}</a></span></p>
    <p>Github Username: <span><a href = "https://www.github.com/${obj.github}">${obj.github}</a></span></p>
</div>

            `;
          } else if (obj.role.toLowerCase() == 'intern') {
            return `
    
<div class = "card">
    <div class = "card-header">
        <h3>${obj.name}</h3>
        <i class="fas fa-user-graduate"><h3 class = "role">${obj.role}</h3></i>
    </div>
    <p>ID: ${obj.id}</p>
    <p>Email: <span><a href = "mailto:${obj.email}">${obj.email}</a></span></p>
    <p>School: ${obj.school}</span></p>
</div>

                        `;
          }
      });
    
    return `
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
<link rel="stylesheet" href="./style.css">
<body>
    <div class = "header-container">
        <h1 class = "header">My Team</h1>
    </div>
    <div class = "container">
        ${employeeDataArr.join('')}
    </div>
</body>
    `
}

 // <div class = "container">    
    //     <div class = "card">
    //         <div class = "card-header">
    //             <h3>Anshul</h3>
    //             <i class="fas fa-mug-hot"><h3 class = "role">Manager</h3></i>
    //         </div>
    //         <p>Id: 31</p>
    //         <p>Email: sinha.anshul1@gmail.com</p>
    //         <p>Office Number: 23</p>
    //     </div>
    // </div>

module.exports = generateHtml;