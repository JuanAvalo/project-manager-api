


## About The Project

This API was developed to manage projects and the users involved. It allows you to create projects, assign multiple managers and assignees, and change its status according to the work done.


### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)

## Usage

To use the API access the deployed instance, starting by the _[Documentation](https://projectmanager-avalo.herokuapp.com/docs/)_

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Alternatively, to get a local copy up and running follow these simple steps.

### Prerequisites

* MySql
	* Folow this [installation steps](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
	* Create a database for the app. 

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/JuanAvalo/project-manager-api
   cd project-manager-api
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Configure in the root folder your `.env` file following the `.env.example` provided
   ```js
   
	    DB_USER= 		'YOUR MYSQL DB USER',
	    DB_PASSWORD= 	'YOUR MYSQL DB PASSWORD',
	    DB_NAME= 		'YOUR MYSQL DB NAME',
	    DB_HOST= 		'YOUR MYSQL DB HOST'
	    PORT= 		'YOUR SERVER APP PORT'
	    URL= 		'YOUR SERVER URL (e.g. http://localhost:3000)'
	    JWT_KEY= 		'YOUR SECRET PASSPHRASE FOR TOKEN GENERATION'
		
   ```  
4. Run the db migrations
   ```sh
   npx sequelize-cli db:migrate
   ``` 
5. Run the db seeder
   ```sh
   npx sequelize-cli db:seed:all
   ```
6. Done! Run the app
   ```sh
   npm start
   ```




<!-- CONTACT -->
## Contact
<center>
<a href="mailto:avalojuanma@gmail.com"> <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"> </a>
<a href="https://www.linkedin.com/in/avalojuan/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"> </a>
</center>

<p align="right">(<a href="#top">back to top</a>)</p>