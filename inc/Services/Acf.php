<?php

namespace DomenART\Theme\Services;

use DomenART\Theme\Service;
use DomenART\Theme\Service_Container;

/**
 * Class Acf
 *
 * @package DomenART\Theme
 */
class Acf implements Service
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
        \add_action('acf/init', [$this, 'on_init']);
    }

    /**
     * @return string
     */
    public function get_service_name(): string
    {
        return 'acf';
    }

    public function on_init(): void
    {
        $this->add_options_page();
        $this->register_acf_fields();
    }

    public function add_options_page(): void
    {
        \acf_add_options_page(array(
            'page_title' => 'Параметры',
            'menu_title' => 'Параметры',
            'menu_slug' => 'acf-options',
            'capability' => 'edit_posts',
            'redirect' => false,
        ));
    }

    public function register_acf_fields(): void
    {
        \acf_add_local_field_group([
            'key' => 'group_theme_reviews',
            'title' => 'Отзывы',
            'fields' => [
                [
                    'key' => 'group_theme_reviews_tab',
                    'label' => 'Отзывы',
                    'name' => 'theme_reviews_tab',
                    'type' => 'tab',
                ],
                [
                    'key' => 'group_theme_reviews',
                    'label' => 'Отзывы',
                    'name' => 'theme_reviews',
                    'type' => 'group',
                    'fields' => [
                        [
                            'key' => 'group_theme_reviews_title',
                            'label' => 'Заголовок',
                            'name' => 'theme_reviews_title',
                            'type' => 'text',
                        ]
                    ],
                ],
            ],
            'location' => [
                [
                    [
                        'param' => 'options_page',
                        'operator' => '==',
                        'value' => 'acf-options',
                    ],
                ],
            ],
        ]);
    }

}
