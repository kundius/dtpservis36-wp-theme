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
          <div class="ui-container">
            <div class="why-we__layout">
              <div class="why-we__layout-title">
                <div class="why-we__title">Почему мы</div>
              </div>
              <div class="why-we__layout-desc">
                <div class="why-we__desc">
                  За время плодотворной работы мы заслужили репутацию надежных экспертов во всем Воронеже.
                </div>
              </div>
              <div class="why-we__layout-items">
                <ul class="why-we__items">
                  <li>20 лет работы</li>
                  <li>Профессионалы комиссары</li>
                  <li>Более 10 000 оформлений</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <?php $reviews = get_field('theme_reviews_items', 'options') ?>
        <script>
          var theme_reviews = <?php echo json_encode($reviews) ?>;
        </script>
        <section class="reviews">
          <div class="ui-container">
            <div class="reviews__layout">
              <div class="reviews__layout-content">
                
                <div class="reviews-preview">
                  <div class="reviews-preview__figure">
                    <div class="reviews-preview__figure-image" style="background-image: url('<?php echo $reviews[0]['image']['url'] ?>')"></div>
                    <div class="reviews-preview__figure-more">
                      <button class="reviews-preview__more">
                        читать отзыв полностью
                        <span class="reviews-preview__more-arrow"></span>
                      </button>
                    </div>
                  </div>
                  <div class="reviews-preview__content">
                    <div class="reviews-preview__video">
                      <?php echo $reviews[0]['video'] ?>
                    </div>
                    <div class="reviews-preview__content">
                      <?php echo $reviews[0]['excerpt'] ?>
                    </div>
                  </div>
                </div>
                
                <div class="reviews-details">
                  <button class="reviews-details__close"></button>
                  <div class="reviews-details__figure">
                    <div class="reviews-details__figure-image" style="background-image: url('<?php echo $reviews[0]['image']['url'] ?>')"></div>
                  </div>
                  <div class="reviews-details__content">
                    <div class="reviews-details__video">
                      <?php echo $reviews[0]['video'] ?>
                    </div>
                    <div class="reviews-details__content">
                      <?php echo $reviews[0]['content'] ?>
                    </div>
                  </div>
                </div>
              
              </div>

              <div class="reviews__layout-info">
                <?php if ($title = get_field('theme_reviews_title', 'options')): ?>
                <div class="reviews-info__title">
                  <?php echo $title ?>
                </div>
                <?php endif; ?>
                <div class="reviews-info__date">
                  <?php echo $reviews[0]['date'] ?>
                </div>
                <div class="reviews-info__group">
                  <div class="reviews-info__name">
                    <?php echo $reviews[0]['name'] ?>
                  </div>
                  <div class="reviews-info__desc">
                    <?php echo $reviews[0]['description'] ?>
                  </div>
                </div>
                <div class="reviews-info__nav">
                  <button class="reviews-info__nav-left"></button>
                  <button class="reviews-info__nav-right"></button>
                </div>
                <div class="reviews-info__send">
                  <button class="ui-button-primary">
                    Добавиьте свой отзыв
                    <span class="ui-button-primary__plus"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      </div>

      <?php get_template_part('partials/footer') ?>
    </div>
  </body>
</html>
