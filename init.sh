#!/bin/bash

cd ..
npm init -y
npm install express

cd jshtmlgenerator

./enable.sh

git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git
git config --global user.name radekbrep
git config --global user.email radekbeneda@gmail.com


#to run 
#node server.js


# Make sure you are not clonning via https
# git remote set-url origin git@github.com:radekbrep/jshtmlgenerator.git



