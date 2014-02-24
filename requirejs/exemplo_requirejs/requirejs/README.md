RequireJS
=========

RequireJS is a JavaScript file and module loader

Why RequireJS? http://requirejs.org/docs/why.html
--

* Web sites are turning into Web apps 2011
* Code complexity grows as the site gets bigger
* Assembly gets harder
* Developer wants discrete JS files/modules
* Deployment wants optimized code in just one or a few HTTP calls

Solution?
--
* Some sort of #include/import/require
* Ability to load nested dependencies
* Ease of use for developer but then backed by an optimization tool that helps deployment

RequireJS loads AMD modules - http://requirejs.org/docs/whyamd.html

Journey From RequireJS to Browserify - http://esa-matti.suuronen.org/blog/2013/03/22/journey-from-requirejs-to-browserify/