<?php

namespace DomenART\Theme\Services;

use DomenART\Theme\Service;
use DomenART\Theme\Service_Container;

/**
 * Class Ajax
 *
 * @package DomenART\Theme
 */
class Ajax implements Service
{

    /**
     * @param Service_Container $container
     */
    public function register(Service_Container $container): void
    {
    }

    /**
     * @param Service_Container $container
     */
    public function boot(Service_Container $container): void
    {
        \add_action('wp_enqueue_scripts', [$this, 'ajax_data'], 99);

        \add_action('wp_ajax_get_agreement', [$this, 'get_agreement_callback']);
        \add_action('wp_ajax_nopriv_get_agreement', [$this, 'get_agreement_callback']);
    }

    /**
     * @return string
     */
    public function get_service_name(): string
    {
        return 'acf';
    }

    public function ajax_data(): void
    {
        \wp_localize_script('scripts', 'theme_ajax', [
            'url' => \admin_url('admin-ajax.php'),
        ]);
    }

    public function get_agreement_callback(): void
    {
        $whatever = intval($_POST['whatever']);

        echo $whatever + 10;

        // выход нужен для того, чтобы в ответе не было ничего лишнего, только то что возвращает функция
        wp_die();
    }

}
