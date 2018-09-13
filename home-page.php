<?php
/**
 * Template Name: Home Page
 **/

get_header(); ?>

<?php
if ( have_posts() ) :

	/* Start the Loop */
	while ( have_posts() ) :
		the_post();

		/*
		 * Include the Post-Type-specific template for the content.
		 * If you want to override this in a child theme, then include a file
		 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
		 */
		get_template_part( 'template-parts/content', 'home' );

	endwhile;

	the_posts_navigation();

else :

	get_template_part( 'template-parts/content', 'none' );

endif;
?>

<?php get_footer(); ?>