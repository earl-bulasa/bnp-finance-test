<h2>System specs when developing</h2>
<ul>
    <li>PHP 8.0.12</li>
    <li>Apache 2.4.51</li>
    <li>MariaDB 10.4.21</li>
    <li>Nodejs 16.13.2</li>
    <li>NPM 8.1.2</li>
</ul>

<h2>Backend</h2>
<ol>
    <li>Go to the backend folder</li>
    <li>Duplicate the .env.example file and rename to .env</li>
    <li>Update the database section (database name, user, and password) in the .env file</li>
    <li>Go to the backend folder via command line.</li>
    <li>Run <b>composer install</b> to install the dependencies</li>
    <li>Run <b>php artisan key:generate</b> to generate the project key</li>
    <li>Run <b>php artisan migrate --seed</b> to generate the database and to populate the data</li>
    <li>Run <b>php artisan serve</b> to run the project</li>
</ol>

<h2>Frontend</h2>
<ol>
    <li>Go to the frontend folder via command line.</li>
    <li>Run <b>npm install</b> to install the dependencies</li>
    <li>Run <b>npm start</b> to start the project</li>
</ol>