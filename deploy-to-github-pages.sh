#!/bin/bash

# fro now you need to have a local copy of contentavuedemo.github.io		
npm run generate		
rm -rf ../contentavuenuxt.github.io/*		
cp -r dist/ ../contentavuenuxt.github.io		
cd ../contentavuenuxt.github.io		
git add . && git commit -m "deploy" && git push		
cd -		
echo "deployment ok"
