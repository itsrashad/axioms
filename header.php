<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Axioms
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body id="block_1">
	<nav class="pushy pushy-left">
		<div class="pushy-content">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'top-menu',
				'menu_id'        => 'primary-menu',
				'menu_class'     => false,
				'container'      => false,
			) );
			?>
		</div>
	</nav>

	<!-- Site Overlay -->
    <div class="site-overlay"></div>
    <div class="wraper" id="container">
    	<header>
    		<div class="container">
				<div class="header">
					<?php //the_custom_logo(); ?>
					<a href="#block_1" class="logo" class="scroll"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt=""></a>
					<?php
					wp_nav_menu( array(
						'theme_location' => 'top-menu',
						'menu_id'        => 'primary-menu',
						'menu_class'     => 'nav',
						'container'      => false,
					) );
					?>
					<button class="menu-btn"></button>
				</div>
			</div>
		</header>   	