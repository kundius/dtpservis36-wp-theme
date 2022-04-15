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

        \add_action('wp_ajax_get_page', [$this, 'get_page_callback']);
        \add_action('wp_ajax_nopriv_get_page', [$this, 'get_page_callback']);
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

    public function get_page_callback(): void
    {
        $id = intval($_POST['id']);

        if (!$id) {
            echo json_encode([
                'success' => false,
            ]);
        }

        echo json_encode([
            'success' => true,
            'data' => [
                'title' => get_the_title($id),
                'content' => get_the_content($id),
            ],
        ]);

        wp_die();
    }

}
