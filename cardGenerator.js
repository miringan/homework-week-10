// Exports generateEmployeeCard function to generator.js
module.exports = {generateEmployeeCard};

// Returns html code for stylized bootstrap cards specific to each type of employee
function generateEmployeeCard(employee) {
    // Returns html code for Manager objects
    if (employee.getRole() === 'Manager') {
        return `
        <div class="card " style="width: 18rem;">
            <div class="card-header text-light bg-primary">
            ${employee.name} <br>
            Manager
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
            </ul>
        </div>
        `
    // Returns html code for Engineer objects
    } else if (employee.getRole() === 'Engineer') {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header text-light bg-secondary">
            ${employee.name} <br>
            Engineer
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
            </ul>
        </div>
        `
    // Returns html code for Intern objects
    } else {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-header text-light bg-secondary">
            ${employee.name} <br>
            Intern
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
            </ul>
        </div>
        `
    }
}