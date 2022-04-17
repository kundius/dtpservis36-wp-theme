<footer class="footer">
  <div class="ui-container ui-container_large">
    <div class="footer__primary">
      <ul class="footer__menu">
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

      <a href="tel:<?php the_field('theme_phone', 'options') ?>" class="footer__phone">
      <?php the_field('theme_phone', 'options') ?>
        <span class="footer__phone-icon"></span>
      </a>
    </div>
    <div class="footer__secondary">
      <div class="footer__copyright">
        <?php the_field('theme_copyright', 'options') ?>
      </div>
      <ul class="footer__links">
        <li>
          <a href="<?php the_permalink(3) ?>" data-hystmodal-page="3">Пользовательское соглашение</a>
        </li>
        <li>
          <a href="<?php the_permalink(33) ?>" data-hystmodal-page="33">Политика обработки персональных данных</a>
        </li>
      </ul>
      <div class="footer__counters">
        <div class="footer__counters-item">
          <?php the_field('theme_counters', 'options') ?>
        </div>
        <div class="footer__counters-item">
          <a href="https://domenart-studio.ru/" class="footer-creator" target="_blank">
            <img src="<?php bloginfo('template_url') ?>/dist/images/creator.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<div class="hystmodal hystmodal--small" id="modal-review-form" aria-hidden="true">
  <div class="hystmodal__wrap">
    <div class="hystmodal__window" role="dialog" aria-modal="true">
      <button data-hystclose class="hystmodal__close"></button>

      <div class="hystmodal__title">
        Оставить отзыв
      </div>

      <form action="/wp-json/contact-form-7/v1/contact-forms/37/feedback" method="post" class="modal-form js-form">
        <div class="modal-form__process">
          <div class="modal-form__field">
            <label class="ui-input-field">
              <input
                type="text"
                class="ui-input-field__input"
                name="your-name"
              />
              <span class="ui-input-field__label">Ваше имя</span>
            </label>
          </div>

          <div class="modal-form__field">
            <label class="ui-input-field">
              <input
                type="text"
                class="ui-input-field__input"
                name="your-date"
              />
              <span class="ui-input-field__label">Дата</span>
            </label>
          </div>

          <div class="modal-form__field">
            <span class="wpcf7-form-control-wrap your-email">
              <label class="ui-input-field">
                <input
                  type="email"
                  class="ui-input-field__input"
                  name="your-email"
                />
                <span class="ui-input-field__label">Ваш e-mail*</span>
              </label>
            </span>
          </div>

          <div class="modal-form__field">
            <span class="wpcf7-form-control-wrap your-message">
              <label class="ui-input-field">
                <textarea
                  rows="4"
                  name="your-message"
                  class="ui-input-field__textarea"
                ></textarea>
                <span class="ui-input-field__label">Ваш отзыв*</span>
              </label>
            </span>
          </div>

          <div class="modal-form__file">
            <span class="wpcf7-form-control-wrap your-file">
              <div class="ui-input-file">
                <div class="ui-input-file__icon">
                  <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.463 5.576c-.688-.75-1.929-.796-2.756.031l-8.1 8.1c-.21.21-.21.476 0 .686.21.21.476.21.686 0l6.7-6.7a1 1 0 0 1 1.414 1.414l-6.7 6.7a2.45 2.45 0 0 1-3.514 0 2.45 2.45 0 0 1 0-3.514l8.1-8.1c1.567-1.568 4.115-1.619 5.63.015 1.552 1.569 1.597 4.104-.03 5.613l-9.486 9.486c-2.19 2.19-5.624 2.19-7.814 0-2.19-2.19-2.19-5.624 0-7.814l8.1-8.1a1 1 0 0 1 1.414 1.414l-8.1 8.1c-1.41 1.41-1.41 3.576 0 4.986 1.41 1.41 3.576 1.41 4.986 0l9.5-9.5.031-.03c.75-.687.796-1.929-.031-2.756l-.03-.031z" />
                  </svg>
                </div>
                <div class="ui-input-file__label">Прикрепить файл</div>
                <div class="ui-input-file__desc">(не более 30 Мб)</div>
                <input type="file" name="your-file" class="ui-input-file__input" />
              </div>
            </span>
          </div>

          <div class="modal-form__note">
            Поля, отмеченные *, обязательны для заполнения
          </div>

          <div class="modal-form__submit">
            <button type="submit" class="ui-button-secondary">
              <span class="ui-loader-square modal-form__loader"></span>
              Отправить отзыв
            </button>
          </div>
        </div>

        <div class="modal-form__success">
          <div class="modal-form-result modal-form-result_success">
            <div class="modal-form-result__head">
              <div class="modal-form-result__head-icon"></div>
              <div class="modal-form-result__head-title">
                Ваше сообщение
                успешно отправлено
              </div>
            </div>
            <div class="modal-form-result__body">
              <div class="modal-form-result__body-text">
                В ближайшее время<br />
                мы свяжемся с вами.
              </div>
              <div class="modal-form-result__body-close wpcf7-form-status-reset">
                Закрыть окно
              </div>
            </div>
          </div>
        </div>

        <div class="modal-form__failed">
          <div class="modal-form-result modal-form-result_failed">
            <div class="modal-form-result__head">
              <div class="modal-form-result__head-icon"></div>
              <div class="modal-form-result__head-title">
                Возникла ошибка
              </div>
            </div>
            <div class="modal-form-result__body">
              <div class="modal-form-result__body-text">
                Не удалось<br />
                отправить сообщение
              </div>
              <div class="modal-form-result__body-close wpcf7-form-status-reset">
                Закрыть окно
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hystmodal" id="modal-page" aria-hidden="true">
  <div class="hystmodal__wrap">
    <div class="hystmodal__window" role="dialog" aria-modal="true">
      <button data-hystclose class="hystmodal__close"></button>

      <div class="hystmodal__title" id="modal-page-title">
      </div>

      <div class="hystmodal__content" id="modal-page-content">
      </div>
    </div>
  </div>
</div>

<?php wp_footer();?>
