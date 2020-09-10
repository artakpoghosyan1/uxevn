<div class="navigation bg-dark" id="navWrapper">
    <div class="navigation__inner">
        <div class="navigation__top flex justify--space-between align-items--center">
            <span class="logo bg-contain"><a href="/#homeSection" class="scroll-page"><i class="icon-logo"></i></a></span>
            <span class="navigation__close nav-close" id="navButton" onclick="toggleClass('navWrapper')"></span>
        </div>
        <div class="navigation__content">
            <div class="navigation__menu scroll">
                <div>
                    <p class="navigation__title">
                        <span>Hello</span><span>there</span>
                        <span class="navigation__icon"><img src="images/hand.svg" alt=""></span>
                    </p>
                    <p class="navigation__description">
                        Our goal is to ensure annual conferences with various world-class professionals to create disciples, connect big and small design communities, and level up skills and mindsets for all the tech specialists where user experience is crucial.
                    </p>
                    <a href="#buyTicketSection" class="navigation__button def-button def-button--primary scroll-page hide-for-mobile">
                        <span class="def-button__inner">buy tickets</span>
                    </a>
                </div>
                <div>
                    <p class="navigation__subtitle">Menu</p>
                    <?php include('menu.php'); ?>
                </div>
                <div class="hide-for-mobile">
                    <p class="navigation__subtitle">Social</p>
                    <ul class="menu-list menu-list--secondary">
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Telegram</a></li>
                        <li><a href="">Linkedin</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
            </div>
            <div class="navigation__bottom hide-for-mobile">
                <ul class="info-list">
                    <li><a href="mailto:hello@uxevn.com">hello@uxevn.com</a></li>
                    <li><a href="index.php?page=code-of-conduct">Code of conduct</a></li>
                    <li><a href="index.php?page=privacy-policy">Privacy and policy</a></li>
                </ul>
                <span class="navigation__terms">
                    <span>Terms & Conditions: Tickets are non-refundable but transferable.</span>
                    <span>Design2Science reserves the right to cancel or replace speakers.</span>
                </span>
             </div>
        </div>
    </div>
</div>
