Different type of testing
-manual Testing
-Automation Testing
    -selenium Testing


-E2E Testing (end to end) - Covers entire user Journey

-Unit Testing
-Integration Testing

React testing library uses jest behind the scenes

npm i -D @testinglibrary/react
npm i -D jest
configure jest (npx jest --init)
npm i -D jest-environment-jsdom

test folder format __tests__ using dunder

test file should be in format of file.spec or file.test


install @testinglibrary/react
install jest because testing library is depended on jest
install jsdom because we need browerlike environment to test app

configure bable so that we can use import inside test file
npm i -D babel-jest @babel/core @babel/preset-env

npm i @babel/preset-react so that jest understand jsx

to change all png image write below code in jest.config
moduleNameMapper:{
    "\\.(jpg|png|svg)":"../mocks/dummyLogo.js"
}