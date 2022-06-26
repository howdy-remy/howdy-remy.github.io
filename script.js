/*jshint esversion: 6 */
$(function() {
    $('#front-end').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
                        I recently wrapped up as an Senior Engineer at Ro, a telehealth company, where I worked on projects from member retention to being the only frontend engineer on the launch of their Mental Health offering, Ro Mind. Before that I was the Software Engineering Manager for the front-end team at Tracer, a marketing data aggregation and analytics platform, where I led their Ember-to-React conversion. I get jazzed by design systems and pattern libraries, and delivering tools and processes focused on the transition from idea to design to code.
            </p>`     
        ));
    $('#design').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
            Before diving into full time web development I was a senior designer and front-end developer at Visual Dialogue, a small agency working on big projects. Over five years I worked with a couple dozen clients doing a variety of projects including brand systems, books, magazines, music packaging, web sites, ecommerce platforms, advertising, you name it.
            </p>`    
        ));
    $('#awesome').click( () =>
        $('#intro__deets').replaceWith(
            `<p id='intro__deets'>
            In 2019 I backpacked over 150 miles including the Grand Canyon Rim to Rim to Rim&mdash;around 50 miles, 21,000 feet in elevation change, over 6 days.
            <br/><br/>
            In 2015 my husband and I converted a 1999 ford econoline e350 into a campervan. We took off in August and spent three months living and working in the van as we drove 13,000 miles around the country.
            <br/><br/>
            Nowadays I garden in the summer, build furniture in the winter, and play video games through the year.
            </p>`    
        ));
    $('.project').hover( 
        () =>
            $('.project:not(:hover)').addClass('project__fade-out'),
        () =>
            $('.project').removeClass('project__fade-out')
    );
});
