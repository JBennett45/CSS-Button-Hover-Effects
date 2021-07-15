var elixir = require('laravel-elixir');
var domain = 'http://testingarea.local/button-hovers/';
var folderDir = 'dist/';


elixir.config.assetsPath = folderDir
elixir.config.publicPath = folderDir
elixir.config.css.outputFolder = 'css';
elixir.config.css.sass.folder = 'scss';

elixir(function(mix) {
	mix.sass('styles.scss');
});


elixir(function(mix) {
	mix.browserSync({
		open: false,
		proxy: domain,
		injectChanges: true,
		files: [
			folderDir+'/css/**/*.css',
			folderDir+'/scss/sass/**/*.scss',
			folderDir+'/js/**/*.js'
		]
	});
});
