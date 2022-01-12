cd final
rm -rf report

npm install

[ $? -eq 0 ]  || exit 1

npm run lint
[ $? -eq 0 ]  || exit 1

npm test
[ $? -eq 0 ]  || exit 1

npm run cover
[ $? -eq 0 ]  || exit 1



