deploy:
	git subtree push --prefix src/ . gh-pages
	git push origin gh-pages:gh-pages
server:
	php -S localhost:8000 -t src
open:
	open http://kfug.github.io/frontconf2016/