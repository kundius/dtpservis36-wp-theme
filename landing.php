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
                <label class="ui-input-phone">
                  <input
                    type="text"
                    class="ui-input-phone__input"
                    name="your-phone"
                    data-inputmask="'mask': '+7 (999) 999-99-99'"
                    placeholder="+7 (___) ___-__-__"
                  />
                  <span class="ui-input-phone__label">Введите ваш номер телефона</span>
                </label>
              </div>
              <div class="intro-form__submit">
                <button class="ui-button-primary" type="button">
                  Вызвать комиссара
                </button>
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

      <div class="section-for-bg">
        <section class="additional">
          <div class="ui-container">
            <div class="additional__title">Кроме того, выполняем:</div>
            <div class="additional__grid">
              <div class="additional__grid-cell">
                <div class="additional-item">
                  <div class="additional-item__number">1</div>
                  <div class="additional-item__title">Бесплатная консультация</div>
                  <div class="additional-item__image">
                    <img src="<?php bloginfo('template_url') ?>/dist/images/additional-1.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="additional__grid-cell">
                <div class="additional-item">
                  <div class="additional-item__number">2</div>
                  <div class="additional-item__title">Юридическое сопровождение</div>
                  <div class="additional-item__image">
                    <img src="<?php bloginfo('template_url') ?>/dist/images/additional-2.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="additional__grid-cell">
                <div class="additional-item">
                  <div class="additional-item__number">3</div>
                  <div class="additional-item__title">Оценка ущерба</div>
                  <div class="additional-item__image">
                    <img src="<?php bloginfo('template_url') ?>/dist/images/additional-3.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="why-we">
          <div class="ui-container why-we__container">
            <div class="why-we__title">Почему мы</div>
            <div class="why-we__desc">
              За время плодотворной работы мы заслужили репутацию надежных экспертов во всем Воронеже.
            </div>
            <ul class="why-we__items">
              <li>20 лет работы</li>
              <li>Профессионалы комиссары</li>
              <li>Более 10 000 оформлений</li>
            </ul>
          </div>
        </section>
      </div>

      <?php get_template_part('partials/footer') ?>
    </div>
  </body>
</html>
