/*jshint esversion: 6 */
$(function() {
    $('#front-end').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            I’m a front-end tech lead at Tracer, a marketing data aggregation and analytics platform–what a mouthful! Previously I’ve been at home in creative agencies building client websites and internal tools. Currently I’m working with an Ember/Coffeescript/Sass/Python stack&mdash;what are { curly brackets } again?
            </p>`     
        ));
    $('#design').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            Before diving into full time web development I was a designer at Visual Dialogue, a small agency working on big projects. Over five years I worked on a couple dozen brands doing a variety of projects including branding, books, magazines, music packaging, web sites, ecommerce platforms, advertising, and more.
            </p>`    
        ));
    $('#awesome').click( () =>
        $('.intro__deets').replaceWith(
            `<p class='intro__deets'>
            In 2015 my husband and I converted a 1999 ford econoline e350 into a campervan. We took off in August and spent three months living and working in the van as we drove 13000 miles around the country. Learn more about Vincent!
            </p>`    
        ));
    $('.project').hover( 
        () =>
            $('.project:not(:hover)').addClass('project__fade-out'),
        () =>
            $('.project').removeClass('project__fade-out')
    );
});
