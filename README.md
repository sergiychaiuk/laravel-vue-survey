# Survey Application

This is a full stack application that makes it possible to perform and create surveys with the display of relevant statistics. While building this app, I created a REST API in Laravel with authentication, configured a Vue project, integrated Tailwind.css

### Built With

* [![Laravel][Laravel.com]][Laravel-url]
* [![Vue][Vue.js]][Vue-url]
* [![Tailwindcss][Tailwindcss.com]][Tailwindcss-url]

## Installation

#### Backend
1. Clone the project
2. Go to the project root directory
3. Run `composer install`
4. Create database
5. Copy `.env.example` into `.env` file and adjust parameters
6. Run `php artisan serve` to start the project at http://localhost:8000

#### Frontend
1. Navigate to `vue` folder using terminal
2. Run `npm install` to install vue.js project dependencies
3. Copy `vue/.env.example` into `vue/.env` and specify API URL
4. Start frontend by running `npm run dev`
5. Open http://localhost:3000

[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Tailwindcss.com]: https://img.shields.io/badge/Tailwindcss-F2F2F2?style=for-the-badge&logo=tailwindcss&logoColor=06ADC9
[Tailwindcss-url]: https://tailwindcss.com/
