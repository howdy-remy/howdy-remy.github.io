/*jshint esversion: 6 */
$(function() {
    $('#front-end').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            I am an L2 front-end engineer at Tracer, a marketing data aggregation and analytics platform. Previously I’ve been at home in creative agencies building client websites and internal tools. Currently I’m working with Ember, Coffeescript, Sass, and Python&mdash;what are { curly brackets } again?
            </p>`     
        ));
    $('#design').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            Before diving into full time web development I was a senior designer and front-end developer at Visual Dialogue, a small agency working on big projects. Over five years I worked on a couple dozen brands doing a variety of projects including branding, books, magazines, music packaging, web sites, ecommerce platforms, advertising, you name it.
            </p>`    
        ));
    $('#awesome').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            In 2015 my husband and I converted a 1999 ford econoline e350 into a campervan. We took off in August and spent three months living and working in the van as we drove 13000 miles around the country.
            </p>`    
        ));
    $('.project').hover( 
        () =>
            $('.project:not(:hover)').addClass('project__fade-out'),
        () =>
            $('.project').removeClass('project__fade-out')
    );
});
