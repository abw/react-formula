mkdir -p dist/styles && \
sass --load-path=node_modules styles/formula-build.scss > dist/styles/formula.css
#&& \
#sass --load-path=node_modules styles/formula-bem.scss > dist/styles/formula-bem.css