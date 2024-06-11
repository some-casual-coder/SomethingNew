const navbar = `
<div class="nav-wrapper">
<nav class="navbar">
    <style>
        /* NAVIGATION */

        .nav-wrapper {
            width: 100%;
            position: -webkit-sticky;
            /* Safari */
            position: sticky;
            top: 0;
            background-color: #fff;
        }

        .navbar {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            overflow: hidden;
            box-shadow: 0 3px 2px -2px gray;
        }

        .navbar img {
            height: 50px;
            width: auto;
            justify-self: start;
            margin-top: 10px;
            margin-left: 50px;
        }

        .navbar .nav {
            float: right;
            margin-top: 10px;
            margin-right: 50px;
        }

        .navbar ul {
            list-style: none;
            display: flex;
            float: right;
        }

        .nav-item a {
            color: var(--orange);
            font-size: 1.1rem;
            font-weight: 400;
            padding: 10px;
            text-decoration: none;
            transition: color 0.3s ease-out;
        }

        .nav-item a:hover {
            color: var(--blue);
        }

        /* MOBILE MENU & ANIMATION */

        .menu-toggle .bar {
            width: 25px;
            height: 3px;
            background-color: #3f3f3f;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }

        .menu-toggle {
            justify-self: end;
            margin-right: 25px;
            display: none;
        }

        .menu-toggle:hover {
            cursor: pointer;
        }

        #mobile-menu.is-active .bar:nth-child(2) {
            opacity: 0;
        }

        #mobile-menu.is-active .bar:nth-child(1) {
            -webkit-transform: translateY(8px) rotate(45deg);
            -ms-transform: translateY(8px) rotate(45deg);
            -o-transform: translateY(8px) rotate(45deg);
            transform: translateY(8px) rotate(45deg);
        }

        #mobile-menu.is-active .bar:nth-child(3) {
            -webkit-transform: translateY(-8px) rotate(-45deg);
            -ms-transform: translateY(-8px) rotate(-45deg);
            -o-transform: translateY(-8px) rotate(-45deg);
            transform: translateY(-8px) rotate(-45deg);
        }

        @media only screen and (max-width: 720px) {
            /* MOBILE NAVIGATION */

            .navbar ul {
                display: flex;
                flex-direction: column;
                position: fixed;
                justify-content: start;
                top: 55px;
                background-color: #fff;
                width: 100%;
                height: calc(100vh - 55px);
                transform: translate(-101%);
                text-align: center;
                overflow: hidden;
            }

            .navbar li {
                padding: 15px;
            }

            .navbar li:first-child {
                margin-top: 50px;
            }

            .navbar li a {
                font-size: 1rem;
            }

            .menu-toggle,
            .bar {
                display: block;
                cursor: pointer;
            }

            .mobile-nav {
                transform: translate(0%) !important;
            }
        }
    </style>
    <img src="../images/logo.png" alt="Company Logo">
    <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
    <ul class="nav no-search">
        <li class="nav-item"><a href="https://sky-swift.com/">Home</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/about-us/">About Us</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/logistics-services/">Logistics Services</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/aviation-consulting/">Aviation Consulting</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/furnished-apartments/">Furnished Apartments</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/contact/">Contact Us</a></li>
        <li class="nav-item"><a href="https://sky-swift.com/shop/">Shop</a></li>
    </ul>
</nav>
</div>
`;

document.querySelector("body").insertAdjacentHTML("afterbegin", navbar);