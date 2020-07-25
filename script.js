/*jshint esversion: 6 */
$(function() {
    $('#front-end').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
                I’m the Software Engineering Manager for the front-end team at Tracer, a marketing data aggregation and analytics platform. I get jazzed by design systems and pattern libraries, and delivering tools and processes focused on the transition from idea to design to code. Currently, I’m working on converting an Ember/Coffeescript application to React, Redux, and Storybook.
            </p>`     
        ));
    $('#design').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
            Before diving into full time web development I was a senior designer and front-end developer at Visual Dialogue, a small agency working on big projects. Over five years I worked on a couple dozen brands doing a variety of projects including branding, books, magazines, music packaging, web sites, ecommerce platforms, advertising, you name it.
            </p>`    
        ));
    $('#awesome').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
            Last year I backpacked over 150 miles including the Grand Canyon Rim to Rim to Rim&mdash;around 50 miles, 21,000 feet in elevation change, over 6 days.
            <br/><br/>
            In 2015 my husband and I converted a 1999 ford econoline e350 into a campervan. We took off in August and spent three months living and working in the van as we drove 13,000 miles around the country.
            </p>`    
        ));
    $('.project').hover( 
        () =>
            $('.project:not(:hover)').addClass('project__fade-out'),
        () =>
            $('.project').removeClass('project__fade-out')
    );
});
