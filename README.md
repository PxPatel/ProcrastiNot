
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="frontend/disco_ball.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">ProcrastiNot: GirlHacks 2024</h3>

  <p align="center">
    The smarter way to start your assignments<br>
    Made by <a href="https://github.com/rshah713">@rshah713</a>, 
    <a href="https://github.com/PxPatel">@pxpatel</a>, 
    <a href="https://github.com/AnanyaTyagi08">@AnanyaTyagi08</a>, and 
    <a href="https://github.com/vjanakiraman02">@vjanakiraman02</a>.
</p>

</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img src="./procrastinot demo.gif" width="400" alt="Demo Gif">
</p>

**ProcrastiNot** is an AI-powered productivity tool that helps students conquer procrastination by optimizing their study schedules. It scrapes courses directly from Canvas, calculates the time needed for each assignment, and determines the most optimal start dates and times. ProcrastiNot then automatically exports this personalized schedule to Google Calendar, ensuring students stay organized, manage their workload efficiently, and never miss a deadline.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To build locally from scratch, you must build the frontend and backend seperately.

### Prerequisites

The backend requires a valid [OAuth 2.0 Access Token](https://developers.google.com/identity/protocols/oauth2) along with the dependencies listed in [requirements.txt](/requirements.txt).

  ```sh
   git clone https://github.com/PxPatel/ProcrastiNot.git
   pip install -r requirements.txt
  ```

### Installation

1. Build the backend by running `uvicorn main:app --reload` within `/api`
2. Capture the exposed local url (such as `http://127.0.0.1:8000`)
3. Visit `chrome://extensions/`
4. Press _Load Extension_ and unpack the `/frontend` folder
5. Run the application and check your personal Google Calendar

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Authors

This project was completed under NJIT GirlHacks 2024 by [@rshah713](https://github.com/rshah713), [@pxpatel](https://github.com/PxPatel), [@AnanyaTyagi08](https://github.com/AnanyaTyagi08), and [@vjanakiraman02](https://github.com/vjanakiraman02).


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
