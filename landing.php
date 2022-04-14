<?php
/*
Template Name: Главная
*/
?>
<!DOCTYPE html>
<html class="no-js" <?php language_attributes();?> itemscope itemtype="http://schema.org/WebSite">
  <head>
    <?php get_template_part('partials/head');?>
  </head>
  <body <?php body_class();?>>
    <?php wp_body_open();?>

    <div class="ui-wrapper">
      <?php get_template_part('partials/header') ?>

      <section class="intro">
        <div class="ui-container">
          <div class="intro-special">
            <div class="intro-special__title">
              Спецпредложение!
            </div>
            <div class="intro-special__desc">
              При заявке с сайта <span>оформление европротокола БЕСПЛАТНО!</span>
            </div>
          </div>

          <div class="intro__body">
            <form class="intro-form">
              <div class="intro-form__title">
                <span>Оформление ДТП</span>
                в Воронеже
              </div>
              <div class="intro-form__desc">
                Служба аварийных комиссаров
              </div>
              <div class="intro-form__input">
                <div class="ui-input-phone">
                  <div class="ui-input-phone__label">Введите ваш номер телефона</div>
                  <input type="text" class="ui-input-phone__input" name="your-phone" />
                </div>
              </div>
              <div class="intro-form__submit">
                <button class="ui-button-primary">Вызвать комиссара</button>
              </div>
            </form>

            <div class="intro__urgent">
              Срочно!!!
            </div>
          </div>

          <div class="intro-advantages">
            <div class="intro-advantages__item">
              <div class="intro-advantages__item-title">
                Оперативно -
              </div>
              <div class="intro-advantages__item-desc">
                выезд на место за 5 мин
              </div>
            </div>
            <div class="intro-advantages__item">
              <div class="intro-advantages__item-title">
                Воронеж -
              </div>
              <div class="intro-advantages__item-desc">
                комиссары во всех районах
              </div>
            </div>
            <div class="intro-advantages__item">
              <div class="intro-advantages__item-title">
                Выгодно -
              </div>
              <div class="intro-advantages__item-desc">
                оформление европротокола бесплатно
              </div>
            </div>
          </div>
        </div>
      </section>

      <?php get_template_part('partials/footer') ?>
    </div>
  </body>
</html>
