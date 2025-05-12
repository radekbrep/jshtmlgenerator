#!/bin/bash

cd ..
npm init -y
npm install express

cd jshtmlgenerator

./enable.sh

git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git



#to run 
#node server.js


# Make sure you are not clonning via https
# git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git



