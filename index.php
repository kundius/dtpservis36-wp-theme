<!DOCTYPE html>
<html class="no-js" <?php language_attributes();?> itemscope itemtype="http://schema.org/WebSite">
  <head>
    <?php get_template_part('partials/head');?>
  </head>
  <body <?php body_class();?>>
    <?php wp_body_open();?>

    <div class="ui-wrapper">
      <?php get_template_part('partials/header');?>

      <?php if (have_posts()) : while ( have_posts() ) : the_post(); ?>
            
      <div class="ui-container">
        <h1>
            <?php the_title() ?>
        </h1>
        <?php the_content() ?>
      </div>

      <?php endwhile; else: ?>
        <p>Извините, ничего не найдено.</p>
      <?php endif; ?>

      <?php get_template_part('partials/footer');?>
    </div>
  </body>
</html>
