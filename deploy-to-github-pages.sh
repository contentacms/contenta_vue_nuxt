# you need to have a local copy of contentavuedemo.github.io
npm run generate
rm -rf ../contentavuedemo.github.io/*
cp -r dist/ ../contentavuedemo.github.io
cd ../contentavuedemo.github.io
git add . && git commit -m "deploy" && git push
cd -
echo "deployment ok"

