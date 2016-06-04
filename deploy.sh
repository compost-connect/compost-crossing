git checkout master
git branch -D gh-pages
git checkout -b gh-pages
webpack
mv ./build/* ./
git add .
git commit -m 'deploy branch'
git push origin gh-pages -f
git checkout master
