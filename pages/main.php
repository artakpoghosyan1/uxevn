<section class="wrapper-section wrapper-section--main" id="homeSection">
    <div class="wrapper-section__inner">
        <video class="video" loop>
            <source src="images/uxevn.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
        <div class="main-logo">
            <img src="images/logo.svg" alt="">
        </div>
        <div class="main-wrapper">
            <a href="#buyTicketSection" data-aos="fade-up" data-aos-offset="50" class="def-button def-button--fifth scroll-page hide-for-tablet scroll-page js-hover-reaction">
                <span class="def-button__inner">buy tickets</span>
            </a>
            <!--    <span class="messenger-box">-->
            <!--        <span class="messenger-box__icon">-->
            <!--            <i class="icon-messenger"></i>-->
            <!--        </span>-->
            <!--    </span>-->
        </div>
    </div>
</section>
<div class="banner bg-light" data-aos="fade-up">
    <div class="banner__inner inner-wrapper">
        <p class="banner__title" data-aos="fade-right">Proudly sponsored by</p>
        <div class="banner__img" data-aos="fade-right" data-aos-offset="50">
            <img src="/images/sponsors/workfront.svg" alt="Workfront">
        </div>
    </div>
</div>
<section class="wrapper-section" id="aboutSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top"></div>
        <?php include('about-us.php'); ?>
    </div>
</section>
<section class="wrapper-section wrapper-section--dark" id="speakersSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary color-white">Speakers</h1>
        </div>
        <?php include('speakers.php'); ?>
    </div>
</section>
<section class="wrapper-section wrapper-section--secondary bg-light" id="workshopSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary" data-aos="fade-up">Workshops</h1>
            <a href="#buyTicketSection" data-aos="fade-up" data-aos-offset="50" class="def-button def-button--secondary scroll-page fixed-bottom js-hover-reaction">
                <span class="def-button__inner">buy tickets</span>
            </a>
        </div>
        <?php include('workshops.php'); ?>
    </div>
</section>
<section class="wrapper-section wrapper-section--secondary wrapper-section--dark" id="scheduleSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary color-white" data-aos="fade-up">Schedule</h1>
            <a href="#buyTicketSection" data-aos="fade-up" data-aos-offset="50" class="def-button def-button--tertiary scroll-page fixed-bottom">
                <span class="def-button__inner">buy tickets</span>
            </a>
        </div>
        <?php include('schedule.php'); ?>
    </div>
</section>
<div class="twits-wrapper">
    <div class="twits-wrapper__inner inner-wrapper">
        <?php include('inc/twitts.php'); ?>
    </div>
</div>
<section class="wrapper-section" id="sponsorSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary" data-aos="fade-up">Sponsors</h1>
        </div>
        <?php include('sponsors.php'); ?>
    </div>
</section>
<section class="wrapper-section wrapper-section--dark" id="faqSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary color-white" data-aos="fade-up">Frequently Asked Questions</h1>
        </div>
        <?php include('faq.php'); ?>
    </div>
</section>
<section class="wrapper-section" id="buyTicketSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary" data-aos="fade-up">Buy Tickets</h1>
        </div>
        <?php include('buy-tickets.php'); ?>
    </div>
</section>
<section class="wrapper-section wrapper-section--dark" id="contactSection">
    <div class="wrapper-section__inner">
        <div class="wrapper-section__top">
            <h1 class="title title--primary" data-aos="fade-up">Contact Us</h1>
        </div>
        <?php include('contact.php'); ?>
    </div>
</section>
