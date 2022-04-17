<header class="header">
  <div class="ui-container ui-container_large header__container">
    <button class="header__toggle"></button>
    <a href="/" class="header__logo">
      <img src="<?php bloginfo('template_url') ?>/dist/images/logo.png" alt="<?php bloginfo('name') ?>" />
    </a>
    <ul class="header__about">
      <li>Выезд за 5 минут на место</li>
      <li>Оформление ДТП в Воронеже</li>
    </ul>
    <div class="header__sep-1"></div>
    <ul class="header__menu">
      <li>
        <a href="#services">Услуги</a>
      </li>
      <li>
        <a href="#advantages">Преимущества</a>
      </li>
      <li>
        <a href="#reviews">Отзывы</a>
      </li>
      <li>
        <a href="#contacts">Контакты</a>
      </li>
    </ul>
    <div class="header__sep-2"></div>
    <div class="header__phone">
      <a href="tel:<?php the_field('theme_phone', 'options') ?>" class="header__phone-number"><?php the_field('theme_phone', 'options') ?></a>
      <div class="header__phone-time">круглосуточно, без выходных</div>
    </div>
  </div>
</header>

<div class="header-placeholder"></div>

<div class="messengers">
  <a href="tel:<?php the_field('theme_phone', 'options') ?>" class="messengers__item messengers__item_phone"></a>
  <a href="viber://add?number=<?php echo preg_replace("/[^,.0-9]/", '', get_field('theme_viber', 'options')) ?>" class="messengers__item messengers__item_viber"></a>
  <a href="whatsapp://send?text=Hello&phone=<?php the_field('theme_whatsapp', 'options') ?>" class="messengers__item messengers__item_whatsapp"></a>
</div>
