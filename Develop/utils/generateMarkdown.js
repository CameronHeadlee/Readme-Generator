//should be able to render different pieces of the markdown file 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//this if a function for your questions
function generateMarkdown(answers) {
  return `# ${answers.Title}\n
  ## Description
  ${answers.Description}\n
  ## Notes
  ${answers.Repo}\n
  ## Usage Information
  ${answers.Contribute}\n
  ## Test
  ${answers.Tests}\n
  ## Install
  ${answers.Command}\n
  ## License 
  ${answers.License}\n
  ## Contact
  ${answers.Username}\n
  ${answers.Email}\n
`;
}

module.exports = generateMarkdown;
